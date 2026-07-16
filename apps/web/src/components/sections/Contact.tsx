'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Github, Linkedin, Send } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { DownloadResumeButton } from '@/components/ui/DownloadResumeButton';
import { SOCIAL_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().max(200).optional(),
  message: z.string().min(10).max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const SOCIAL_ICONS = { github: Github, linkedin: Linkedin };

export function Contact() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setStatus('loading');
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? '';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (hasError: boolean) =>
    cn(
      'w-full px-3 py-2.5 rounded-lg bg-[var(--color-secondary)] border text-sm',
      'text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/50 transition-colors',
      hasError ? 'border-red-500' : 'border-[var(--color-border)]'
    );

  return (
    <SectionWrapper id="contact">
      <div className="rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] p-6 md:p-10">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: info */}
        <div>
          <SectionTitle title={t('title')} subtitle={t('subtitle')} />
          <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-8">
            {t('description')}
          </p>
          <div className="mb-8">
            <p className="text-sm font-medium text-[var(--color-foreground)] mb-3">
              {t('social.title')}
            </p>
            <div className="flex gap-4 mb-6">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICONS[link.icon as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded"
                  >
                    <Icon size={16} />
                    {link.name}
                  </a>
                );
              })}
            </div>
            
            <div className="pt-6 border-t border-[var(--color-border)] inline-block w-full">
              <DownloadResumeButton variant="outline" className="w-full sm:w-auto" />
            </div>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div>
            <label htmlFor="contact-name" className="sr-only">{t('form.name')}</label>
            <input
              id="contact-name"
              {...register('name')}
              placeholder={t('form.name')}
              className={inputClass(!!errors.name)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-red-500 mt-1" aria-live="polite">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="contact-email" className="sr-only">{t('form.email')}</label>
            <input
              id="contact-email"
              {...register('email')}
              type="email"
              placeholder={t('form.email')}
              className={inputClass(!!errors.email)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-red-500 mt-1" aria-live="polite">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="contact-subject" className="sr-only">{t('form.subject')}</label>
            <input
              id="contact-subject"
              {...register('subject')}
              placeholder={t('form.subject')}
              className={inputClass(!!errors.subject)}
              aria-invalid={!!errors.subject}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="sr-only">{t('form.message')}</label>
            <textarea
              id="contact-message"
              {...register('message')}
              placeholder={t('form.message')}
              rows={5}
              className={cn(inputClass(!!errors.message), 'resize-none')}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-red-500 mt-1" aria-live="polite">{errors.message.message}</p>
            )}
          </div>

          <div aria-live="polite">
            {status === 'success' && (
              <p className="text-sm text-[var(--color-cyber-green)] mb-2">{t('form.success')}</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-500 mb-2">{t('form.error')}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] rounded-lg font-medium hover:bg-white hover:text-black transition-all disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-card)]"
          >
            <Send size={16} />
            {status === 'loading' ? t('form.submitting') : t('form.submit')}
          </button>
        </form>
      </div>
      </div>
    </SectionWrapper>
  );
}
