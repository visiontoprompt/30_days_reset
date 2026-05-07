import { useState } from 'react';
import FadeInUp from '../motion/FadeInUp';
import EyebrowLabel from '../ui/EyebrowLabel';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    // Placeholder: wire to ConvertKit/MailerLite endpoint
    await new Promise((r) => setTimeout(r, 800));
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="bg-bg-base py-section-mobile lg:py-section">
      <div className="max-w-[600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <EyebrowLabel text="EARLY ACCESS" />
          <h2 className="mt-4 font-serif font-medium text-h2-mobile lg:text-h2 text-text-primary">
            Want early access?
          </h2>
          <p className="mt-4 text-body text-text-secondary prose-readable">
            If you're interested in the 30-Day Life Reset, drop your email below. We'll send you exclusive notifications and early access before anyone else.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          {status === 'success' ? (
            <div className="mt-8 p-6 rounded-xl bg-accent-pale text-accent font-medium">
              You're on the list! Keep an eye on your inbox for early access.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-xl border border-border-subtle bg-white px-5 py-3.5 text-body text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="rounded-xl bg-accent text-text-inverse px-6 py-3.5 font-medium text-body shadow-cta hover:shadow-cta-hover hover:scale-[1.02] transition-all duration-200 disabled:opacity-60"
              >
                {status === 'submitting' ? 'Joining...' : 'Get Early Access'}
              </button>
            </form>
          )}
          <p className="mt-3 text-body-sm text-text-muted font-sans">
            One email. No spam. Unsubscribe anytime.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
