import BottomNav from "@/components/patient/bottom-nav";

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[375px] min-h-screen bg-warm-bg relative overflow-hidden">
      <div className="pb-24">{children}</div>
      <BottomNav />
    </div>
  );
}
