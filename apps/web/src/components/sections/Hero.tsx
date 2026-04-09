'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowDown, Terminal } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const tags = t.raw('tags') as string[];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-cyber-blue) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-cyber-blue) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-cyber-green)]/30 bg-[var(--color-cyber-green)]/10 text-[var(--color-cyber-green)] text-xs font-mono mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-cyber-green)] animate-pulse" />
            {t('available')}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-[var(--color-muted-foreground)] font-mono text-lg mb-2">
            {t('greeting')}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-foreground)] mb-4">
            {t('name')}
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-muted-foreground)] mb-6">
            {t('role')}
          </p>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-mono bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] border border-[var(--color-border)]"
            >
              <Terminal size={12} className="text-[var(--color-cyber-blue)]" />
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="px-6 py-3 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] rounded-lg font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            {t('cta_primary')}
          </button>
          <button
            onClick={scrollToContact}
            className="px-6 py-3 border border-[var(--color-border)] text-[var(--color-foreground)] rounded-lg font-medium hover:bg-[var(--color-secondary)] transition-colors w-full sm:w-auto"
          >
            {t('cta_secondary')}
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[var(--color-muted-foreground)]"
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
