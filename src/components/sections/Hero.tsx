import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { etsyUrl } from '../../lib/constants';
import FadeInUp from '../motion/FadeInUp';
import EyebrowLabel from '../ui/EyebrowLabel';

export default function Hero() {
  return (
    <section className="relative bg-bg-base pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Soft sage radial behind product */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-accent/30 blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <FadeInUp>
            <EyebrowLabel text="A 30-DAY GUIDED RESET • DIGITAL DOWNLOAD" />
            <h1 className="mt-4 font-serif font-medium text-h1-mobile lg:text-h1 text-text-primary leading-[1.05]">
              You don’t need to overhaul your life.
            </h1>
            <p className="mt-2 font-serif italic text-[52px] lg:text-[52px] text-text-primary leading-[1.05]">
              You just need somewhere to start.
            </p>
            <p className="mt-6 text-lead text-text-secondary prose-readable">
              A gentle 30-day workbook for anyone who&apos;s been going through the motions for too long — and is ready for something to actually change.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={etsyUrl('hero')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-text-inverse px-8 py-4 text-lg font-medium shadow-cta hover:shadow-cta-hover hover:scale-[1.02] transition-all duration-200"
              >
                Get the Workbook on Etsy — $5.99
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-text-muted font-sans">
              <Check className="w-4 h-4 text-accent" />
              Instant download
              <span className="mx-1.5 text-border-DEFAULT">•</span>
              <Check className="w-4 h-4 text-accent" />
              66 pages
              <span className="mx-1.5 text-border-DEFAULT">•</span>
              <Check className="w-4 h-4 text-accent" />
              iPad + Print
            </div>

            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-pale text-xs text-text-secondary font-sans">
              <span className="font-medium">Powered by Etsy Purchase Protection</span>
            </div>
          </FadeInUp>

          {/* Right */}
          <FadeInUp delay={0.15}>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <img
                src="/assets/hero-product.jpg"
                alt="30-Day Life Reset Workbook shown on a tablet next to a printed copy and coffee"
                width={600}
                height={500}
                loading="eager"
                className="w-full h-auto relative z-10"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(58,90,64,0.10)) drop-shadow(0 30px 60px rgba(58,90,64,0.08))' }}
              />
            </motion.div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
