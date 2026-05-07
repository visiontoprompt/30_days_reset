import { etsyUrl } from '../../lib/constants';

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Inside', href: '#inside' },
  { label: 'Method', href: '#method' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Etsy Shop', href: etsyUrl('footer') },
];

const legalLinks = [
  { label: 'Privacy', href: 'https://www.etsy.com/legal/privacy' },
  { label: 'Terms', href: 'https://www.etsy.com/legal/policy' },
  { label: 'Refund', href: 'https://www.etsy.com/legal/policy' },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl text-text-inverse">Life Reset</p>
            <p className="font-sans text-sm text-text-inverse/60 mt-2">
              by PalettePixelStudio
            </p>
            <p className="mt-3 text-body-sm text-text-inverse/50 max-w-[260px]">
              Simple tools for slow, intentional living. One page at a time.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-text-inverse/40 mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-body-sm text-text-inverse/60 hover:text-text-inverse transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-text-inverse/40 mb-4">
              Legal & Contact
            </p>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm text-text-inverse/60 hover:text-text-inverse transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={etsyUrl('footer_message')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm text-text-inverse/60 hover:text-text-inverse transition-colors"
                >
                  Message me on Etsy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-text-inverse/40 font-sans">
          © 2026 PalettePixelStudio. Made with care for slow, intentional living.
        </div>
      </div>
    </footer>
  );
}
