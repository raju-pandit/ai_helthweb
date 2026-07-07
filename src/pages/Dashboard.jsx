import { useState, useEffect } from 'react';
import {
  Flame,
  Droplets,
  UtensilsCrossed,
  Heart,
  Wand2,
  Search,
  BarChart3,
  Lightbulb,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Clock,
} from 'lucide-react';

/* ───────────────────── static data ───────────────────── */

const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const stats = [
  {
    label: 'Calories Today',
    value: '1,850',
    target: '2,200 kcal',
    pct: 84,
    Icon: Flame,
    gradient: 'from-orange-500 to-amber-400',
    ring: 'text-orange-400',
    shadow: 'shadow-orange-500/20',
  },
  {
    label: 'Water Intake',
    value: '6',
    target: '8 glasses',
    pct: 75,
    Icon: Droplets,
    gradient: 'from-blue-500 to-cyan-400',
    ring: 'text-blue-400',
    shadow: 'shadow-blue-500/20',
  },
  {
    label: 'Meals Logged',
    value: '3',
    target: '5',
    pct: 60,
    Icon: UtensilsCrossed,
    gradient: 'from-emerald-500 to-green-400',
    ring: 'text-emerald-400',
    shadow: 'shadow-emerald-500/20',
  },
  {
    label: 'Health Score',
    value: '85',
    target: '100',
    pct: 85,
    Icon: Heart,
    gradient: 'bg-primary-dark',
    ring: 'text-primary',
    shadow: 'shadow-primary/20',
  },
];

const meals = [
  {
    time: 'Breakfast',
    emoji: '🌅',
    name: 'Oats + Banana Smoothie',
    cal: 380,
    protein: 18,
    carbs: 52,
    fat: 8,
    border: 'border-l-amber-400',
    accent: 'text-amber-400',
  },
  {
    time: 'Lunch',
    emoji: '☀️',
    name: 'Dal + Brown Rice + Salad',
    cal: 520,
    protein: 22,
    carbs: 68,
    fat: 12,
    border: 'border-l-orange-400',
    accent: 'text-orange-400',
  },
  {
    time: 'Snack',
    emoji: '🍵',
    name: 'Mixed Nuts + Green Tea',
    cal: 180,
    protein: 6,
    carbs: 12,
    fat: 14,
    border: 'border-l-emerald-400',
    accent: 'text-emerald-400',
  },
  {
    time: 'Dinner',
    emoji: '🌙',
    name: 'Grilled Paneer + Roti + Raita',
    cal: 450,
    protein: 28,
    carbs: 42,
    fat: 16,
    border: 'border-l-indigo-400',
    accent: 'text-indigo-400',
  },
];

const quickActions = [
  {
    label: 'Generate New Plan',
    Icon: Wand2,
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    label: 'Search Recipes',
    Icon: Search,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    label: 'Log Water',
    Icon: Droplets,
    gradient: 'from-sky-400 to-blue-500',
  },
  {
    label: 'View Reports',
    Icon: BarChart3,
    gradient: 'from-emerald-500 to-teal-500',
  },
];

const healthTips = [
  'Drinking warm water with lemon in the morning boosts metabolism by 25%!',
  'Eating protein within 30 minutes of waking helps stabilize blood sugar all day.',
  'A 10-minute walk after meals can lower blood sugar spikes by up to 22%.',
  'Dark leafy greens contain magnesium, which supports 300+ enzyme reactions in your body.',
  'Chewing food 20-30 times per bite improves nutrient absorption by up to 40%.',
];

const macroData = [
  { label: 'Protein', pct: 32, color: '#a78bfa', ring: 'text-purple-400', bg: 'bg-purple-500/20' },
  { label: 'Carbs',   pct: 48, color: '#60a5fa', ring: 'text-blue-400',   bg: 'bg-blue-500/20'   },
  { label: 'Fat',     pct: 20, color: '#fbbf24', ring: 'text-amber-400',  bg: 'bg-amber-500/20'  },
];

/* ───────────────────── helpers ───────────────────── */

/** Tiny donut-ring built with conic-gradient */
function MacroRing({ pct, color, size = 110, stroke = 10 }) {
  const inner = size - stroke * 2;
  return (
    <div
      className="rounded-full flex items-center justify-center"
      style={{
        width: size,
        height: size,
        background: `conic-gradient(${color} ${pct * 3.6}deg, rgba(51,65,85,0.5) 0deg)`,
      }}
    >
      <div
        className="rounded-full bg-dark flex items-center justify-center"
        style={{ width: inner, height: inner }}
      >
        <span className="text-lg font-bold text-theme-text">{pct}%</span>
      </div>
    </div>
  );
}

/* ───────────────────── component ───────────────────── */

