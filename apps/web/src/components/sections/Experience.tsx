'use client';

import { useTranslations, useLocale } from 'next-intl';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { TechBadge } from '@/components/ui/TechBadge';
import { EXPERIENCE } from '@/lib/constants';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const t = useTranslations('experience');
  const locale = useLocale();
  const isEs = locale === 'es';

  return (
    <SectionWrapper id="experience">
      <div className="rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] p-6 md:p-10">
      <SectionTitle title={t('title')} subtitle={t('subtitle')} />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-[var(--color-border)] hidden md:block" />

        <div className="space-y-8">
          {EXPERIENCE.map((item, i) => (
            <div key={i} className="relative md:pl-16">
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-0 w-10 h-10 rounded-full bg-[var(--color-card)] border-2 border-[var(--color-cyber-blue)] items-center justify-center">
                <Briefcase size={16} className="text-[var(--color-cyber-blue)]" />
              </div>

              <div className="p-5 rounded-xl bg-[var(--color-secondary)] border border-[var(--color-border)]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-[var(--color-foreground)]">{item.title}</h3>
                    <p className="text-sm text-[var(--color-cyber-blue)]">{item.company}</p>
                  </div>
                  <span className="text-xs font-mono text-[var(--color-muted-foreground)] bg-[var(--color-card)] px-2 py-1 rounded whitespace-nowrap">
                    {isEs ? item.periodEs : item.period}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-muted-foreground)] mb-3">
                  {isEs ? item.descriptionEs : item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <TechBadge key={tag} name={tag} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </SectionWrapper>
  );
}
