import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../utils/translations"

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
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, imageUrl }) => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="group relative h-[80vh] overflow-hidden">
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
          className="inline-block bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-300"
        >
          {t.viewProject}
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard

