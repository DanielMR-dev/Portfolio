"use client"

import { useTranslation } from "@/lib/i18n"

export function Projects() {
    const { t } = useTranslation()

    return (
        <section id="projects" className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight mb-8">{t.projects.title}</h2>
            <p className="mb-8 text-base text-zinc-600 dark:text-zinc-400">
                {t.projects.description}
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Project Cards Placeholder */}
                <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                    <h3 className="text-lg font-semibold">Project 1</h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Description...</p>
                </div>
            </div>
        </section>
    )
}
