interface Props {
  text: string;
  className?: string;
}

export default function EyebrowLabel({ text, className = '' }: Props) {
  return (
    <span
      className={`inline-block text-eyebrow uppercase font-sans text-text-muted tracking-widest ${className}`}
    >
      {text}
    </span>
  );
}
