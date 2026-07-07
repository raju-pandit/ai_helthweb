import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Diet Plan', path: '/diet-plan' },
  { name: 'Recipes', path: '/recipes' },
  { name: 'Profile', path: '/profile' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') !== 'light';
  });
  const location = useLocation();

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Track scroll for enhanced glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`glass-strong fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'shadow-lg shadow-indigo-500/10' : ''
        }`}
        style={{
          borderBottom: '1px solid rgba(99, 102, 241, 0.12)',
          boxShadow: scrolled
            ? '0 4px 30px rgba(99, 102, 241, 0.08), inset 0 -1px 0 rgba(99, 102, 241, 0.15)'
            : 'inset 0 -1px 0 rgba(99, 102, 241, 0.08)',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-18">
            {/* ── Logo ── */}
            <Link to="/" className="group flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded bg-theme-card border border-theme-border transition-colors duration-300 group-hover:border-primary">
                <Terminal className="h-5 w-5 text-primary" strokeWidth={2} />
              </div>
              <span className="text-theme-text text-xl font-bold tracking-tight select-none">
                <span className="text-primary">&lt;</span>LuminaDiet <span className="text-primary">/&gt;</span>
              </span>
            </Link>

            {/* ── Desktop Links ── */}
            <ul className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                      isActive(link.path)
                        ? 'text-theme-text'
                        : 'text-theme-muted hover:text-primary hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/5'
                    }`}
                  >
                    {link.name}

                    {/* Active syntax indicator */}
                    {isActive(link.path) ? (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 text-primary font-bold"></span>
                    ) : null}
                    
                    {/* Hover brackets */}
                    <span className={`opacity-0 group-hover:opacity-100 transition-opacity text-primary absolute left-1 top-1/2 -translate-y-1/2`}>[</span>
                    <span className={`opacity-0 group-hover:opacity-100 transition-opacity text-primary absolute right-1 top-1/2 -translate-y-1/2`}>]</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* ── CTA + Hamburger + Theme Toggle ── */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDark((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-theme-muted transition-colors duration-300 hover:bg-black/10 dark:hover:bg-black/10 dark:bg-white/10 hover:text-theme-text"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <Link
                to="/dashboard"
                className="btn-primary hidden px-5 py-2 text-sm md:inline-block"
              >
                Get Started
              </Link>

              <button
                type="button"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl text-theme-muted transition-colors duration-300 hover:bg-black/10 dark:hover:bg-black/10 dark:bg-white/10 hover:text-theme-text md:hidden"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                <span
                  className={`absolute transition-all duration-300 ${
                    mobileOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                  }`}
                >
                  <Menu className="h-6 w-6" />
                </span>
                <span
                  className={`absolute transition-all duration-300 ${
                    mobileOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                  }`}
                >
                  <X className="h-6 w-6" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Overlay ── */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          mobileOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 transform transition-transform duration-500 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            background: 'var(--theme-card)',
            borderLeft: '1px solid var(--theme-border)',
          }}
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-theme-muted transition-colors duration-300 hover:bg-black/10 dark:bg-white/10 hover:text-theme-text"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-1 px-4">
            {navLinks.map((link, index) => (
              <li
                key={link.path}
                className="animate-slide-right"
                style={{ animationDelay: `${index * 70}ms`, animationFillMode: 'both' }}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-theme-muted hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/5 hover:text-theme-text'
                  }`}
                >
                  {/* Active dot */}
                  {isActive(link.path) && (
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-sm shadow-indigo-400/50" />
                  )}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="absolute bottom-8 left-0 right-0 px-6">
            <Link
              to="/dashboard"
              className="btn-primary block w-full text-center py-3 text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer so content doesn't hide behind the fixed navbar */}
      <div className="h-16 md:h-18" />
    </>
  );
};

export default Navbar;
