"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es"

interface I18nContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: typeof translations.en
}

const translations = {
    en: {
        header: {
            about: "About",
            projects: "Projects",
            contact: "Contact",
        },
        hero: {
            title: "Building Digital Experiences",
            subtitle: "I'm a full-stack developer passionate about creating beautiful and functional web applications.",
            viewProjects: "View Projects",
            contactMe: "Contact Me",
        },
        about: {
            title: "About Me",
            description: "As a systems engineer and full-stack developer, I specialize in building scalable web applications. I love learning new technologies and solving complex problems.",
        },
        projects: {
            title: "Projects",
            description: "Here are some of my recent projects.",
        },
        contact: {
            title: "Contact",
            description: "Feel free to reach out to me for collaborations or just a friendly chat.",
        },
        footer: {
            builtBy: "Built by",
            sourceCode: "The source code is available on",
        },
    },
    es: {
        header: {
            about: "Sobre mí",
            projects: "Proyectos",
            contact: "Contacto",
        },
        hero: {
            title: "Creando Experiencias Digitales",
            subtitle: "Soy un desarrollador full-stack apasionado por crear aplicaciones web hermosas y funcionales.",
            viewProjects: "Ver Proyectos",
            contactMe: "Contáctame",
        },
        about: {
            title: "Sobre mí",
            description: "Como ingeniero de sistemas y desarrollador full-stack, me especializo en construir aplicaciones web escalables. Me encanta aprender nuevas tecnologías y resolver problemas complejos.",
        },
        projects: {
            title: "Proyectos",
            description: "Aquí hay algunos de mis proyectos recientes.",
        },
        contact: {
            title: "Contacto",
            description: "No dudes en contactarme para colaboraciones o simplemente para una charla amistosa.",
        },
        footer: {
            builtBy: "Creado por",
            sourceCode: "El código fuente está disponible en",
        },
    },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en")

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLang = localStorage.getItem("language") as Language
            if (savedLang && (savedLang === "en" || savedLang === "es")) {
                setLanguage(savedLang)
            } else {
                const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
                setLanguage(browserLang);
            }
        }
    }, [setLanguage])

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang)
        localStorage.setItem("language", lang)
    }

    return (
        <I18nContext.Provider
            value={{
                language,
                setLanguage: handleSetLanguage,
                t: translations[language],
            }}
        >
            {children}
        </I18nContext.Provider>
    )
}

export function useTranslation() {
    const context = useContext(I18nContext)
    if (context === undefined) {
        throw new Error("useTranslation must be used within an I18nProvider")
    }
    return context
}
