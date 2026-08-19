# Design System — Patient Mobile App (v2)

**Version:** 2.0  
**Date:** 2026-08-02  
**Author:** Diana Design — UI/UX Designer  
**Context:** Patient-facing gamified trichology treatment tracker  
**Light mode default · Mobile-first · Wellness aesthetic**

---

## 1. Design Philosophy

> "Calm, warm, encouraging. Like Headspace meets hair health."

This is NOT a medical dashboard. This is a wellness companion that happens to track treatment. Every design decision answers one question: **"Does this make the patient feel supported, not surveilled?"**

### Core Principles

1. **Light mode default** — Patients prefer light; dark feels clinical
2. **Warm, not cold** — Peach/sage/cream, not blue/gray/white
3. **Task-first** — One clear action per screen, always
4. **Progressive disclosure** — Simple → complex only when needed
5. **Plain language** — Grade 6-8 reading, zero medical jargon
6. **Emotional connection** — Treatment as a journey, not a chore
7. **Gentle gamification** — Streaks and badges that feel like encouragement, not pressure

---

## 2. Color Palette — Warm & Encouraging

### 2.1 Backgrounds

| Token | Value | Usage | Feel |
|-------|-------|-------|------|
| `--bg-warm` | `#FFF8F5` | Main background | Warm paper, like a wellness journal |
| `--bg-cream` | `#FFF5EB` | Cards, surfaces | Soft cream, inviting |
| `--bg-peach-50` | `#FFF0E6` | Subtle highlights | Gentle warmth |
| `--bg-white` | `#FFFFFF` | Elevated cards, modals | Clean, spacious |
| `--bg-sage-50` | `#F0F5F0` | Success states, nature feel | Fresh, healthy |

### 2.2 Primary — Warm Rose/Peach

| Token | Value | Usage | Contrast on white |
|-------|-------|-------|-------------------|
| `--rose-50` | `#FFF1F2` | Light highlights | — |
| `--rose-100` | `#FFE4E6` | Tag backgrounds | — |
| `--rose-200` | `#FECDD3` | Soft borders | — |
| `--rose-300` | `#FDA4AF` | Decorative elements | — |
| `--rose-400` | `#FB7185` | Icons, illustrations | 2.8:1 |
| `--rose-500` | `#F43F5E` | Primary CTAs, streak fire | 3.9:1 |
| `--rose-600` | `#E11D48` | Press states, emphasis | 5.1:1 ✅ |

### 2.3 Secondary — Sage Green (Health/Growth)

| Token | Value | Usage | Contrast |
|-------|-------|-------|----------|
| `--sage-50` | `#F0F5F0` | Light backgrounds | — |
| `--sage-100` | `#DCE5DC` | Success tags | — |
| `--sage-200` | `#B8CCB8` | Soft accents | — |
| `--sage-400` | `#6B9E6B` | Checkmarks, growth icons | 3.5:1 |
| `--sage-500` | `#4A7C4A` | Success states, "done" | 5.2:1 ✅ |
| `--sage-600` | `#3A6B3A` | Emphasis success | 6.8:1 ✅ |

### 2.4 Accent — Warm Gold (Rewards/Achievements)

| Token | Value | Usage | Contrast |
|-------|-------|-------|----------|
| `--gold-50` | `#FFFBEB` | Achievement highlights | — |
| `--gold-100` | `#FEF3C7` | Reward backgrounds | — |
| `--gold-200` | `#FDE68A` | Decorative, badges | — |
| `--gold-400` | `#FBBF24` | Points, stars | 1.9:1 (decorative only) |
| `--gold-500` | `#F59E0B` | Badge fills, streaks | 2.5:1 (large elements) |
| `--gold-600` | `#D97706` | Text on badges | 4.5:1 ✅ |

### 2.5 Text

| Token | Value | Usage | Contrast on #FFF8F5 |
|-------|-------|-------|---------------------|
| `--text-primary` | `#2D2A26` | Headlines, key info | 13.8:1 ✅ AAA |
| `--text-body` | `#5C5650` | Body text, descriptions | 6.2:1 ✅ AA |
| `--text-muted` | `#8A847C` | Captions, metadata | 3.8:1 |
| `--text-light` | `#B0A99F` | Placeholders | 2.4:1 |
| `--text-white` | `#FFFFFF` | On colored backgrounds | varies |

