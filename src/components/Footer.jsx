import { Link } from 'react-router-dom';
import { Leaf, Globe, MessageCircle, Mail, Heart, Terminal } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Diet Plan', path: '/diet-plan' },
  { name: 'Recipes', path: '/recipes' },
];

const features = [
  'AI Diet Plans',
  'Recipe Search',
  'Calorie Tracker',
  'Health Tips',
];

const socialLinks = [
  { name: 'Website', icon: Globe, href: '#' },
  { name: 'Chat', icon: MessageCircle, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@luminadiet.com' },
  { name: 'Support', icon: Heart, href: '#' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20">
      {/* ── Gradient top border ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      {/* ── Main Footer ── */}
      <div className="relative overflow-hidden bg-theme-surface">


        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* ── Column 1 – About ── */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="group mb-5 inline-flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded bg-theme-card border border-theme-border transition-colors duration-300 group-hover:border-primary">
                  <Terminal className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <span className="text-theme-text text-xl font-bold tracking-tight">
                  <span className="text-primary">&lt;</span>LuminaDiet <span className="text-primary">/&gt;</span>
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-theme-muted">
                Your AI-powered nutrition companion. Get personalised diet plans,
                discover healthy recipes, and track your wellness journey — all
                in one beautiful app.
              </p>
            </div>

            {/* ── Column 2 – Quick Links ── */}
            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-theme-text">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-2 text-sm text-theme-muted transition-colors duration-300 hover:text-primary"
                    >
                      <span className="inline-block h-1 w-1 rounded-full bg-theme-muted transition-all duration-300 group-hover:w-2 group-hover:bg-primary" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 3 – Features ── */}
            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-theme-text">
                Features
              </h4>
              <ul className="flex flex-col gap-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="group flex items-center gap-2 text-sm text-theme-muted transition-colors duration-300 hover:text-primary"
                  >
                    <span className="inline-block h-1 w-1 rounded-full bg-theme-muted transition-all duration-300 group-hover:w-2 group-hover:bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 4 – Connect ── */}
            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-theme-text">
                Connect
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="group flex h-10 w-10 items-center justify-center rounded border border-theme-border bg-theme-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(34,197,94,0.2)]"
                    >
                      <Icon className="h-4.5 w-4.5 text-theme-muted transition-colors duration-300 group-hover:text-primary" />
                    </a>
                  );
                })}
              </div>
              <p className="mt-5 text-sm text-theme-muted">
                hello@luminadiet.com
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-theme-border bg-black/5 dark:bg-black/20">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
            <p className="text-xs text-theme-muted">
              &copy; {currentYear} LuminaDiet. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 text-xs text-theme-muted">
              Made with{' '}
              <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500 animate-pulse" />{' '}
              by{' '}
              <span className="text-primary font-semibold">&lt;LuminaDiet /&gt;</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
