'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { TechBadge } from '@/components/shared/TechBadge';
import { PROJECTS } from '@/lib/constants';

export function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const [activeTag, setActiveTag] = useState<string>('all');

  const allTags = ['all', ...Array.from(new Set(PROJECTS.flatMap((p) => [...p.tags])))];

  const filtered =
    activeTag === 'all' ? [...PROJECTS] : PROJECTS.filter((p) => (p.tags as readonly string[]).includes(activeTag));

  return (
    <SectionWrapper id="projects">
      <div className="rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] p-5 md:p-10">
      <SectionTitle title={t('title')} subtitle={t('subtitle')} />

      {/* Tag filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-3 py-1.5 rounded-full text-sm font-mono transition-colors ${
              activeTag === tag
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)]'
                : 'bg-[var(--color-secondary)] text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]'
            }`}
          >
            {tag === 'all' ? t('filter_all') : tag}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[var(--color-muted-foreground)] col-span-full text-center py-12"
            >
              {t('no_results')}
            </motion.p>
          ) : (
            filtered.map((project) => {
              const title = locale === 'es' ? project.titleEs : project.title;
              const description = locale === 'es' ? project.descriptionEs : project.description;

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 rounded-xl bg-[var(--color-secondary)] border border-[var(--color-border)] flex flex-col gap-4 hover:border-[var(--color-cyber-blue)]/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-[var(--color-foreground)]">{title}</h3>
                    {project.featured && (
                      <span className="flex-shrink-0 text-xs font-mono px-1.5 py-0.5 bg-[var(--color-cyber-blue)]/10 text-[var(--color-cyber-blue)] rounded border border-[var(--color-cyber-blue)]/20">
                        featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--color-muted-foreground)] flex-1">{description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <TechBadge key={tag} name={tag} />
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2 border-t border-[var(--color-border)]">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                      >
                        <Github size={14} />
                        {t('view_code')}
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                      >
                        <ExternalLink size={14} />
                        {t('view_live')}
                      </a>
                    )}
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
