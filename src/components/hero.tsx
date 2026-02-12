"use client"

import { useTranslation } from "@/lib/i18n"

export function Hero() {
    const { t } = useTranslation()

    return (
        <section id="hero" className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    {t.hero.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                    {t.hero.subtitle}
                </p>
                <div className="mt-10 flex gap-4">
                    <a
                        href="#projects"
                        className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                    >
                        {t.hero.viewProjects}
                    </a>
                    <a
                        href="#contact"
                        className="rounded-full border border-zinc-200 bg-white px-8 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
                    >
                        {t.hero.contactMe}
                    </a>
                </div>
            </div>
        </section>
    )
}
