import { useTranslations } from 'next-intl';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { SKILLS } from '@/lib/constants';

const CATEGORY_ORDER = ['languages', 'frameworks', 'security', 'devops'] as const;

export function Skills() {
  const t = useTranslations('skills');

  const skillsByCategory = CATEGORY_ORDER.map((category) => ({
    category,
    label: t(`categories.${category}`),
    skills: SKILLS.filter((s) => s.category === category),
  }));

  return (
    <SectionWrapper id="skills">
      <div className="rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] p-6 md:p-10">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />
        <div className="grid md:grid-cols-2 gap-8">
          {skillsByCategory.map(({ category, label, skills }) => (
            <div key={category}>
              <h3 className="font-mono text-sm font-medium text-[var(--color-cyber-blue)] uppercase tracking-wider mb-4">
                {label}
              </h3>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-[var(--color-foreground)]">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-[var(--color-muted-foreground)]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-[var(--color-secondary)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--color-cyber-blue)] rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
