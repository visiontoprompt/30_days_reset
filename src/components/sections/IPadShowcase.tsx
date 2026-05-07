import { Check } from 'lucide-react';
import { etsyUrl } from '../../lib/constants';
import FadeInUp from '../motion/FadeInUp';
import EyebrowLabel from '../ui/EyebrowLabel';

const points = [
  'Works with GoodNotes, Notability, and most PDF apps',
  'Two formats included — US Letter (8.5×11) + A4',
  'Print at home or at a local print shop',
];

export default function IPadShowcase() {
  return (
    <section className="bg-bg-deep py-section-mobile lg:py-section">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeInUp>
            <img
              src="/assets/ipad-print.jpg"
              alt="Tablet displaying the workbook next to a printer with digital and print icons"
              width={600}
              height={500}
              loading="lazy"
              className="w-full rounded-2xl"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(58,90,64,0.10)) drop-shadow(0 30px 60px rgba(58,90,64,0.08))' }}
            />
          </FadeInUp>

          <div>
            <FadeInUp>
              <EyebrowLabel text="USE IT YOUR WAY" />
              <h2 className="mt-4 font-serif font-medium text-h2-mobile lg:text-h2 text-text-primary">
                Tablet, paper, or both.
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.15}>
              <ul className="mt-8 space-y-4">
                {points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-body text-text-secondary">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <a
                href={etsyUrl('ipad')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              >
                See it on Etsy →
              </a>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
