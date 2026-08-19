"use client";

import { cn } from "@/lib/utils";

interface ProgressRingProps {
  score: number;
  size?: number;
}

export default function ProgressRing({ score, size = 64 }: ProgressRingProps) {
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getColor = (score: number) => {
    if (score >= 71) return "#4A7C4A";
    if (score >= 41) return "#D97706";
    return "#F43F5E";
  };

  return (
    <div className={cn("relative shrink-0")} style={{ width: size, height: size }}>
      <svg
        className={cn("-rotate-90")}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#F0F5F0"
          strokeWidth={5}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={getColor(score)}
          strokeWidth={5}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-600"
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center text-sm font-bold"
        style={{ color: getColor(score) }}
      >
        {score}%
      </span>
    </div>
  );
}
