'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import Image from 'next/image';

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

        {/* Profile image with frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex justify-center mb-8"
        >
          {/* Outer rotating ring */}
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[300px] h-[300px] rounded-full"
              style={{
                background: `conic-gradient(
                  from 0deg,
                  var(--color-cyber-blue),
                  var(--color-cyber-purple),
                  transparent 60%,
                  var(--color-cyber-blue)
                )`,
              }}
            />

            {/* Glow halo */}
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[290px] h-[290px] rounded-full"
              style={{
                boxShadow: `0 0 40px 8px color-mix(in srgb, var(--color-cyber-blue) 35%, transparent),
                            0 0 80px 16px color-mix(in srgb, var(--color-cyber-purple) 20%, transparent)`,
              }}
            />

            {/* Frame border ring */}
            <div
              className="absolute w-[278px] h-[278px] rounded-full"
              style={{
                background: `linear-gradient(135deg, var(--color-cyber-blue), var(--color-cyber-purple))`,
                padding: '2px',
              }}
            />

            {/* Card background ring */}
            <div
              className="absolute w-[272px] h-[272px] rounded-full bg-[var(--color-card)]"
            />

            {/* Profile image */}
            <div
              className="relative w-[260px] h-[260px] rounded-full overflow-hidden border-2"
              style={{ borderColor: 'var(--color-card)' }}
            >
              <Image
                src="/profile.jpg"
                alt={t('name')}
                fill
                priority
                sizes="260px"
                className="object-cover object-center scale-[1.3] origin-top"
              />
            </div>

            {/* Corner accent dots */}
            {[0, 90, 180, 270].map((deg) => (
              <div
                key={deg}
                className="absolute w-2 h-2 rounded-full bg-[var(--color-cyber-blue)]"
                style={{
                  transform: `rotate(${deg}deg) translateY(-150px)`,
                  boxShadow: '0 0 6px 2px var(--color-cyber-blue)',
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
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
          transition={{ duration: 0.5, delay: 0.7 }}
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
      </div>
    </section>
  );
}
