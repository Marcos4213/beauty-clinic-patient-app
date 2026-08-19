# Mockups — Patient Mobile App (v2)

**Date:** 2026-08-02  
**Author:** Diana Design — UI/UX Designer  
**Context:** Gamified trichology treatment tracker — Patient-facing  
**Device:** iPhone 14 Pro (375×812)  
**Design System:** design-system-mobile.md

---

## Files

All mockups are complete HTML files with Tailwind CSS, ready to render in any browser.

| # | Screen | File | Description |
|---|--------|------|-------------|
| 1 | **Tela Inicial (Home)** | [`01-home.html`](01-home.html) | "Sua tarefa de hoje" com 1 ação clara, streak counter, progresso visual |
| 2 | **Check-in Diário** | [`02-checkin.html`](02-checkin.html) | Foto de progresso + checkbox de tratamento + log de sintomas |
| 3 | **Progresso** | [`03-progresso.html`](03-progresso.html) | Timeline de fotos antes/depois, score de compliance, gráfico de tendência |
| 4 | **Conquistas** | [`04-conquistas.html`](04-conquistas.html) | Badges desbloqueados, streak atual, próximo marco |
| 5 | **Jornada** | [`05-jornada.html`](05-jornada.html) | Narrativa do tratamento como "capítulos" que desbloqueiam |
| 6 | **Perfil** | [`06-perfil.html`](06-perfil.html) | Configurações, notificações, dados do paciente |

---

## Design Decisions

### Color Palette — Warm, Not Clinical
- **Background:** `#FFF8F5` (warm paper) — feels like a wellness journal
- **Primary:** Rose (`#F43F5E`) — energy, streaks, CTAs
- **Secondary:** Sage (`#4A7C4A`) — health, growth, completion
- **Accent:** Gold (`#D97706`) — rewards, achievements, points
- **Text:** Warm browns (`#2D2A26`, `#5C5650`) — not cold gray

### Typography — Friendly & Readable
- **Display:** DM Serif Display — warmth, personality
- **Body:** DM Sans — rounded, friendly, pairs with serif
- **Scale:** Large (15-16px body) for easy reading on phones

### Gamification — Gentle, Not Aggressive
- Streaks use fire emoji + dot grid (visual, not numeric pressure)
- Badges unlock progressively (not all at once)
- Points displayed as secondary info (not primary motivator)
- "Recuperar" language instead of "Perdeu" (loss aversion without guilt)
- Streak forgiveness built into design (empty dots = opportunities)

### Navigation — 4 Tabs Maximum
- Início (Home) → Progresso → Conquistas → Perfil
- Active state: rose color + filled icon
- Bottom nav with safe area padding for modern phones

### Component Patterns
- **Cards:** White, 16px radius, soft warm shadows
- **Buttons:** 52px height, 14px radius, rose primary
- **Chips:** Pill-shaped, 44px height, for quick actions
- **Checkboxes:** Custom styled, sage green when checked
- **Toggles:** Smooth animation, sage green active state

---

## Research Alignment

Based on the research brief v2:

| Finding | Implementation |
|---------|----------------|
| Streaks improve adherence 62% → 89% | Streak banner on home, always visible |
| Progress visualization is #1 compliance driver | Progress ring, trend chart, photo comparison |
| 2-minute tasks have highest compliance | "≈ 2 minutos" badge on every task |
| Gamification exhaustion is real | Gentle mechanics, optional symtom log |
| Treatment as narrative is most powerful | Journey screen with chapters |
| Task-first, not feature-first | Home screen = 1 clear action |
| Mobile-first (44px+ tap targets) | All buttons 52px, all chips 44px |
| Plain language (Grade 6-8) | No jargon, warm encouraging copy |

---

## How to Preview

1. Open any `.html` file directly in a browser
2. Each file is self-contained (Tailwind via CDN, Google Fonts)
3. Files render at 375×812 (iPhone 14 Pro frame)
4. All screens are responsive within the phone frame
