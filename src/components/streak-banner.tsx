"use client";

import { Flame, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface StreakBannerProps {
  streak: number;
  history?: boolean[];
  canForgive?: boolean;
}

export default function StreakBanner({
  streak,
  history = [],
  canForgive = false,
}: StreakBannerProps) {
  const last14 = history.slice(-14);
  const padded = [
    ...Array(Math.max(0, 14 - last14.length)).fill(false),
    ...last14,
  ];

  const days = ["D", "T", "Q", "Q", "S", "S", "D", "D", "T", "Q", "Q", "S", "S", "D"];

  return (
    <div className="mt-3 bg-gradient-to-r from-rose-500 to-rose-400 rounded-2xl p-4 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8" />
      <div className="flex items-center justify-between relative z-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-3xl animate-fire">🔥</span>
            <span className="font-display text-display-xl leading-none text-white">
              {streak}
            </span>
          </div>
          <p className="text-sm text-white/90 mt-0.5">
            {canForgive ? "Recuperar" : "dias seguidos"}
          </p>
        </div>
        <div className="text-right">
          <div className="flex gap-1">
            {padded.map((done, i) => (
              <span
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full",
                  done ? "bg-white" : "bg-white/40"
                )}
              />
            ))}
          </div>
          <p className="text-xs text-white/70 mt-1.5">
            {days.join(" ")}
          </p>
        </div>
      </div>
      {canForgive && (
        <div className="mt-3 flex items-center gap-2 bg-white/20 rounded-xl px-3 py-2">
          <RotateCcw className="w-4 h-4" />
          <span className="text-sm font-medium">
            Perdeu um dia? Recupere seu streak!
          </span>
        </div>
      )}
    </div>
  );
}
