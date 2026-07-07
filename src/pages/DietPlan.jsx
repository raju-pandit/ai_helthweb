import { useState } from 'react';
import {
  Clock,
  Flame,
  ChefHat,
  Apple,
  Coffee,
  Sun,
  Sunset,
  Moon,
  ChevronRight,
  Sparkles,
  Target,
  TrendingUp,
  Wheat,
  Droplets,
  Beef,
} from 'lucide-react';

const days = [
  { key: 'mon', label: 'Mon', full: 'Monday' },
  { key: 'tue', label: 'Tue', full: 'Tuesday' },
  { key: 'wed', label: 'Wed', full: 'Wednesday' },
  { key: 'thu', label: 'Thu', full: 'Thursday' },
  { key: 'fri', label: 'Fri', full: 'Friday' },
  { key: 'sat', label: 'Sat', full: 'Saturday' },
  { key: 'sun', label: 'Sun', full: 'Sunday' },
];

const profilePills = [
  { label: 'Male, 25yr', emoji: '👤' },
  { label: '75kg', emoji: '⚖️' },
  { label: 'Vegetarian', emoji: '🥬' },
  { label: 'Weight Loss', emoji: '🎯' },
];

const meals = [
  {
    id: 1,
    type: 'Breakfast',
    icon: Coffee,
    iconColor: 'text-amber-400',
    name: 'Masala Oats with Fruits',
    time: '8:00 AM',
    calories: 350,
    ingredients: ['Oats', 'Banana', 'Apple', 'Cinnamon', 'Honey'],
    nutrients: { protein: 12, carbs: 58, fat: 6, fiber: 8 },
    gradient: 'from-amber-500/10 to-orange-500/10',
    border: 'border-amber-500/20',
  },
  {
    id: 2,
    type: 'Mid-Morning Snack',
    icon: Sun,
    iconColor: 'text-yellow-400',
    name: 'Mixed Sprouts Chaat',
    time: '11:00 AM',
    calories: 180,
    ingredients: ['Moong Sprouts', 'Chana', 'Onion', 'Tomato', 'Lemon', 'Chaat Masala'],
    nutrients: { protein: 10, carbs: 26, fat: 3, fiber: 6 },
    gradient: 'from-yellow-500/10 to-lime-500/10',
    border: 'border-yellow-500/20',
  },
  {
    id: 3,
    type: 'Lunch',
    icon: Apple,
    iconColor: 'text-emerald-400',
    name: 'Rajma Rice + Cucumber Raita',
    time: '1:00 PM',
    calories: 550,
    ingredients: ['Rajma', 'Basmati Rice', 'Cucumber', 'Yogurt', 'Cumin', 'Coriander'],
    nutrients: { protein: 22, carbs: 78, fat: 14, fiber: 10 },
    gradient: 'from-emerald-500/10 to-teal-500/10',
    border: 'border-emerald-500/20',
  },
  {
    id: 4,
    type: 'Evening Snack',
    icon: Sunset,
    iconColor: 'text-orange-400',
    name: 'Green Tea + Roasted Makhana',
    time: '4:30 PM',
    calories: 120,
    ingredients: ['Green Tea', 'Makhana', 'Black Pepper', 'Ghee'],
    nutrients: { protein: 4, carbs: 18, fat: 5, fiber: 2 },
    gradient: 'from-orange-500/10 to-rose-500/10',
    border: 'border-orange-500/20',
  },
  {
    id: 5,
    type: 'Dinner',
    icon: Moon,
    iconColor: 'text-indigo-400',
    name: 'Palak Paneer + 2 Multigrain Roti',
    time: '7:30 PM',
    calories: 480,
    ingredients: ['Spinach', 'Paneer', 'Multigrain Flour', 'Garlic', 'Ginger', 'Cream'],
    nutrients: { protein: 20, carbs: 30, fat: 14, fiber: 6 },
    gradient: 'from-indigo-500/10 to-purple-500/10',
    border: 'border-indigo-500/20',
  },
];

