import FadeInUp from '../motion/FadeInUp';
import EyebrowLabel from '../ui/EyebrowLabel';
import Accordion from '../ui/Accordion';

const faqs = [
  {
    question: 'Is this physical or digital?',
    answer: 'Digital only. You\'ll get instant access to 3 PDFs after purchase. Nothing physical ships.',
  },
  {
    question: 'How do I access it after purchase?',
    answer: 'Etsy emails you a download link the moment payment confirms. No waiting.',
  },
  {
    question: 'Will it work on my iPad?',
    answer: 'Yes — works with GoodNotes, Notability, and most PDF annotation apps.',
  },
  {
    question: 'How long does each day take?',
    answer: 'About 10 minutes. Three small tasks, a reflection prompt, a mood check.',
  },
  {
    question: 'What if I miss a day?',
    answer: 'Built-in missed-day reset. Skip a day, pick up where you left off. Never start over.',
  },
  {
    question: 'Can I print it?',
    answer: 'Yes — formatted for both US Letter and A4. Print at home or at a print shop.',
  },
  {
    question: 'Is there a subscription?',
    answer: 'No. One purchase, yours to keep. Download as many times as you want.',
  },
  {
    question: 'Can I print multiple copies?',
    answer: 'Personal use only. For classroom or group use, message the shop first.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-bg-base py-section-mobile lg:py-section">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <EyebrowLabel text="QUESTIONS, ANSWERED" className="block text-center" />
          <h2 className="mt-4 text-center font-serif font-medium text-h2-mobile lg:text-h2 text-text-primary">
            Everything you might be wondering.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <div className="mt-12">
            <Accordion items={faqs} />
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
