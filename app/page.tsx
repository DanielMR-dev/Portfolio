"use client"

import { useEffect, useRef } from "react"
import Layout from "../components/Layout"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../utils/translations"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"

interface ProjectCardProps {
  id: string
  title: {
    es: string
    en: string
  }
  description: {
    es: string
    en: string
  }
  imageUrl: string
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, imageUrl, index }) => {
  const { language } = useLanguage()
  const t = translations[language]
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={cardVariants}
      className="group relative h-[80vh] overflow-hidden mx-auto max-w-7xl mb-16"
    >
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={title[language]}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <h2 className="text-3xl font-bold mb-4">{title[language]}</h2>
        <p className="text-lg mb-6">{description[language]}</p>
        <Link
          href={`/projects/${id}`}
          className="inline-block bg-white text-black dark:bg-gray-800 dark:text-white py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          {t.viewProject}
        </Link>
      </div>
    </motion.div>
  )
}

// Simulated project data
const projects = [
  {
    id: "1",
    title: {
      es: "Proyecto 1",
      en: "Project 1",
    },
    description: {
      es: "Descripción del Proyecto 1",
      en: "Description of Project 1",
    },
    imageUrl: "/placeholder.svg?height=800&width=1200",
  },
  {
    id: "2",
    title: {
      es: "Proyecto 2",
      en: "Project 2",
    },
    description: {
      es: "Descripción del Proyecto 2",
      en: "Description of Project 2",
    },
    imageUrl: "/placeholder.svg?height=800&width=1200",
  },
  {
    id: "3",
    title: {
      es: "Proyecto 3",
      en: "Project 3",
    },
    description: {
      es: "Descripción del Proyecto 3",
      en: "Description of Project 3",
    },
    imageUrl: "/placeholder.svg?height=800&width=1200",
  },
  // Add more projects as needed
]

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <Layout>
      <div className="min-h-screen">
        <header className="h-screen flex items-center justify-center text-center px-4 max-w-7xl mx-auto">
          <div>
            <h1 className="text-5xl font-bold mb-6">Daniel Mira Restrepo</h1>
            <p className="text-2xl mb-8">
              {t.fullStackDeveloper} & {t.cybersecurityEnthusiast}
            </p>
            <p className="text-xl">{t.introduction}</p>
          </div>
        </header>
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

