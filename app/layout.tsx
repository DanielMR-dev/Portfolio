import "./globals.css"
import { Inter } from "next/font/google"
import { LanguageProvider } from "../contexts/LanguageContext"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Daniel Mira Restrepo - Portfolio",
  description: "Full Stack Developer & Cybersecurity Enthusiast",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}

