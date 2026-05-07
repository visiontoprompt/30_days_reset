import FadeInUp from '../motion/FadeInUp';
import EyebrowLabel from '../ui/EyebrowLabel';

const weeks = [
  { num: 'Week 1', title: 'Foundation', days: 'Days 1–7', focus: 'Energy + Awareness' },
  { num: 'Week 2', title: 'Momentum', days: 'Days 8–14', focus: 'Habits + Productivity' },
  { num: 'Week 3', title: 'Growth', days: 'Days 15–21', focus: 'Body, Mind, Environment' },
  { num: 'Week 4', title: 'Integration', days: 'Days 22–30', focus: 'Identity, Values, Future' },
];

export default function WeekByWeek() {
  return (
    <section id="method" className="bg-bg-elevated py-section-mobile lg:py-section">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <EyebrowLabel text="THE 4-WEEK ARC" className="block text-center" />
          <h2 className="mt-4 text-center font-serif font-medium text-h2-mobile lg:text-h2 text-text-primary">
            Each week builds gently on the last.
          </h2>
          <p className="mt-4 mx-auto text-center text-body text-text-secondary prose-readable">
            Week 1 is deliberately light — it&apos;s about noticing, not doing. By Week 4, the bigger questions feel approachable instead of overwhelming.
          </p>
        </FadeInUp>

        <div className="mt-14 relative">
          {/* Progress line - desktop horizontal */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-accent/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-4 gap-6">
            {weeks.map((w, i) => (
              <FadeInUp key={i} delay={0.1 * i}>
                <div className="relative bg-white rounded-2xl border border-border-subtle p-6 text-center z-10">
                  <span className="inline-block text-eyebrow uppercase tracking-widest text-accent font-sans">
                    {w.num}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl text-text-primary">{w.title}</h3>
                  <p className="mt-1 text-sm text-text-muted font-sans">{w.days}</p>
                  <div className="mt-3 inline-block px-3 py-1 rounded-full bg-accent-pale text-xs text-accent font-medium font-sans">
                    {w.focus}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
