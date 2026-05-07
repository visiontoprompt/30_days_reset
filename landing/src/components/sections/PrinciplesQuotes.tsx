import FadeInUp from '../motion/FadeInUp';
import EyebrowLabel from '../ui/EyebrowLabel';

const quotes = [
  {
    text: 'You do not rise to the level of your goals. You fall to the level of your systems.',
    author: 'James Clear',
    book: 'Atomic Habits',
  },
  {
    text: 'People change best by feeling good, not by feeling bad.',
    author: 'BJ Fogg',
    book: 'Tiny Habits',
  },
  {
    text: 'Clarity about what matters provides clarity about what does not.',
    author: 'Cal Newport',
    book: 'Deep Work',
  },
];

export default function PrinciplesQuotes() {
  return (
    <section className="bg-bg-base py-section-mobile lg:py-section">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <EyebrowLabel text="BUILT ON PROVEN PRINCIPLES" className="block text-center" />
          <h2 className="mt-4 text-center font-serif font-medium text-h2-mobile lg:text-h2 text-text-primary">
            The most productive people don&apos;t rely on motivation. They rely on systems.
          </h2>
          <p className="mt-4 mx-auto text-center text-body text-text-secondary prose-readable">
            This workbook draws on decades of behavioral science — translated into something you can actually use in 10 minutes a day.
          </p>
        </FadeInUp>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <FadeInUp key={i} delay={0.1 * i}>
              <div className="relative bg-white rounded-2xl border border-border-subtle p-8">
                <span className="absolute top-4 left-6 font-serif text-[60px] leading-none text-accent/20 select-none">
                  &ldquo;
                </span>
                <p className="relative z-10 mt-6 font-serif italic text-[22px] text-text-primary leading-relaxed">
                  {q.text}
                </p>
                <p className="mt-6 font-sans text-xs uppercase tracking-widest text-text-muted">
                  — {q.author}, {q.book}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.35}>
          <p className="mt-10 text-center text-body text-text-secondary">
            You don&apos;t need their schedule. You need their system — adapted for real life. That&apos;s what this workbook gives you.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
