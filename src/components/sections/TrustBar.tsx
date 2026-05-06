import { Palette, ShieldCheck, Zap } from 'lucide-react';

const items = [
  { icon: Palette, text: 'Designed by PalettePixelStudio' },
  { icon: ShieldCheck, text: 'Etsy Purchase Protection' },
  { icon: Zap, text: 'Instant Digital Download • No Shipping' },
];

export default function TrustBar() {
  return (
    <section className="bg-bg-elevated py-5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-text-secondary font-sans">
            <item.icon className="w-4 h-4 text-accent" />
            <span>{item.text}</span>
            {i < items.length - 1 && (
              <span className="hidden sm:inline ml-6 text-border-DEFAULT">•</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
