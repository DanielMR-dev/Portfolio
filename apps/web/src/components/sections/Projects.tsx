'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Lock } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { TechBadge } from '@/components/ui/TechBadge';
import { PROJECTS } from '@/lib/constants';

export function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const [activeTag, setActiveTag] = useState<string>('all');

  const otherProjects = PROJECTS.filter((p) => !p.featured).sort((a, b) => a.order - b.order);
  const allTags = ['all', ...Array.from(new Set(otherProjects.flatMap((p) => p.tags)))];

  const filtered =
    activeTag === 'all' ? otherProjects : otherProjects.filter((p) => p.tags.includes(activeTag));

  return (
    <SectionWrapper id="projects">
      <div className="rounded-3xl bg-[var(--color-card)] border border-[var(--color-border)] p-6 md:p-12">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        {/* Tag filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-colors ${
                activeTag === tag
                  ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-lg shadow-[var(--color-primary)]/20'
                  : 'bg-[var(--color-secondary)] text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/50'
              }`}
            >
              {tag === 'all' ? t('filter_all') : tag}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-[var(--color-muted-foreground)] col-span-full text-center py-16 font-mono"
              >
                {t('no_results')}
              </motion.p>
            ) : (
              filtered.map((project) => {
                const title = locale === 'es' ? project.title.es : project.title.en;
                const description = locale === 'es' ? project.shortDescription.es : project.shortDescription.en;
                const statusLabel = t(`status.${project.status}`);

                return (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group p-6 rounded-2xl bg-[var(--color-secondary)] border border-[var(--color-border)] flex flex-col gap-5 hover:border-[var(--color-primary)]/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-bold text-[var(--color-foreground)] leading-tight">{title}</h3>
                      <div className="flex flex-col gap-1 items-end shrink-0">
                        <span className="text-[10px] font-mono px-2 py-0.5 bg-[var(--color-card)] text-[var(--color-muted-foreground)] rounded border border-[var(--color-border)]">
                          {statusLabel}
                        </span>
                        {project.type === 'automation' && (
                           <span className="text-[10px] font-mono px-2 py-0.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded border border-[var(--color-primary)]/20">
                             automation
                           </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed flex-1">{description}</p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <TechBadge key={tag} name={tag} />
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)] mt-1">
                      <div className="flex gap-4">
                        {project.confidential ? (
                           <div className="flex items-center gap-1.5 text-xs text-amber-500/80" title={t('confidential_note')}>
                             <Lock size={14} />
                             <span className="font-medium">{t('internal_badge')}</span>
                           </div>
                        ) : (
                          project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors"
                            >
                              <Github size={15} />
                              {t('view_code')}
                            </a>
                          )
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors"
                          >
                            <ExternalLink size={15} />
                            {t('view_live')}
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
