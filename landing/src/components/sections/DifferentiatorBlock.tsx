import { CheckCircle2 } from 'lucide-react';
import FadeInUp from '../motion/FadeInUp';
import EyebrowLabel from '../ui/EyebrowLabel';

const items = [
  {
    title: 'Behavioral pacing',
    desc: 'Early days rebuild energy instead of draining it.',
  },
  {
    title: 'ADHD-friendly layout',
    desc: 'One focus at a time. Open checkboxes. Generous white space.',
  },
  {
    title: 'Missed-day reset',
    desc: 'A skipped day never means starting over.',
  },
];

export default function DifferentiatorBlock() {
  return (
    <section className="bg-bg-elevated py-section-mobile lg:py-section">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <EyebrowLabel text="BUILT DIFFERENTLY" className="block text-center" />
          <h2 className="mt-4 text-center font-serif font-medium text-h2-mobile lg:text-h2 text-text-primary max-w-[65ch] mx-auto">
            Most planners assume you&apos;re already organized. This one starts where you actually are.
          </h2>
        </FadeInUp>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <FadeInUp key={i} delay={0.1 * i}>
              <div className="bg-white rounded-2xl border border-border-subtle p-8">
                <CheckCircle2 className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-serif text-xl text-text-primary">{item.title}</h3>
                <p className="mt-2 text-body text-text-secondary">{item.desc}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
