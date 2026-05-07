export default function LifestyleBreak() {
  return (
    <section
      className="relative flex items-center justify-center min-h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: 'url(/assets/hero-product.jpg)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-bg-base/80 via-bg-base/60 to-bg-base/80" />
      <div className="relative z-10 text-center px-4">
        <h2 className="font-serif italic text-[48px] text-text-primary leading-tight">
          A quiet practice. A clearer life.
        </h2>
        <p className="mt-4 text-lead text-text-secondary">
          30 days from now, you&apos;ll wonder how you went without it.
        </p>
      </div>
    </section>
  );
}
