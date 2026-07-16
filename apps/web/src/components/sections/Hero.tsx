'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Terminal, Download, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const tags = t.raw('tags') as string[];
  const cvLink = locale === 'es' ? '/documents/daniel-mira-cv-es.pdf' : '/documents/daniel-mira-resume-en.pdf';

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20 pb-10 md:py-0"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-secondary)] border border-[var(--color-border)] text-sm font-medium text-[var(--color-cyber-green)]">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-cyber-green)] opacity-75"></span>
              <span className="relative inline-flex rounded-full w-2 h-2 bg-[var(--color-cyber-green)]"></span>
            </span>
            {t('available')}
          </div>

          <p className="text-[var(--color-muted-foreground)] font-mono text-lg mb-2">
            {t('greeting')}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-foreground)] mb-4 tracking-tight">
            {t('name')}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[var(--color-cyber-blue)] mb-4">
            {t('role')}
          </p>
          <p className="text-base md:text-lg text-[var(--color-muted-foreground)] mb-8 max-w-xl text-balance">
            {t('proposition')}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10">
            {tags.map((tag, i) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] border border-[var(--color-border)]"
              >
                <Terminal size={12} className="text-[var(--color-cyber-blue)]" />
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#featured-project"
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] rounded-lg font-medium hover:opacity-90 transition-all w-full sm:w-auto"
            >
              {t('cta_primary')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={cvLink}
              target="_blank"
              download
              className="flex items-center justify-center gap-2 px-6 py-3 border border-[var(--color-border)] text-[var(--color-foreground)] rounded-lg font-medium hover:bg-[var(--color-secondary)] transition-colors w-full sm:w-auto"
            >
              <Download size={18} />
              {t('cta_secondary')}
            </a>
            <button
              onClick={scrollToContact}
              className="flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] rounded-lg font-medium transition-colors w-full sm:w-auto"
            >
              {t('cta_tertiary')}
            </button>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative flex items-center justify-center w-[280px] h-[280px] lg:w-[360px] lg:h-[360px]">
            {/* Subtle rotating ring - respects reduced motion */}
            <div className="absolute inset-0 rounded-full bg-[var(--color-cyber-blue)]/5 border border-[var(--color-cyber-blue)]/20 animate-[spin_30s_linear_infinite] motion-reduce:animate-none" />
            
            {/* Inner ring */}
            <div className="absolute inset-4 rounded-full border border-[var(--color-cyber-purple)]/20" />

            {/* Profile image */}
            <div
              className="relative w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden border-2 bg-[var(--color-card)] shadow-2xl"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <Image
                src="/profile.jpg"
                alt={t('name')}
                fill
                priority
                sizes="(max-width: 768px) 240px, 300px"
                className="object-cover object-center scale-[1.1] origin-top"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
