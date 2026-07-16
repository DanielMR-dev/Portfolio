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
      <div className="rounded-3xl bg-[var(--color-card)] border border-[var(--color-border)] p-6 md:p-12">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[1.15rem] top-2 bottom-2 w-px bg-[var(--color-border)] hidden md:block" />

          <div className="space-y-10">
            {EXPERIENCE.map((item, i) => {
              const role = isEs ? item.role.es : item.role.en;
              const location = isEs ? item.location.es : item.location.en;
              const modality = isEs ? item.modality.es : item.modality.en;
              const summary = isEs ? item.summary.es : item.summary.en;
              const contributions = isEs ? item.contributions.es : item.contributions.en;

              // Format date strictly (assuming YYYY-MM format in data)
              const formatDate = (dateStr: string) => {
                if (dateStr.toLowerCase() === 'present' || dateStr.toLowerCase() === 'presente') {
                  return isEs ? 'Presente' : 'Present';
                }
                const d = new Date(dateStr + '-01'); // append day for valid parsing
                if (isNaN(d.getTime())) return dateStr;
                return d.toLocaleDateString(isEs ? 'es-ES' : 'en-US', {
                  month: 'short',
                  year: 'numeric'
                });
              };

              const dateRange = `${formatDate(item.startDate)} - ${formatDate(item.endDate)}`;

              return (
                <div key={item.id} className="relative md:pl-16">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-[var(--color-card)] border-2 border-[var(--color-primary)] items-center justify-center">
                    <Briefcase size={16} className="text-[var(--color-primary)]" />
                  </div>

                  <div className="group rounded-2xl bg-[var(--color-secondary)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-1">
                          {role}
                        </h3>
                        <p className="text-lg font-medium text-[var(--color-primary)] mb-2">
                          {item.company}
                        </p>
                        <p className="text-sm font-mono text-[var(--color-muted-foreground)] flex items-center gap-2">
                          <span>{location}</span>
                          <span>•</span>
                          <span>{modality}</span>
                        </p>
                      </div>
                      <div className="shrink-0 flex items-center h-fit text-sm font-mono text-[var(--color-muted-foreground)] bg-[var(--color-card)] px-3 py-1.5 rounded-md border border-[var(--color-border)]">
                        {dateRange}
                      </div>
                    </div>
                    
                    <p className="text-base text-[var(--color-foreground)]/90 leading-relaxed mb-6">
                      {summary}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[var(--color-foreground)] uppercase tracking-wide mb-3 opacity-80">
                        {isEs ? 'Aportes principales' : 'Key contributions'}
                      </h4>
                      <ul className="space-y-2">
                        {contributions.map((contribution, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[var(--color-muted-foreground)]">
                            <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/60" />
                            <span className="leading-relaxed">{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-[var(--color-border)] flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>
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
