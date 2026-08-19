export type TreatmentItem = {
  id: string;
  name: string;
  description: string;
  completed: boolean;
};

export type SymptomLevel = 'low' | 'medium' | 'high' | null;

export type CheckInData = {
  date: string;
  photoUrl: string | null;
  treatments: TreatmentItem[];
  symptomLevel: SymptomLevel;
  notes: string;
};

export type StreakData = {
  current: number;
  longest: number;
  history: boolean[];
};

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  total: number;
  tier: 'bronze' | 'silver' | 'gold' | 'diamond';
};

export type AchievementData = {
  streak: StreakData;
  points: number;
  level: string;
  badges: Badge[];
};

export type ProgressData = {
  complianceScore: number;
  week: number;
  totalWeeks: number;
  photos: { before: string; after: string; dateBefore: string; dateAfter: string } | null;
  trend: number[];
  weeklyStats: {
    checkIns: number;
    photos: number;
    points: number;
  };
};

export type ProfileData = {
  name: string;
  initials: string;
  joinDate: string;
  week: number;
  level: string;
  streak: number;
  points: number;
  notifications: {
    dailyReminder: boolean;
    achievements: boolean;
    nextAppointment: boolean;
  };
};

export type JourneyChapter = {
  id: number;
  title: string;
  items: { label: string; completed: boolean }[];
  tip: string;
};
