import { useTranslations } from 'next-intl';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Shield, BookOpen, Code2 } from 'lucide-react';

const VALUE_ICONS = {
  security: Shield,
  learning: BookOpen,
  quality: Code2,
};

export function About() {
  const t = useTranslations('about');

  return (
    <SectionWrapper id="about">
      <div className="rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] p-6 md:p-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <SectionTitle title={t('title')} subtitle={t('subtitle')} />
            <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-4">
              {t('bio')}
            </p>
            <p className="text-[var(--color-muted-foreground)] leading-relaxed">
              {t('bio2')}
            </p>
          </div>

          {/* Values */}
          <div className="space-y-4">
            {(['security', 'learning', 'quality'] as const).map((key) => {
              const Icon = VALUE_ICONS[key];
              return (
                <div
                  key={key}
                  className="flex gap-4 p-4 rounded-lg bg-[var(--color-secondary)] border border-[var(--color-border)]"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-cyber-blue)]/10 flex items-center justify-center">
                    <Icon size={20} className="text-[var(--color-cyber-blue)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-foreground)] mb-1">
                      {t(`values.${key}.title`)}
                    </h3>
                    <p className="text-sm text-[var(--color-muted-foreground)]">
                      {t(`values.${key}.description`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
