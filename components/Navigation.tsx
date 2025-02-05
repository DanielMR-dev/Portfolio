"use client"

import Link from "next/link"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../utils/translations"

export default function Navigation() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <nav className="mb-8">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            {t.home}
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">
            {t.about}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

