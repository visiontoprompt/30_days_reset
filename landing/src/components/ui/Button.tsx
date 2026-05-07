import { ArrowRight } from 'lucide-react';

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  size?: 'md' | 'lg';
  className?: string;
  newTab?: boolean;
}

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'lg',
  className = '',
  newTab = true,
}: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-sans transition-all duration-200 ease-out';
  const sizeClasses =
    size === 'lg'
      ? 'px-8 py-4 text-lg font-medium'
      : 'px-6 py-3 text-base font-medium';
  const variants =
    variant === 'primary'
      ? 'bg-accent text-text-inverse shadow-cta hover:shadow-cta-hover hover:scale-[1.02]'
      : 'border border-border-subtle bg-transparent text-text-primary hover:border-accent hover:text-accent';

  return (
    <a
      href={href}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      className={`${base} ${sizeClasses} ${variants} ${className}`}
    >
      {children}
      <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}
