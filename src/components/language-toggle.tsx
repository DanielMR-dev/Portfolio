"use client"

import * as React from "react"
import { Languages } from "lucide-react"

import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/i18n"

export function LanguageToggle({ className }: { className?: string }) {
    const { language, setLanguage } = useTranslation()

    return (
        <button
            className={cn(
                "relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-transparent p-0 text-sm font-medium transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-300",
                className
            )}
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            aria-label="Toggle language"
        >
            <Languages className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle language</span>
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-bold text-white dark:bg-zinc-50 dark:text-zinc-900">
                {language.toUpperCase()}
            </span>
        </button>
    )
}
