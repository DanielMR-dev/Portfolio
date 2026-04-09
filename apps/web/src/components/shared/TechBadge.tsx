import { cn } from '@/lib/utils';

interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium',
        'bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]',
        'border border-[var(--color-border)]',
        className
      )}
    >
      {name}
    </span>
  );
}