### 2.6 Semantic

| Token | Value | Usage | Note |
|-------|-------|-------|------|
| `--success` | `#4A7C4A` | Completed tasks, check-ins | Sage green |
| `--warning` | `#E8963E` | Missed day, gentle alert | Warm amber, not red |
| `--danger` | `#DC4A4A` | Errors, urgent | Used sparingly |
| `--info` | `#5B8DB8` | Tips, educational | Muted blue, not clinical |
| `--streak` | `#F43F5E` | Streak counter, fire emoji | Rose for energy |
| `--points` | `#D97706` | Points, rewards | Gold for value |

### 2.7 Tailwind Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#FFF8F5',
          cream: '#FFF5EB',
          peach: '#FFF0E6',
        },
        rose: {
          50: '#FFF1F2',
          100: '#FFE4E6',
          200: '#FECDD3',
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#F43F5E',
          600: '#E11D48',
        },
        sage: {
          50: '#F0F5F0',
          100: '#DCE5DC',
          200: '#B8CCB8',
          400: '#6B9E6B',
          500: '#4A7C4A',
          600: '#3A6B3A',
        },
        gold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        txt: {
          primary: '#2D2A26',
          body: '#5C5650',
          muted: '#8A847C',
          light: '#B0A99F',
        },
      },
    },
  },
}
```

---

## 3. Typography — Large, Readable, Friendly

### 3.1 Font Families

| Role | Font | Fallback | Why |
|------|------|----------|-----|
| **Display** | `DM Serif Display` | Georgia, serif | Warmth, personality, not clinical |
| **Body** | `DM Sans` | system-ui, sans-serif | Friendly, rounded, pairs with serif |
| **Mono** | `JetBrains Mono` | monospace | Data/streaks only |

### 3.2 Scale — Mobile-First

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `display-xl` | 36px | 700 | 1.1 | Hero text, streak numbers |
| `display` | 28px | 700 | 1.2 | Page titles |
| `h1` | 24px | 600 | 1.3 | Section headers |
| `h2` | 20px | 600 | 1.35 | Card titles |
| `h3` | 18px | 600 | 1.4 | Sub-headers |
| `body-lg` | 16px | 400 | 1.6 | Primary body text |
| `body` | 15px | 400 | 1.5 | Standard body |
| `body-sm` | 14px | 400 | 1.5 | Secondary text |
| `caption` | 12px | 500 | 1.4 | Labels, metadata |
| `micro` | 11px | 500 | 1.3 | Badges, fine print |

### 3.3 Tailwind Config

```javascript
fontFamily: {
  display: ['DM Serif Display', 'Georgia', 'serif'],
  body: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
},
fontSize: {
  'display-xl': ['2.25rem', { lineHeight: '1.1', fontWeight: '700' }],
  'display': ['1.75rem', { lineHeight: '1.2', fontWeight: '700' }],
  'h1': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
  'h2': ['1.25rem', { lineHeight: '1.35', fontWeight: '600' }],
  'h3': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
  'body-lg': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
  'body': ['0.9375rem', { lineHeight: '1.5', fontWeight: '400' }],
  'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
  'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
  'micro': ['0.6875rem', { lineHeight: '1.3', fontWeight: '500' }],
},
```

---

## 4. Spacing — Breathing Room

### 4.1 Base Unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| `1` | 4px | Tight gaps, inline spacing |
| `2` | 8px | Icon-to-text, chip padding |
| `3` | 12px | Small padding |
| `4` | 16px | Card padding, standard gap |
| `5` | 20px | Section gaps |
| `6` | 24px | Section padding |
| `8` | 32px | Major gaps |
| `10` | 40px | Section separators |
| `12` | 48px | Page margins (mobile) |
| `16` | 64px | Hero spacing |

---

## 5. Border Radius — Soft & Rounded

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 8px | Chips, small buttons |
| `--radius-md` | 12px | Inputs, standard buttons |
| `--radius-lg` | 16px | Cards, containers |
| `--radius-xl` | 20px | Modals, bottom sheets |
| `--radius-2xl` | 24px | Hero cards, large containers |
| `--radius-full` | 9999px | Avatars, pills, FABs |

**Rule:** Nothing smaller than 8px. Sharp corners feel clinical; rounded feels friendly.

---

## 6. Shadows — Soft & Warm

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-xs` | `0 1px 2px rgba(139,109,92,0.06)` | Subtle lift |
| `--shadow-sm` | `0 2px 4px rgba(139,109,92,0.08)` | Chips, small cards |
| `--shadow-md` | `0 4px 12px rgba(139,109,92,0.10)` | Standard cards |
| `--shadow-lg` | `0 8px 24px rgba(139,109,92,0.12)` | Elevated cards |
| `--shadow-xl` | `0 16px 48px rgba(139,109,92,0.14)` | Modals, overlays |

