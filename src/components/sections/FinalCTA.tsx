import { motion } from 'framer-motion';
import { etsyUrl } from '../../lib/constants';
import FadeInUp from '../motion/FadeInUp';

export default function FinalCTA() {
  return (
    <section className="bg-bg-dark py-section-mobile lg:py-section">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <motion.img
            src="/assets/hero-product.jpg"
            alt="30-Day Life Reset Workbook cover"
            width={200}
            height={200}
            loading="lazy"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-auto rounded-xl"
            style={{ filter: 'drop-shadow(0 10px 30px rgba(58,90,64,0.10))' }}
          />
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <h2 className="mt-8 font-serif font-medium text-[48px] text-text-inverse leading-tight">
            Use it your way.
          </h2>
          <p className="mt-4 text-lead text-text-inverse/80">
            Return anytime. Your reset, your pace. 66 pages of gentle guidance — yours instantly for $5.99.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <a
            href={etsyUrl('final')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-text-inverse text-text-primary px-10 py-5 text-xl font-medium shadow-cta hover:shadow-cta-hover hover:scale-[1.02] transition-all duration-200"
          >
            Get the Workbook on Etsy — $5.99 →
          </a>

          <p className="mt-4 text-body-sm text-text-inverse/60 font-sans">
            Etsy Purchase Protection • Instant download • Two PDF formats included
          </p>
          <p className="mt-6 text-xs text-text-inverse/50">
            Designed by PalettePixelStudio @ PalettePixelStudio • United States
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