export default function Dashboard() {
  const [tipIdx, setTipIdx] = useState(0);

  /* rotate tips every 5 s */
  useEffect(() => {
    const id = setInterval(() => setTipIdx((i) => (i + 1) % healthTips.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-10 max-w-7xl mx-auto relative">


      {/* ══════════ TOP SECTION ══════════ */}
      <header className="mb-10 animate-fade-in-up">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
              Welcome back, <span className="gradient-text">User</span>! 👋
            </h1>
            <p className="text-theme-muted flex items-center gap-2 text-sm">
              <Clock size={14} /> {today}
            </p>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
            <TrendingUp size={14} /> Your health is trending up this week
          </span>
        </div>
      </header>

      {/* ── stat cards ── */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`glass rounded card-hover p-5 animate-fade-in-up delay-${(i + 1) * 100} relative overflow-hidden`}
          >
            {/* subtle top-right glow */}
            <div
              className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${s.gradient} opacity-15 blur-2xl`}
            />

            <div className="flex items-start justify-between relative z-10">
              {/* icon badge */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg ${s.shadow}`}
              >
                <s.Icon size={22} className="text-theme-text" />
              </div>

              {/* percentage chip */}
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 ${s.ring}`}
              >
                {s.pct}%
              </span>
            </div>

            <p className="mt-4 text-2xl font-bold text-theme-text">
              {s.value}{' '}
              <span className="text-sm font-normal text-theme-muted">/ {s.target}</span>
            </p>
            <p className="text-xs text-theme-muted mt-0.5">{s.label}</p>

            {/* progress track */}
            <div className="mt-3 h-1.5 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${s.gradient}`}
                style={{ width: `${s.pct}%`, transition: 'width 1.2s ease' }}
              />
            </div>
          </div>
        ))}
      </section>

      {/* ══════════ MEAL PLAN ══════════ */}
      <section className="mb-12 animate-fade-in-up delay-300">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles size={24} className="text-primary-light" />
          <h2 className="text-2xl font-bold text-theme-text">Today's Meal Plan</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {meals.map((m) => (
            <div
              key={m.time}
              className={`glass rounded card-hover p-5 border-l-2 ${m.border} group`}
            >
              {/* header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{m.emoji}</span>
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wider ${m.accent}`}
                >
                  {m.time}
                </span>
              </div>

              <h3 className="text-sm font-semibold text-theme-text leading-snug mb-1">
                {m.name}
              </h3>
              <p className="text-xs text-theme-muted mb-4">{m.cal} kcal</p>

              {/* nutrient bars */}
              <div className="space-y-2.5">
                {/* Protein */}
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-purple-300">Protein</span>
                    <span className="text-theme-muted">{m.protein}g</span>
                  </div>
                  <div className="nutrient-bar">
                    <div
                      className="nutrient-bar-fill"
                      style={{
                        width: `${Math.min((m.protein / 30) * 100, 100)}%`,
                        background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
                      }}
                    />
                  </div>
                </div>
                {/* Carbs */}
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-blue-300">Carbs</span>
                    <span className="text-theme-muted">{m.carbs}g</span>
                  </div>
                  <div className="nutrient-bar">
                    <div
                      className="nutrient-bar-fill"
                      style={{
                        width: `${Math.min((m.carbs / 80) * 100, 100)}%`,
                        background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                      }}
                    />
                  </div>
                </div>
                {/* Fat */}
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-amber-300">Fat</span>
                    <span className="text-theme-muted">{m.fat}g</span>
                  </div>
                  <div className="nutrient-bar">
                    <div
                      className="nutrient-bar-fill"
                      style={{
                        width: `${Math.min((m.fat / 20) * 100, 100)}%`,
                        background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* hover cta */}
              <div className="mt-4 flex items-center gap-1 text-[11px] text-primary-light opacity-0 group-hover:opacity-100 transition-opacity">
                View details <ChevronRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ BOTTOM SECTION ══════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 animate-fade-in-up delay-400">
        {/* ── Nutrition Breakdown (2/3) ── */}
        <div className="lg:col-span-2 glass rounded p-6">
          <h2 className="text-lg font-bold text-theme-text mb-6 flex items-center gap-2">
            <BarChart3 size={18} className="text-primary-light" /> Nutrition Breakdown
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-around gap-8">
            {macroData.map((m) => (
              <div key={m.label} className="flex flex-col items-center gap-3">
                <MacroRing pct={m.pct} color={m.color} />
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: m.color }}
                  />
                  <span className={`text-sm font-medium ${m.ring}`}>{m.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* total kcal footer */}
          <div className="mt-8 flex items-center justify-between text-xs text-theme-muted border-t border-black/5 dark:border-white/5 pt-4">
            <span>Total consumed today</span>
            <span className="text-theme-text font-semibold text-sm">1,530 kcal</span>
          </div>
        </div>

        {/* ── Quick Actions (1/3) ── */}
        <div className="glass rounded p-6">
          <h2 className="text-lg font-bold text-theme-text mb-5">Quick Actions</h2>

          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((a) => (
              <button
                key={a.label}
                className="glass rounded-xl p-4 flex flex-col items-center gap-2 text-center
                           hover:scale-[1.05] active:scale-95 transition-transform duration-200
                           group cursor-pointer"
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${a.gradient} flex items-center justify-center
                              shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <a.Icon size={18} className="text-theme-text" />
                </div>
                <span className="text-[11px] font-medium text-theme-muted leading-tight">
                  {a.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HEALTH TIPS BANNER ══════════ */}
      <section className="animate-fade-in-up delay-500">
        <div className="glass rounded p-5 flex items-start sm:items-center gap-4 relative overflow-hidden">
          {/* glow accent */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

          <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Lightbulb size={20} className="text-theme-text" />
          </div>

          <div className="relative z-10">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
              Did you know?
            </p>
            <p className="text-sm text-theme-muted leading-relaxed transition-all duration-500">
              {healthTips[tipIdx]}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
