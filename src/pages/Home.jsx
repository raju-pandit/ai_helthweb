import { Link } from 'react-router-dom';
import {
  Users,
  UtensilsCrossed,
  Salad,
  Star,
  UserCheck,
  Brain,
  TrendingUp,
  Sparkles,
  Search,
  Flame,
  BarChart3,
  Bell,
  LineChart,
  ArrowRight,
  ChevronRight,
  Terminal,
} from 'lucide-react';

/* ───────── data ───────── */

const stats = [
  { label: 'Users', value: '10K+', icon: Users },
  { label: 'Recipes', value: '500+', icon: UtensilsCrossed },
  { label: 'Diets', value: '50+', icon: Salad },
  { label: 'Rating', value: '4.9', icon: Star },
];

const steps = [
  {
    num: '01',
    title: 'Fill Your Health Profile',
    desc: 'Enter your age, weight, dietary preferences, allergies, and health goals. The more details you share, the smarter your plan becomes.',
    Icon: UserCheck,
  },
  {
    num: '02',
    title: 'AI Generates Your Plan',
    desc: 'Our advanced AI engine analyzes your data against thousands of nutritional models to craft a diet plan uniquely tailored to you.',
    Icon: Brain,
  },
  {
    num: '03',
    title: 'Follow & Track Progress',
    desc: 'Stick to your personalized plan, log meals effortlessly, and watch real-time charts show your transformation over time.',
    Icon: TrendingUp,
  },
];

const features = [
  {
    title: 'AI Diet Plans',
    desc: 'Personalized meal plans using advanced AI that adapts to your lifestyle.',
    Icon: Sparkles,
    color: 'from-indigo-500 to-purple-600',
    glow: 'rgba(99,102,241,0.25)',
  },
  {
    title: 'Recipe Search',
    desc: 'Search from 500+ healthy, chef-curated recipes for every taste.',
    Icon: Search,
    color: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.25)',
  },
  {
    title: 'Calorie Tracker',
    desc: 'Track your daily calorie intake with one-tap meal logging.',
    Icon: Flame,
    color: 'from-orange-500 to-red-500',
    glow: 'rgba(249,115,22,0.25)',
  },
  {
    title: 'Nutrition Analysis',
    desc: 'Detailed macro & micro nutrition breakdown for every meal.',
    Icon: BarChart3,
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.25)',
  },
  {
    title: 'Health Alerts',
    desc: 'Smart reminders, hydration nudges, and daily health tips.',
    Icon: Bell,
    color: 'from-amber-400 to-yellow-500',
    glow: 'rgba(245,158,11,0.25)',
  },
  {
    title: 'Progress Charts',
    desc: 'Beautiful visual charts to track weight, calories & goals.',
    Icon: LineChart,
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236,72,153,0.25)',
  },
];

