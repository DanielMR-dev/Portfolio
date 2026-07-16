'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ExternalLink, Github, Terminal } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { TechBadge } from '@/components/ui/TechBadge';
import { PROJECTS } from '@/lib/constants';

export function FeaturedProject() {
  const t = useTranslations('projects');
  const locale = useLocale();

  const featuredProject = PROJECTS.find((p) => p.featured);

  if (!featuredProject) return null;

  const title = locale === 'es' ? featuredProject.title.es : featuredProject.title.en;
  const description = locale === 'es' ? featuredProject.shortDescription.es : featuredProject.shortDescription.en;
  const problem = featuredProject.problem ? (locale === 'es' ? featuredProject.problem.es : featuredProject.problem.en) : null;
  const solution = featuredProject.solution ? (locale === 'es' ? featuredProject.solution.es : featuredProject.solution.en) : null;
  const statusLabel = t(`status.${featuredProject.status}`);

  return (
    <SectionWrapper id="featured-project">
      <div className="rounded-3xl bg-[var(--color-card)] border border-[var(--color-border)] p-6 md:p-12 overflow-hidden relative">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row gap-12 relative z-10">
          
          {/* Content Column */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-mono border border-[var(--color-primary)]/20 uppercase tracking-wider font-semibold">
                {t('featured_badge')}
              </span>
              <span className="text-xs font-mono text-[var(--color-muted-foreground)] px-2 py-1 bg-[var(--color-secondary)] rounded border border-[var(--color-border)]">
                {statusLabel}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-foreground)] mb-6">
              {title}
            </h2>
            
            <p className="text-lg text-[var(--color-muted-foreground)] mb-6">
              {description}
            </p>

            <div className="space-y-4 mb-8">
              {problem && (
                <div>
                  <h4 className="text-sm font-semibold text-[var(--color-foreground)] uppercase tracking-wide mb-1 opacity-80">Problem</h4>
                  <p className="text-sm text-[var(--color-muted-foreground)]">{problem}</p>
                </div>
              )}
              {solution && (
                <div>
                  <h4 className="text-sm font-semibold text-[var(--color-foreground)] uppercase tracking-wide mb-1 opacity-80">Solution</h4>
                  <p className="text-sm text-[var(--color-muted-foreground)]">{solution}</p>
                </div>
              )}
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-semibold text-[var(--color-foreground)] uppercase tracking-wide mb-3 opacity-80">
                Capabilities
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {featuredProject.highlights?.map((hl, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
                    <Terminal size={14} className="text-[var(--color-cyber-blue)]" />
                    {locale === 'es' ? hl.es : hl.en}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {featuredProject.tags.map((tag) => (
                <TechBadge key={tag} name={tag} />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              {featuredProject.repoUrl && (
                <a
                  href={featuredProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-secondary)] text-[var(--color-foreground)] border border-[var(--color-border)] hover:border-[var(--color-primary)] rounded-lg font-medium transition-colors"
                >
                  <Github size={18} />
                  {t('view_code')}
                </a>
              )}
              {featuredProject.caseStudyUrl && (
                <a
                  href={featuredProject.caseStudyUrl}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 rounded-lg font-medium transition-colors"
                >
                  <ExternalLink size={18} />
                  {t('case_study')}
                </a>
              )}
            </div>
          </div>

          {/* Visual Column (Placeholder since image is undefined currently) */}
          <div className="flex-1 lg:w-1/2 flex items-center justify-center">
            <div className="w-full aspect-[4/3] rounded-2xl border border-[var(--color-border)] bg-[var(--color-secondary)] overflow-hidden relative group">
              {/* If an image exists we would render it here, otherwise this placeholder */}
              {featuredProject.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img 
                  src={featuredProject.imageUrl} 
                  alt={locale === 'es' ? featuredProject.imageAlt?.es || title : featuredProject.imageAlt?.en || title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-muted-foreground)]/50 p-8 text-center bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-card)]">
                  <Terminal size={64} className="mb-4 opacity-20" />
                  <p className="font-mono text-sm opacity-60">Visual representation pending</p>
                  <p className="font-mono text-xs opacity-40 mt-2">&gt; _ running NetSentinel engine...</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