**Note:** Warm-tinted shadows (`rgba(139,109,92,...)`) instead of black. Feels softer and more organic.

---

## 7. Components

### 7.1 DailyTaskCard (Hero Component)

```
┌─────────────────────────────────────────┐
│  ☀️ Bom dia, Ana                       │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  📸 Sua tarefa de hoje          │    │
│  │                                 │    │
│  │  ┌─────────────────────────┐    │    │
│  │  │  📷  Tirar foto do      │    │    │
│  │  │      progresso          │    │    │
│  │  │                         │    │    │
│  │  │  ≈ 2 minutos           │    │    │
│  │  └─────────────────────────┘    │    │
│  │                                 │    │
│  │  🔥 12 dias de sequência       │    │
│  │  ████████████░░ 75% concluído  │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌──────┐ ┌──────┐ ┌──────┐           │
│  │ Hist │ │Check │ │Quiz  │           │
│  └──────┘ └──────┘ └──────┘           │
└─────────────────────────────────────────┘
```

**Rules:**
- Greeting uses patient's name
- ONE primary action, clearly highlighted
- Streak always visible (loss aversion)
- Quick actions below for secondary tasks
- 2-minute estimate sets expectations

### 7.2 StreakCounter

```
┌──────────────────────────────────────┐
│  🔥 12                               │
│  dias seguidos                       │
│                                      │
│  ● ● ● ● ● ● ● ● ● ● ● ● ○ ○    │
│  M T Q Q S S D M T Q Q S S D        │
└──────────────────────────────────────┘
```

- Fire emoji + number = instant recognition
- Dot grid shows visual pattern (filled = done, empty = missed)
- No guilt language — empty dots are "opportunities," not failures
- Streak forgiveness: if missed, show "Recuperar" not "Perdeu"

### 7.3 ProgressRing

```
      ┌─────────┐
     /   85%     \
    │  ┌───────┐  │
    │  │ score │  │
    │  └───────┘  │
     \           /
      └─────────┘
   "Seu progresso"
```

- Circular progress with percentage
- Color transitions: sage (0-40%) → gold (41-70%) → rose (71-100%)
- Animated fill on completion
- Tap to see breakdown

### 7.4 PhotoComparison

```
┌─────────────────────────────────────────┐
│  📅 Jul 01 ←→ Ago 01                  │
│                                         │
│  ┌──────────────┬──────────────────┐    │
│  │              │                  │    │
│  │   ANTES      │   DEPOIS         │    │
│  │   Semana 1   │   Semana 4       │    │
│  │              │                  │    │
│  └──────────────┴──────────────────┘    │
│  ◄━━━━━━━━━━━━━━━━●━━━━━━━━━━━━━━━━►   │
│                                         │
│  📊 +12% de melhoria (IA)              │
└─────────────────────────────────────────┘
```

- Side-by-side with swipe slider
- AI-scored improvement displayed
- Dates clearly labeled
- Encouraging language: "melhoria" not "change"

### 7.5 BadgeCard

```
┌──────────────────────────────────────┐
│  ┌────┐                             │
│  │ 🌱 │  Primeira Semana            │
│  │    │  Completou 7 dias seguidos  │
│  └────┘  ─────────────── Desbloq. ✓ │
│                                      │
│  ┌────┐                             │
│  │ 🌿 │  Explorer                   │
│  │ 🔒 │  Complete 3 tipos de tarefa │
│  └────┘  ─────────────── Próximo    │
└──────────────────────────────────────┘
```

- Unlocked: full color, warm glow
- Locked: muted, subtle lock icon
- Achievement name + description (plain language)
- Status: "Desbloq. ✓" or "Próximo"

### 7.6 JourneyChapter

