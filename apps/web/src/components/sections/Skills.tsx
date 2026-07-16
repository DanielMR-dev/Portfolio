'use client';

import { useTranslations, useLocale } from 'next-intl';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SKILLS, SkillCategory } from '@/lib/constants';
import { ShieldCheck, Server, Briefcase, Star } from 'lucide-react';

const CATEGORY_CONFIG: Record<SkillCategory, { icon: React.ElementType }> = {
  experience: { icon: Briefcase },
  featured: { icon: Star },
  security: { icon: ShieldCheck },
  learning: { icon: Server },
};

export function Skills() {
  const t = useTranslations('skills');
  const locale = useLocale();

  const categories = Object.keys(CATEGORY_CONFIG) as SkillCategory[];

  const skillsByCategory = categories.map((category) => ({
    category,
    label: t(`categories.${category}`),
    skills: SKILLS.filter((s) => s.category === category),
  })).filter(c => c.skills.length > 0);

  return (
    <SectionWrapper id="skills">
      <div className="rounded-3xl bg-[var(--color-card)] border border-[var(--color-border)] p-6 md:p-12">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />
        
        {t.has('note') && (
          <p className="text-sm text-[var(--color-muted-foreground)] mb-10 max-w-2xl border-l-2 border-[var(--color-primary)] pl-4 py-1">
            {t('note')}
          </p>
        )}

        <div className="grid lg:grid-cols-2 gap-10">
          {skillsByCategory.map(({ category, label, skills }) => {
            const Icon = CATEGORY_CONFIG[category].icon;
            
            return (
              <div key={category} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
                  <div className="p-2 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-lg text-[var(--color-foreground)]">
                    {label}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="group p-4 rounded-xl bg-[var(--color-secondary)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 transition-colors"
                    >
                      <h4 className="font-bold text-[var(--color-foreground)] mb-1.5">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-[var(--color-muted-foreground)] leading-relaxed group-hover:text-[var(--color-foreground)]/80 transition-colors">
                        {locale === 'es' ? skill.context.es : skill.context.en}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
