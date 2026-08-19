import { Badge, StreakData, AchievementData } from "./types";

export const POINTS = {
  DAILY_CHECKIN: 10,
  PHOTO: 15,
  QUIZ: 5,
  STREAK_7: 50,
  STREAK_30: 200,
  BADGE_UNLOCK: 25,
  CHAPTER_COMPLETE: 100,
} as const;

export const BADGES: Badge[] = [
  {
    id: "first-checkin",
    name: "Primeiro Check-in",
    description: "Fez seu primeiro check-in",
    icon: "🌱",
    unlocked: true,
    progress: 1,
    total: 1,
    tier: "bronze",
  },
  {
    id: "7-days",
    name: "Primeira Semana",
    description: "7 dias seguidos",
    icon: "🌱",
    unlocked: true,
    progress: 7,
    total: 7,
    tier: "silver",
  },
  {
    id: "photographer",
    name: "Fotógrafo",
    description: "10 fotos enviadas",
    icon: "📸",
    unlocked: true,
    progress: 10,
    total: 10,
    tier: "silver",
  },
  {
    id: "star",
    name: "Estrela",
    description: "200 pontos",
    icon: "⭐",
    unlocked: true,
    progress: 200,
    total: 200,
    tier: "gold",
  },
  {
    id: "focused",
    name: "Focado",
    description: "85% compliance",
    icon: "🎯",
    unlocked: true,
    progress: 85,
    total: 85,
    tier: "gold",
  },
  {
    id: "30-days",
    name: "Mês Completo",
    description: "30 dias seguidos",
    icon: "🏆",
    unlocked: false,
    progress: 12,
    total: 30,
    tier: "gold",
  },
  {
    id: "explorer",
    name: "Explorador",
    description: "Complete 3 tipos de tarefa",
    icon: "🧭",
    unlocked: false,
    progress: 2,
    total: 3,
    tier: "silver",
  },
  {
    id: "90-days",
    name: "Três Meses",
    description: "90 dias de jornada",
    icon: "💎",
    unlocked: false,
    progress: 12,
    total: 90,
    tier: "diamond",
  },
];

export const TREATMENTS = [
  {
    id: "minoxidil",
    name: "Minoxidil tópico",
    description: "Aplicar na área afetada",
  },
  {
    id: "supplement",
    name: "Suplemento oral",
    description: "1 comprimido com água",
  },
  {
    id: "shampoo",
    name: "Shampoo medicado",
    description: "Deixar agir 3 minutos",
  },
];

export function calculateStreak(history: boolean[]): StreakData {
  let current = 0;
  let longest = 0;
  let tempStreak = 0;
  let forgiven = false;

  // Current streak with forgiveness: allow 1 miss if followed by a check-in
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i]) {
      current++;
    } else if (!forgiven && i > 0 && history[i - 1]) {
      // Allow one gap (forgiveness) if next day was checked in
      forgiven = true;
      current++;
    } else {
      break;
    }
  }

  // Longest streak (no forgiveness)
  for (const day of history) {
    if (day) {
      tempStreak++;
      longest = Math.max(longest, tempStreak);
    } else {
      tempStreak = 0;
    }
  }

  return { current, longest, history };
}

export function canForgiveStreak(history: boolean[]): boolean {
  // Check if user missed yesterday but did today — show recovery option
  const len = history.length;
  if (len < 2) return false;
  return !history[len - 2] && history[len - 1];
}

export function getStreakEmoji(streak: number): string {
  if (streak >= 30) return "🌟";
  if (streak >= 15) return "🔥";
  if (streak >= 8) return "🔥";
  if (streak >= 4) return "✨";
  return "🌱";
}

export function getStreakSize(streak: number): "sm" | "md" | "lg" | "xl" {
  if (streak >= 30) return "xl";
  if (streak >= 15) return "lg";
  if (streak >= 8) return "md";
  return "sm";
}

export function calculateCompliance(
  checkIns: number,
  totalDays: number
): number {
  if (totalDays === 0) return 0;
  return Math.round((checkIns / totalDays) * 100);
}

export function calculatePoints(
  checkIns: number,
  photos: number,
  streak: number
): number {
  let points = 0;
  points += checkIns * POINTS.DAILY_CHECKIN;
  points += photos * POINTS.PHOTO;
  if (streak >= 7) points += POINTS.STREAK_7;
  if (streak >= 30) points += POINTS.STREAK_30;
  return points;
}

export function getNextMilestone(streak: number): number {
  const milestones = [7, 15, 30, 60, 90];
  for (const milestone of milestones) {
    if (streak < milestone) return milestone;
  }
  return streak + 30;
}

export function getStreakProgress(streak: number): number {
  const next = getNextMilestone(streak);
  return Math.round((streak / next) * 100);
}

export function generateMockHistory(): boolean[] {
  // Realistic 14-day history with 1 gap (shows forgiveness scenario)
  return [
    true, true, true, true, true, true, false, // Week 1: missed 1 day
    true, true, true, true, true, true, true,  // Week 2: perfect
  ];
}
