"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true)
  const { language, setLanguage } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const [activeLink, setActiveLink] = useState(pathname === "/" ? "home" : "about")

  useEffect(() => {
    setActiveLink(pathname === "/" ? "home" : "about")
  }, [pathname])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isProjectPage = pathname.startsWith("/projects/")

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white dark:bg-black shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="flex space-x-4">
                  <Link
                    href="/"
                    onClick={() => setActiveLink("home")}
                    className={`text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300 ${
                      !isProjectPage && activeLink === "home" ? "text-blue-600 dark:text-blue-400" : ""
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setActiveLink("about")}
                    className={`text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300 ${
                      !isProjectPage && activeLink === "about" ? "text-blue-600 dark:text-blue-400" : ""
                    }`}
                  >
                    About
                  </Link>
                </div>
                <AnimatePresence>
                  {!isProjectPage && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                      initial={false}
                      animate={{
                        width: "50%",
                        x: activeLink === "home" ? "0%" : "100%",
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Toggle language"
              >
                {language === "es" ? "EN" : "ES"}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      <footer className="bg-white dark:bg-black py-4 mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-300">
          © 2023 Daniel Mira Restrepo. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

