import { useState } from 'react';
import FadeInUp from '../motion/FadeInUp';
import EyebrowLabel from '../ui/EyebrowLabel';
import StickyNav from '../nav/StickyNav';
import Footer from '../sections/Footer';

export default function UnsubscribePage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    
    try {
      const res = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Failed to connect to the server. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <StickyNav />
      <main className="flex-1 flex flex-col items-center justify-center bg-bg-base py-section-mobile lg:py-section px-4 mt-16">
        <div className="max-w-[600px] w-full text-center">
          <FadeInUp>
            <EyebrowLabel text="UNSUBSCRIBE" />
            <h1 className="mt-4 font-serif font-medium text-h2-mobile lg:text-h2 text-text-primary">
              We're sorry to see you go.
            </h1>
            <p className="mt-4 text-body text-text-secondary prose-readable">
              Enter your email address below to unsubscribe from all future communications and early access notifications.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            {status === 'success' ? (
              <div className="mt-8 p-6 rounded-xl bg-accent-pale text-accent font-medium">
                You have been successfully unsubscribed.
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
                  className="rounded-xl bg-accent text-text-inverse px-6 py-3.5 font-medium text-body shadow-cta hover:shadow-cta-hover hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 whitespace-nowrap"
                >
                  {status === 'submitting' ? 'Processing...' : 'Unsubscribe'}
                </button>
              </form>
            )}
            
            {status === 'error' && (
              <p className="mt-3 text-body-sm text-red-500 font-sans">
                {errorMessage}
              </p>
            )}
          </FadeInUp>
        </div>
      </main>
      <Footer />
    </div>
  );
}
