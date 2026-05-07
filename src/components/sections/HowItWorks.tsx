import FadeInUp from '../motion/FadeInUp';
import EyebrowLabel from '../ui/EyebrowLabel';

const steps = [
  {
    num: '01',
    title: 'One page per day',
    desc: 'Open the workbook to today\'s page. That\'s the only decision.',
  },
  {
    num: '02',
    title: '10-minute guided tasks',
    desc: 'Three small tasks. A reflection prompt. A mood check. Done.',
  },
  {
    num: '03',
    title: 'Reflect & track progress',
    desc: 'Weekly check-ins help you adjust without restarting.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bg-elevated py-section-mobile lg:py-section">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <EyebrowLabel text="THE METHOD" className="block text-center" />
          <h2 className="mt-4 text-center font-serif font-medium text-h2-mobile lg:text-h2 text-text-primary">
            A simple daily rhythm. No pressure.
          </h2>
        </FadeInUp>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <FadeInUp key={i} delay={0.1 * i}>
              <div className="relative bg-white rounded-2xl border border-border-subtle p-8 lg:p-10">
                <span className="absolute top-4 right-6 font-serif italic text-[120px] leading-none text-accent-soft select-none pointer-events-none">
                  {s.num}
                </span>
                <h3 className="relative z-10 font-serif text-h3 text-text-primary mt-2">
                  {s.title}
                </h3>
                <p className="relative z-10 mt-3 text-body text-text-secondary">
                  {s.desc}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.35}>
          <div className="mt-14">
            <img
              src="/assets/how-it-works.jpg"
              alt="Clipboard showing Day 01 of the workbook next to greenery"
              width={1200}
              height={600}
              loading="lazy"
              className="w-full rounded-3xl"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(58,90,64,0.10)) drop-shadow(0 30px 60px rgba(58,90,64,0.08))' }}
            />
            <p className="mt-4 text-center text-body-sm text-text-muted font-sans">
              Day 01 — exactly what your first morning looks like.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
