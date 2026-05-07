import { FileText, BarChart3, CalendarDays, Star } from 'lucide-react';
import FadeInUp from '../motion/FadeInUp';
import EyebrowLabel from '../ui/EyebrowLabel';

const features = [
  {
    icon: FileText,
    title: '30 Daily Pages',
    desc: 'Each with a clear goal, 3 tasks, a quick win, a reflection prompt, mood check, and tomorrow\'s focus.',
  },
  {
    icon: BarChart3,
    title: '7 Specialty Trackers',
    desc: 'Habits, mood, health, focus, home, finances, relationships.',
  },
  {
    icon: CalendarDays,
    title: '4 Weekly Checkpoints',
    desc: 'Adjust your course without starting over.',
  },
  {
    icon: Star,
    title: '3 Bonus Sections',
    desc: '50 Tiny Habits list, 7-Day Emergency Reset, 90-Day Roadmap.',
  },
];

export default function InsideWorkbook() {
  return (
    <section id="inside" className="bg-bg-base py-section-mobile lg:py-section">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <EyebrowLabel text="WHAT'S INSIDE" />
          <h2 className="mt-4 font-serif font-medium text-h2-mobile lg:text-h2 text-text-primary">
            66 pages, designed for real life.
          </h2>
          <p className="mt-4 mx-auto text-body text-text-secondary prose-readable">
            Every page is built around one principle: meet you where you are. Generous white space. Open checkboxes. One focus at a time.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <img
            src="/assets/whats-inside.jpg"
            alt="Four-page spread showing the inside layout of the workbook"
            width={800}
            height={600}
            loading="lazy"
            className="mx-auto mt-12 rounded-2xl w-full max-w-[800px]"
            style={{ filter: 'drop-shadow(0 10px 30px rgba(58,90,64,0.10)) drop-shadow(0 30px 60px rgba(58,90,64,0.08))' }}
          />
        </FadeInUp>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {features.map((f, i) => (
            <FadeInUp key={i} delay={0.1 * i}>
              <div className="group rounded-xl border border-border-subtle bg-white p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200">
                <f.icon className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-serif text-lg text-text-primary">{f.title}</h4>
                <p className="mt-2 text-body-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
