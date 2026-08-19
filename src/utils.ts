import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Bom dia";
  if (hour < 18) return "Boa tarde";
  return "Boa noite";
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
  }).format(date);
}

export function getDayOfWeek(date: Date): string {
  const days = ["D", "S", "T", "Q", "Q", "S", "S"];
  return days[date.getDay()];
}

export function getStreakEmoji(streak: number): string {
  if (streak >= 30) return "🔥";
  if (streak >= 15) return "🔥";
  if (streak >= 8) return "🔥";
  if (streak >= 4) return "🔥";
  return "🔥";
}

export function getStreakSize(streak: number): string {
  if (streak >= 15) return "text-4xl";
  if (streak >= 8) return "text-3xl";
  return "text-3xl";
}

export function getPointsLevel(points: number): string {
  if (points >= 1000) return "Diamante";
  if (points >= 500) return "Platina";
  if (points >= 200) return "Ouro II";
  if (points >= 100) return "Ouro I";
  if (points >= 50) return "Prata";
  return "Bronze";
}

export function getComplianceColor(score: number): string {
  if (score >= 71) return "text-sage-500";
  if (score >= 41) return "text-gold-600";
  return "text-rose-500";
}

export function getComplianceGradient(score: number): string {
  if (score >= 71) return "from-sage-400 to-sage-500";
  if (score >= 41) return "from-gold-400 to-gold-500";
  return "from-rose-400 to-rose-500";
}
