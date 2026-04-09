'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface LocaleToggleProps {
  className?: string;
}

export function LocaleToggle({ className }: LocaleToggleProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'es' ? 'en' : 'es';
    // Replace locale prefix in current path
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLocale}
      aria-label={`Switch to ${locale === 'es' ? 'English' : 'Español'}`}
      className={cn(
        'px-2 py-1 rounded-lg text-sm font-mono font-medium transition-colors',
        'text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]',
        'hover:bg-[var(--color-secondary)] border border-[var(--color-border)]',
        className
      )}
    >
      {locale === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
