import FadeInUp from '../motion/FadeInUp';
import EyebrowLabel from '../ui/EyebrowLabel';

export default function PainPromise() {
  return (
    <section className="bg-bg-base py-section-mobile lg:py-section">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <EyebrowLabel text="BEFORE & AFTER" className="block text-center" />
          <h2 className="mt-4 text-center font-serif font-medium text-h2-mobile lg:text-h2 text-text-primary">
            From scattered to settled, in 30 days.
          </h2>
        </FadeInUp>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-[960px] mx-auto">
          <FadeInUp delay={0.1}>
            <div className="rounded-2xl border border-border-subtle bg-white p-8 lg:p-10">
              <p className="text-body-sm uppercase tracking-wide text-text-muted font-sans mb-4">
                Right now you might feel...
              </p>
              <p className="font-serif text-xl lg:text-2xl text-text-secondary leading-relaxed">
                Scattered. Overwhelmed. Going through the motions. The list keeps growing. Days bleed together. Nothing seems to land.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="rounded-2xl border border-accent/20 bg-accent-pale p-8 lg:p-10 md:scale-[1.03] origin-center">
              <p className="text-body-sm uppercase tracking-wide text-accent font-sans mb-4">
                30 days from now...
              </p>
              <p className="font-serif text-xl lg:text-2xl text-text-primary leading-relaxed">
                Clearer. Steadier. Reconnected. Your days have shape. Small shifts add up. You feel like yourself again.
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
