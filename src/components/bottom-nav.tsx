"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, TrendingUp, Award, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Início", icon: Home },
  { href: "/progress", label: "Progresso", icon: TrendingUp },
  { href: "/achievements", label: "Conquistas", icon: Award },
  { href: "/profile", label: "Perfil", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-rose-100/50 px-6 pb-8 pt-2 z-50">
      <div className="flex justify-around max-w-[375px] mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-0.5 transition-colors",
                isActive ? "text-rose-500" : "text-txt-muted"
              )}
            >
              <Icon
                className={cn("w-6 h-6", isActive && "fill-current")}
                strokeWidth={isActive ? 0 : 2}
              />
              <span
                className={cn(
                  "text-[11px]",
                  isActive && "font-semibold"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