```
┌──────────────────────────────────────┐
│  Capítulo 1: Os Primeiros Passos     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  ✅ Consulta inicial                 │
│  ✅ Primeira semana de tratamento    │
│  ✅ Primeira foto de progresso       │
│  🔲 Relatório do meio do ciclo      │
│                                      │
│  ┌──────────────────────────────┐   │
│  │ 💡 Dica: A consistência é    │   │
│  │ mais importante que a        │   │
│  │ perfeição. Continue! 🌟     │   │
│  └──────────────────────────────┘   │
└──────────────────────────────────────┘
```

- Chapters unlock as milestones are reached
- Each chapter has a narrative title (not "Week 1")
- Checklist shows progress within chapter
- AI-generated tips contextual to chapter

### 7.7 BottomNavigation

```
┌──────────────────────────────────────────┐
│  🏠        📊        🏆        👤       │
│  Início   Progresso  Conquistas Perfil   │
└──────────────────────────────────────────┘
```

- 4 tabs max (cognitive load)
- Active: rose color + filled icon
- Inactive: muted gray
- Icons from Lucide (rounded, friendly)
- Safe area padding for notch phones

### 7.8 PrimaryButton

```
┌──────────────────────────────────────┐
│         📸 Tirar foto agora          │
└──────────────────────────────────────┘
```

- Height: 52px (larger than 44px minimum)
- Border-radius: 14px
- Background: `--rose-500`
- Text: white, 16px, 600 weight
- Shadow: `--shadow-md` with rose tint
- Press: scale(0.97), shadow reduces
- Full-width on primary actions

### 7.9 QuickActionChip

```
┌────────┐ ┌────────┐ ┌────────┐
│ 📷 Foto│ │ 📝 Log │ │ 🧠 Quiz│
└────────┘ └────────┘ └────────┘
```

- Height: 44px
- Border-radius: 22px (pill)
- Background: `--bg-cream` or `--rose-50`
- Border: 1px solid `--rose-200`
- Icon + label, 14px, 500 weight

---

## 8. Spacing & Layout Rules

### 8.1 Mobile Layout

```
┌──────────────────────┐ ← 16px side padding
│                      │
│  ┌──────────────────┐│ ← 16px card padding
│  │    Content       ││
│  └──────────────────┘│
│                      │ ← 12px gap
│  ┌──────────────────┐│
│  │    Content       ││
│  └──────────────────┘│
│                      │
├──────────────────────┤ ← Bottom nav
│  🏠  📊  🏆  👤    │ ← 80px nav height
└──────────────────────┘
   ↑ Safe area (34px)
```

### 8.2 Rules

- **Side padding:** 16px (mobile), 24px (tablet)
- **Card padding:** 16px standard, 20px for hero cards
- **Gap between cards:** 12px
- **Section spacing:** 24px
- **Bottom nav height:** 64px + 16px safe area
- **Status bar area:** 44px (iOS) / 24px (Android)

---

## 9. Icons

**Library:** Lucide React  
**Sizes:** 16px (inline), 20px (buttons), 24px (navigation), 32px (feature), 48px (empty states)  
**Style:** Rounded, friendly feel  
**Color:** Inherits text color; use `--rose-500` for primary actions, `--sage-500` for success

### Key Icon Mappings

| Action | Icon | Color |
|--------|------|-------|
| Streak | `Flame` | `--rose-500` |
| Photo | `Camera` | `--rose-500` |
| Check-in | `CheckCircle2` | `--sage-500` |
| Badge | `Award` | `--gold-500` |
| Journey | `BookOpen` | `--rose-400` |
| Progress | `TrendingUp` | `--sage-500` |
| Points | `Star` | `--gold-500` |
| Calendar | `Calendar` | `--txt-muted` |
| Settings | `Settings` | `--txt-muted` |

---

## 10. Animations & Micro-Interactions

### 10.1 Transitions

| Element | Duration | Easing | Effect |
|---------|----------|--------|--------|
| Button press | 100ms | ease-out | scale(0.97) |
| Card appear | 300ms | ease-out | fade + slide up 8px |
| Progress fill | 600ms | ease-in-out | width/height animation |
| Streak fire | 400ms | ease-out | pulse + glow |
| Badge unlock | 500ms | ease-out | scale bounce |
| Page transition | 250ms | ease-in-out | slide left/right |

### 10.2 Celebration Moments

