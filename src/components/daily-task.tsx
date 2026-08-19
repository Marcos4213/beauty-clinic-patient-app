"use client";

import Link from "next/link";
import { Camera } from "lucide-react";

interface DailyTaskProps {
  title: string;
  description: string;
  timeEstimate: string;
  points: number;
  href: string;
}

export default function DailyTask({
  title,
  description,
  timeEstimate,
  points,
  href,
}: DailyTaskProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-rose-100/50">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
          <Camera className="w-7 h-7 text-rose-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-txt-primary">{title}</h3>
          <p className="text-sm text-txt-muted mt-1">{description}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-sage-600 bg-sage-50 px-2 py-0.5 rounded-full font-medium">
              {timeEstimate}
            </span>
            <span className="text-xs text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full font-medium">
              +{points} pts
            </span>
          </div>
        </div>
      </div>
      <Link
        href={href}
        className="block w-full mt-4 bg-rose-500 text-white font-semibold text-base py-3.5 rounded-xl shadow-md hover:bg-rose-600 active:scale-[0.97] transition-all text-center"
      >
        Tirar foto agora
      </Link>
    </div>
  );
}
