import FadeInUp from '../motion/FadeInUp';
import EyebrowLabel from '../ui/EyebrowLabel';

export default function FoundersNote() {
  return (
    <section className="bg-bg-elevated py-section-mobile lg:py-section">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <EyebrowLabel text="FROM THE DESIGNER" className="block text-center" />
        <h2 className="mt-4 text-center font-serif font-medium text-[32px] text-text-primary">
            Why I built this.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <div className="mt-10 max-w-[65ch] mx-auto flex flex-col md:flex-row items-start gap-8">
            <div className="shrink-0 mx-auto md:mx-0 w-20 h-20 rounded-full bg-accent-pale flex items-center justify-center text-accent font-serif text-2xl font-medium">
              PP
            </div>
            <div>
              <p className="font-serif text-lg text-text-primary leading-relaxed">
                &ldquo;I built this workbook for the version of myself that kept buying planners and abandoning them by week two. Every existing system I tried assumed I already had energy, focus, and structure — exactly the things I didn&apos;t have.
              </p>
              <p className="mt-4 font-serif text-lg text-text-primary leading-relaxed">
                So I designed something that starts gentler. Week 1 is just about noticing your patterns. By Week 4, the bigger questions feel doable. If that sounds like the kind of reset you&apos;ve been looking for, I made this for you.&rdquo;
              </p>
              <p className="mt-6 font-sans text-sm uppercase tracking-widest text-text-muted">
                — PalettePixelStudio
              </p>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
