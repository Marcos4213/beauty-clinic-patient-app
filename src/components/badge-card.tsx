"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/lib/types";
import { Lock } from "lucide-react";

interface BadgeCardProps {
  badge: Badge;
}

export default function BadgeCard({ badge }: BadgeCardProps) {
  const tierColors = {
    bronze: "bg-orange-50",
    silver: "bg-gray-50",
    gold: "bg-gold-50",
    diamond: "bg-blue-50",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-4 shadow-sm text-center transition-opacity",
        !badge.unlocked && "opacity-60"
      )}
    >
      <div
        className={cn(
          "w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-2",
          badge.unlocked ? tierColors[badge.tier] : "bg-warm-cream"
        )}
      >
        {badge.unlocked ? (
          <span className="text-2xl">{badge.icon}</span>
        ) : (
          <Lock className="w-5 h-5 text-txt-light" />
        )}
      </div>
      <p className="text-sm text-txt-primary font-semibold">{badge.name}</p>
      <p className="text-xs text-txt-muted mt-0.5">{badge.description}</p>
      {badge.unlocked ? (
        <span className="inline-block mt-2 text-[11px] text-sage-600 bg-sage-50 px-2 py-0.5 rounded-full font-medium">
          Desbloq. ✓
        </span>
      ) : (
        <div className="mt-2">
          <div className="h-1.5 bg-warm-cream rounded-full overflow-hidden">
            <div
              className="h-full bg-gold-400 rounded-full"
              style={{
                width: `${Math.round((badge.progress / badge.total) * 100)}%`,
              }}
            />
          </div>
          <p className="text-[11px] text-txt-light mt-1">
            {badge.progress} de {badge.total}
          </p>
        </div>
      )}
    </div>
  );
}
