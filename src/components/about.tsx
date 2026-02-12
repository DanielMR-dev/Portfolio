"use client"

import { useTranslation } from "@/lib/i18n"

export function About() {
    const { t } = useTranslation()

    return (
        <section id="about" className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight mb-8">{t.about.title}</h2>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {t.about.description}
            </p>
        </section>
    )
}
