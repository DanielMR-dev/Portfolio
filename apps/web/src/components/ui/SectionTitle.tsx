import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, className, centered = false }: SectionTitleProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {subtitle && (
        <p className="text-[var(--color-cyber-blue)] font-mono text-sm font-medium tracking-wider uppercase mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
        {title}
      </h2>
      <div className={cn('mt-3 h-1 w-16 bg-[var(--color-cyber-blue)] rounded-full', centered && 'mx-auto')} />
    </div>
  );
}