/* ───────── component ───────── */

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-32 pb-24 flex flex-col items-center justify-center px-4 min-h-[92vh]">
        {/* subtle grid background instead of blobs */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg0OCwgNTQsIDYxLCAwLjIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded glass text-sm text-theme-muted font-mono border-l-2 border-l-primary">
            <Terminal className="w-4 h-4 text-primary" />
            <span>[ SYS_LOG ]: AI engine initialized...</span>
          </div>

          {/* headline */}
          <h1
            className="animate-fade-in-up delay-100 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight opacity-0 text-left sm:text-center"
            style={{ animationFillMode: 'forwards' }}
          >
            <span className="syntax-purple">import</span> {'{'} <span className="syntax-yellow">Health</span> {'}'} <span className="syntax-purple">from</span> <span className="syntax-green">'LuminaDiet'</span>;
            <br />
            <span className="syntax-blue">const</span> plan = <span className="syntax-blue">await</span> <span className="syntax-yellow">Health</span>.<span className="syntax-blue">generate</span>();
          </h1>

          {/* subtitle */}
          <p
            className="animate-fade-in-up delay-200 mt-8 text-sm sm:text-base text-theme-muted max-w-2xl mx-auto leading-relaxed opacity-0 text-left sm:text-center"
            style={{ animationFillMode: 'forwards' }}
          >
            // Get personalized diet plans based on your health profile.
            <br />
            // Powered by artificial intelligence. Eat smarter, live healthier.
          </p>

          {/* CTA buttons */}
          <div
            className="animate-fade-in-up delay-300 mt-10 flex flex-col sm:flex-row gap-4 justify-center opacity-0"
            style={{ animationFillMode: 'forwards' }}
          >
            <Link to="/profile" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-3.5">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/recipes" className="btn-outline inline-flex items-center gap-2 text-lg px-8 py-3.5">
              Explore Recipes
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* stats row */}
          <div
            className="animate-fade-in-up delay-500 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto opacity-0"
            style={{ animationFillMode: 'forwards' }}
          >
            {stats.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="glass rounded flex flex-col items-start p-4 gap-2 card-hover border-l-2 border-l-primary"
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-xs text-theme-muted uppercase tracking-wider">
                    {label}
                  </span>
                </div>
                <span className="text-2xl font-bold text-theme-text">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* section header */}
          <div className="text-center mb-20 flex flex-col items-center">
            <p className="text-sm uppercase tracking-widest text-primary-light mb-4">
              Simple 3-Step Process
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              How <span className="gradient-text">LuminaDiet</span> Works
            </h2>
            <p className="text-theme-muted max-w-xl mx-auto leading-relaxed">
              From profile to plate in minutes — our AI handles the science so you
              can focus on eating well.
            </p>
          </div>

          {/* step cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(({ num, title, desc, Icon }, i) => (
              <div
                key={num}
                className={`animate-fade-in-up delay-${(i + 1) * 200} relative glass rounded-2xl p-8 card-hover group overflow-hidden opacity-0`}
                style={{ animationFillMode: 'forwards' }}
              >
                {/* large faded step number */}
                <span className="pointer-events-none absolute -top-4 -right-2 text-[7rem] font-black leading-none text-theme-text/[0.03] select-none group-hover:text-theme-text/[0.06] transition-colors duration-500">
                  {num}
                </span>

                {/* icon circle */}
                <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-theme-text" />
                </div>

                <h3 className="relative z-10 text-xl font-bold text-theme-text mb-3">
                  {title}
                </h3>
                <p className="relative z-10 text-theme-muted leading-relaxed text-sm">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURES GRID ═══════════════ */}
      <section className="relative py-24 px-4">
        {/* subtle background glow */}
        <div
          className="glow-circle"
          style={{
            width: 500,
            height: 500,
            background: '#6366f1',
            top: '10%',
            right: '-12%',
            opacity: 0.08,
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* section header */}
          <div className="text-center mb-20 flex flex-col items-center">
            <p className="text-sm uppercase tracking-widest text-secondary-light mb-4">
              Packed with Power
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              Everything You <span className="gradient-text-green">Need</span>
            </h2>
            <p className="text-theme-muted max-w-xl mx-auto leading-relaxed">
              A complete toolkit to plan, track, and optimise your nutrition — all
              driven by AI.
            </p>
          </div>

          {/* feature cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ title, desc, Icon, color, glow }, i) => (
              <div
                key={title}
                className="glass rounded-2xl p-7 card-hover group relative overflow-hidden"
              >
                {/* hover glow */}
                <div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                  style={{ background: glow }}
                />

                {/* icon */}
                <div
                  className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-theme-text" />
                </div>

                <h3 className="relative z-10 text-lg font-bold text-theme-text mb-2">
                  {title}
                </h3>
                <p className="relative z-10 text-sm text-theme-muted leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA BANNER ═══════════════ */}
      <section className="py-20 px-4">
        <div className="relative max-w-5xl mx-auto rounded glass overflow-hidden border-l-4 border-l-primary">

          {/* decorative circles */}
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-black/10 dark:bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-black/10 dark:bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-black/5 dark:bg-white/5 blur-2xl pointer-events-none" />

          {/* content */}
          <div className="relative z-10 py-16 px-6 sm:py-24 sm:px-12 text-left sm:text-center flex flex-col items-start sm:items-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-theme-text leading-tight mb-6">
              <span className="text-primary">&gt;</span> Ready to Transform
              <br />
              <span className="ml-8 sm:ml-0">Your Diet?</span>
            </h2>
            <p className="text-lg text-theme-muted max-w-lg mx-auto mb-10">
              // Join thousands who already eat smarter with AI-powered nutrition
              // planning.
            </p>
            <Link
              to="/profile"
              className="btn-primary inline-flex items-center gap-2 text-lg shadow-lg hover:shadow-primary/50"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
