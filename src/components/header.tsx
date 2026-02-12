"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useTranslation } from "@/lib/i18n"

export function Header() {
    const { t } = useTranslation()

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/75 backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-950/75">
            <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                    <Link href="/">Portfolio</Link>
                </div>
                <nav className="flex items-center gap-6 text-sm font-medium">
                    <Link href="#about" className="transition-colors hover:text-zinc-900/80 dark:hover:text-zinc-50/80">
                        {t.header.about}
                    </Link>
                    <Link href="#projects" className="transition-colors hover:text-zinc-900/80 dark:hover:text-zinc-50/80">
                        {t.header.projects}
                    </Link>
                    <Link href="#contact" className="transition-colors hover:text-zinc-900/80 dark:hover:text-zinc-50/80">
                        {t.header.contact}
                    </Link>
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <LanguageToggle />
                    </div>
                </nav>
            </div>
        </header>
    )
}
