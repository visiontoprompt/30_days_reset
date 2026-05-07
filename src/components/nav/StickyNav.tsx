import { useEffect, useState } from 'react';
import { etsyUrl } from '../../lib/constants';

const links = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Inside', href: '#inside' },
  { label: 'Method', href: '#method' },
  { label: 'FAQ', href: '#faq' },
];

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-base/90 backdrop-blur-md border-b border-border-subtle' : ''
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-[22px] text-text-primary tracking-tight">
          Life Reset
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={etsyUrl('nav')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-xl bg-accent text-text-inverse px-5 py-2.5 text-sm font-medium hover:bg-accent-hover transition-colors shadow-cta hover:shadow-cta-hover"
        >
          Get on Etsy — $5.99
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-base/95 backdrop-blur-md border-b border-border-subtle">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block font-sans text-sm text-text-secondary hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={etsyUrl('nav')}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-xl bg-accent text-text-inverse px-5 py-2.5 text-sm font-medium"
            >
              Get on Etsy — $5.99
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
