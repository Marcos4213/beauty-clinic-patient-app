import urllib.request
import urllib.error
import json
import base64
import os

# Config
REPO_OWNER = "Marcos4213"
REPO_NAME = "beauty-clinic-patient-app"
FILE_PATH = r"C:\Users\Marcos\Documents\Default Project\beauty-clinic\deploy\index.html"

print("=" * 60)
print("Beauty Clinic - GitHub Upload Script")
print("=" * 60)
print()

# Read the file
print(f"Reading {FILE_PATH}...")
with open(FILE_PATH, "r", encoding="utf-8") as f:
    content = f.read()
print(f"File size: {len(content)} chars")
print()

# Get GitHub token
token = input("Enter your GitHub Personal Access Token (or press Enter to skip): ").strip()
if not token:
    print()
    print("No token provided. Here's how to create one:")
    print("1. Go to https://github.com/settings/tokens")
    print("2. Click 'Generate new token (classic)'")
    print('3. Select scope: "repo" (Full control of private repositories)')
    print("4. Copy the token and paste it here")
    print()
    print("Or upload manually:")
    print("1. Go to https://github.com/Marcos4213/beauty-clinic-patient-app")
    print('2. Click "Add file" > "Upload files"')
    print("3. Drag index.html into the upload area")
    print('4. Click "Commit changes"')
    exit(0)

# Get current file SHA (needed for updates)
path = "index.html"
sha = None
try:
    url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/contents/{path}"
    req = urllib.request.Request(url, headers={
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json"
    })
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode())
        sha = data.get("sha", "")
        print(f"Current file SHA: {sha[:12]}...")
except urllib.error.HTTPError as e:
    if e.code == 404:
        print("File does not exist yet, will create new file")
    else:
        print(f"Error: {e}")
        exit(1)

# Create/update the file
print("Uploading to GitHub...")
b64_content = base64.b64encode(content.encode("utf-8")).decode("utf-8")
payload = {
    "message": "feat: add premium features - teleconsulta, treatment, medications, gallery, rewards, marketplace, community, wearables, settings, content",
    "content": b64_content
}
if sha:
    payload["sha"] = sha

data = json.dumps(payload).encode("utf-8")
url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/contents/{path}"
req = urllib.request.Request(url, data=data, method="PUT", headers={
    "Authorization": f"token {token}",
    "Content-Type": "application/json",
    "Accept": "application/vnd.github.v3+json"
})

try:
    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read().decode())
        print()
        print("SUCCESS!")
        print(f"File: {result.get('content', {}).get('name', 'index.html')}")
        print(f"Size: {result.get('content', {}).get('size', 0)} bytes")
        print()
        print("GitHub Pages will update in 1-2 minutes.")
        print("URL: https://marcos4213.github.io/beauty-clinic-patient-app/")
except urllib.error.HTTPError as e:
    error_body = e.read().decode()
    print(f"Upload failed: {e.code} - {error_body}")