const totalCalories = 1680;
const goalCalories = 1800;
const macros = [
  { label: 'Protein', value: 68, max: 100, unit: 'g', color: 'from-cyan-500 to-blue-500', bg: 'bg-cyan-500/20', icon: Beef },
  { label: 'Carbs', value: 210, max: 300, unit: 'g', color: 'from-amber-500 to-orange-500', bg: 'bg-amber-500/20', icon: Wheat },
  { label: 'Fat', value: 42, max: 70, unit: 'g', color: 'from-rose-500 to-pink-500', bg: 'bg-rose-500/20', icon: Droplets },
  { label: 'Fiber', value: 32, max: 50, unit: 'g', color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-500/20', icon: TrendingUp },
];

/* today index (0=Sun…6=Sat) mapped to our Mon-first array */
const todayIndex = (() => {
  const jsDay = new Date().getDay(); // 0-Sun 1-Mon … 6-Sat
  return jsDay === 0 ? 6 : jsDay - 1;
})();

export default function DietPlan() {
  const [activeDay, setActiveDay] = useState(todayIndex);

  const caloriePercent = Math.round((totalCalories / goalCalories) * 100);
  const circumference = 2 * Math.PI * 54; // radius 54
  const strokeOffset = circumference - (caloriePercent / 100) * circumference;

  return (
    <div className="min-h-screen py-8 px-4">
      {/* ── Header ── */}
      <div className="text-center mb-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" />
          AI-Generated Plan
        </div>
        <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-3">
          Your Personalized AI Diet Plan
        </h1>
        <p className="text-theme-muted text-lg mb-5">
          Generated based on your health profile
        </p>

        {/* Profile Summary Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {profilePills.map((pill) => (
            <span
              key={pill.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm text-theme-muted"
            >
              <span>{pill.emoji}</span>
              {pill.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Weekly Day Selector ── */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="glass rounded-2xl p-2 flex items-center gap-1 overflow-x-auto">
          {days.map((day, idx) => {
            const isActive = activeDay === idx;
            const isToday = todayIndex === idx;
            return (
              <button
                key={day.key}
                onClick={() => setActiveDay(idx)}
                className={`relative flex-1 min-w-[4rem] py-3 rounded-xl text-center transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20'
                    : 'hover:bg-black/5 dark:bg-white/5'
                }`}
              >
                <span
                  className={`text-xs uppercase tracking-wider ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-theme-muted'
                  }`}
                >
                  {day.label}
                </span>
                {isToday && (
                  <span className="block w-1.5 h-1.5 rounded-full bg-cyan-400 mx-auto mt-1" />
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Meal Cards ── */}
      <div className="max-w-3xl mx-auto space-y-4 mb-10">
        {meals.map((meal, idx) => {
          const Icon = meal.icon;
          return (
            <div
              key={meal.id}
              className={`glass rounded-2xl overflow-hidden border ${meal.border} animate-slide-up`}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Card top bar */}
              <div className={`bg-gradient-to-r ${meal.gradient} px-5 py-4 flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black/10 dark:bg-white/10 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${meal.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-xs text-theme-muted font-medium uppercase tracking-wide">
                      {meal.type}
                    </p>
                    <h3 className="text-theme-text font-semibold text-lg leading-tight">{meal.name}</h3>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-theme-muted text-xs mb-0.5">
                    <Clock className="w-3.5 h-3.5" />
                    {meal.time}
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 font-bold text-sm">
                    <Flame className="w-4 h-4" />
                    {meal.calories} cal
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="px-5 py-4 space-y-4">
                {/* Ingredients */}
                <div>
                  <p className="text-xs text-theme-muted font-medium uppercase tracking-wide mb-2">
                    Ingredients
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {meal.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5 text-xs text-theme-muted border border-black/5 dark:border-white/5"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Nutrients */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { key: 'protein', label: 'Protein', color: 'text-cyan-400' },
                    { key: 'carbs', label: 'Carbs', color: 'text-amber-400' },
                    { key: 'fat', label: 'Fat', color: 'text-rose-400' },
                    { key: 'fiber', label: 'Fiber', color: 'text-emerald-400' },
                  ].map((n) => (
                    <div
                      key={n.key}
                      className="text-center p-2 rounded-lg bg-black/5 dark:bg-white/5"
                    >
                      <span className={`text-sm font-bold ${n.color}`}>
                        {meal.nutrients[n.key]}g
                      </span>
                      <p className="text-[10px] text-theme-muted mt-0.5">{n.label}</p>
                    </div>
                  ))}
                </div>

                {/* View Recipe button */}
                <button className="flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group">
                  <ChefHat className="w-4 h-4" />
                  View Recipe
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Daily Summary Card ── */}
      <div className="max-w-3xl mx-auto">
        <div className="glass rounded-2xl p-6 md:p-8 border border-black/10 dark:border-white/10 animate-slide-up">
          <h2 className="text-xl font-semibold text-theme-text flex items-center gap-2 mb-6">
            <Target className="w-5 h-5 text-cyan-400" />
            Daily Summary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Circular Progress */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-36 h-36">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  {/* Background ring */}
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="8"
                  />
                  {/* Progress ring */}
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="url(#calorieGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeOffset}
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="calorieGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-theme-text">{totalCalories}</span>
                  <span className="text-xs text-theme-muted">kcal</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-theme-muted text-sm">
                  Goal: <span className="text-theme-text font-medium">{goalCalories} kcal</span>
                </p>
                <p className="text-cyan-400 text-xs font-medium mt-1">
                  {goalCalories - totalCalories} kcal remaining
                </p>
              </div>
            </div>

            {/* Right: Macros Breakdown */}
            <div className="space-y-4">
              <p className="text-sm text-theme-muted font-medium uppercase tracking-wide">
                Macros Breakdown
              </p>
              {macros.map((macro) => {
                const MacroIcon = macro.icon;
                const pct = Math.round((macro.value / macro.max) * 100);
                return (
                  <div key={macro.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-lg ${macro.bg} flex items-center justify-center`}>
                          <MacroIcon className="w-3.5 h-3.5 text-theme-text/80" />
                        </div>
                        <span className="text-sm text-theme-muted font-medium">{macro.label}</span>
                      </div>
                      <span className="text-sm text-theme-text font-semibold">
                        {macro.value}
                        <span className="text-theme-muted font-normal">{macro.unit}</span>
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${macro.color} transition-all duration-700 ease-out`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
