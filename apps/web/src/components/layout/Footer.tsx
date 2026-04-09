import { useTranslations } from 'next-intl';
import { Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

const ICONS = {
  github: Github,
  linkedin: Linkedin,
};

export function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-muted-foreground)]">
          © {year} Daniel Mira Restrepo — {t('rights')}
        </p>
        <div className="flex items-center gap-4">
          <p className="text-xs text-[var(--color-muted-foreground)] font-mono">{t('built_with')}</p>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = ICONS[link.icon as keyof typeof ICONS];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