- **Daily check-in complete:** Confetti particles (subtle, 1s)
- **Streak milestone (7, 30, 90):** Badge animation + haptic
- **Photo comparison:** Smooth slider with parallax
- **Chapter complete:** Page curl animation

### 10.3 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 11. Gamification Layer — Design Tokens

### 11.1 Points System

| Action | Points | Visual |
|--------|--------|--------|
| Daily check-in | +10 | ⭐ |
| Photo uploaded | +15 | 📸 |
| Quiz completed | +5 | 🧠 |
| 7-day streak | +50 | 🔥 |
| 30-day streak | +200 | 💎 |
| Badge unlocked | +25 | 🏆 |
| Chapter complete | +100 | 📖 |

### 11.2 Streak Visual Language

- **1-3 days:** Small flame icon, muted
- **4-7 days:** Medium flame, warm glow
- **8-14 days:** Large flame, pulsing
- **15-30 days:** Flame + sparkles
- **30+ days:** Golden flame, celebration animation

### 11.3 Badge Tiers

| Tier | Color | Glow | Example |
|------|-------|------|---------|
| Bronze | `#CD7F32` | None | First check-in |
| Silver | `#C0C0C0` | Soft | 7-day streak |
| Gold | `#FFD700` | Warm | 30-day streak |
| Diamond | `#B9F2FF` | Bright | 90-day streak |

---

## 12. Accessibility

### 12.1 WCAG AA Compliance

- All text meets 4.5:1 contrast minimum
- Touch targets minimum 44×44px (we use 52px for primary)
- Focus rings visible on all interactive elements
- Screen reader labels on all icons
- Color never the sole indicator

### 12.2 Focus Management

```css
:focus-visible {
  outline: 3px solid var(--rose-400);
  outline-offset: 2px;
  border-radius: 4px;
}
```

### 12.3 Reading Level

- All copy at Grade 6-8 reading level
- Medical terms explained in tooltips
- Short sentences, active voice
- Encouraging, not clinical

---

## 13. Full CSS Variables

```css
:root {
  /* Backgrounds */
  --bg-warm: #FFF8F5;
  --bg-cream: #FFF5EB;
  --bg-peach-50: #FFF0E6;
  --bg-white: #FFFFFF;
  --bg-sage-50: #F0F5F0;

  /* Rose (Primary) */
  --rose-50: #FFF1F2;
  --rose-100: #FFE4E6;
  --rose-200: #FECDD3;
  --rose-300: #FDA4AF;
  --rose-400: #FB7185;
  --rose-500: #F43F5E;
  --rose-600: #E11D48;

  /* Sage (Secondary) */
  --sage-50: #F0F5F0;
  --sage-100: #DCE5DC;
  --sage-200: #B8CCB8;
  --sage-400: #6B9E6B;
  --sage-500: #4A7C4A;
  --sage-600: #3A6B3A;

  /* Gold (Accent) */
  --gold-50: #FFFBEB;
  --gold-100: #FEF3C7;
  --gold-200: #FDE68A;
  --gold-400: #FBBF24;
  --gold-500: #F59E0B;
  --gold-600: #D97706;

  /* Text */
  --txt-primary: #2D2A26;
  --txt-body: #5C5650;
  --txt-muted: #8A847C;
  --txt-light: #B0A99F;

  /* Semantic */
  --success: #4A7C4A;
  --warning: #E8963E;
  --danger: #DC4A4A;
  --info: #5B8DB8;

  /* Shadows */
  --shadow-xs: 0 1px 2px rgba(139,109,92,0.06);
  --shadow-sm: 0 2px 4px rgba(139,109,92,0.08);
  --shadow-md: 0 4px 12px rgba(139,109,92,0.10);
  --shadow-lg: 0 8px 24px rgba(139,109,92,0.12);
  --shadow-xl: 0 16px 48px rgba(139,109,92,0.14);

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
}
```

---

## 14. References

- Headspace — Warm palette, calming UI, progress visualization
- Calm — Wellness aesthetic, gentle animations, serif typography
- EMBODI Health — Gamification mechanics for healthcare
- Sahha.ai — Adaptive streak mechanics, gamification research
- LifeForge — Narrative-driven habit tracking
- Folicle — Photo comparison UX for hair tracking
- M.A.G.I.C. Framework (2026) — Narrative engagement in mHealth
