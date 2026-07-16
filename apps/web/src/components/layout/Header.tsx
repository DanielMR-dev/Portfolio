'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { LocaleToggle } from '@/components/shared/LocaleToggle';
import { DownloadResumeButton } from '@/components/ui/DownloadResumeButton';
import { cn } from '@/lib/utils';

const NAV_ITEMS = ['featured-project', 'experience', 'projects', 'skills', 'about', 'contact'] as const;

export function Header() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono font-bold text-[var(--color-foreground)] text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] rounded"
        >
          DM<span className="text-[var(--color-cyber-purple)]">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] rounded"
            >
              {t(item)}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block mr-2">
            <DownloadResumeButton variant="ghost" />
          </div>
          <ThemeToggle />
          <LocaleToggle />
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu-panel"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu-panel"
          ref={menuRef}
          className="md:hidden bg-[var(--color-card)]/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-xl"
        >
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={handleLinkClick}
                className="text-left text-sm py-2 font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] rounded"
              >
                {t(item)}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-[var(--color-border)]">
              <DownloadResumeButton variant="outline" className="w-full justify-center" onClick={handleLinkClick} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
