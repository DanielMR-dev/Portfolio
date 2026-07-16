'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DownloadResumeButtonProps {
  /** Visual style variant */
  variant?: 'primary' | 'outline' | 'ghost';
  /** Additional CSS classes */
  className?: string;
  /** Custom text to override default from translations */
  text?: string;
  /** Optional click handler */
  onClick?: () => void;
}

export function DownloadResumeButton({
  variant = 'outline',
  className,
  text,
  onClick,
}: DownloadResumeButtonProps) {
  const locale = useLocale();
  const t = useTranslations('hero');

  const hasEs = process.env.NEXT_PUBLIC_HAS_ES_CV === 'true';
  const hasEn = process.env.NEXT_PUBLIC_HAS_EN_CV === 'true';

  // Determine if the document for the current locale is available
  const isAvailable = locale === 'es' ? hasEs : hasEn;

  if (!isAvailable) {
    return null; // Temporarily hide if CV does not exist
  }

  const cvUrl =
    locale === 'es'
      ? '/documents/daniel-mira-cv-es.pdf'
      : '/documents/daniel-mira-resume-en.pdf';

  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-[var(--color-background)]';
  
  const variants = {
    primary:
      'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary)]/90 px-5 py-2.5',
    outline:
      'border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)] px-5 py-2.5',
    ghost:
      'hover:bg-[var(--color-secondary)] text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] px-4 py-2',
  };

  return (
    <a
      href={cvUrl}
      download
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseStyles, variants[variant], className)}
      onClick={onClick}
    >
      <Download size={18} />
      {text || t('cta_secondary')}
    </a>
  );
}
