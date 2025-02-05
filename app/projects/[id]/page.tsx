"use client"

import { useEffect } from "react"
import Image from "next/image"
import Layout from "../../../components/Layout"
import { useLanguage } from "../../../contexts/LanguageContext"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, Globe } from "lucide-react"
import Link from "next/link"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql } from "react-icons/si"

interface ProjectDetails {
  id: string
  title: {
    es: string
    en: string
  }
  description: {
    es: string
    en: string
  }
  role: {
    es: string
    en: string
  }
  timeline: string
  technologies: string[]
  challenges: {
    es: string[]
    en: string[]
  }
  solutions: {
    es: string[]
    en: string[]
  }
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
}

const technologyIcons: { [key: string]: JSX.Element } = {
  React: <SiReact />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  PostgreSQL: <SiPostgresql />,
}

// This would typically come from an API or database
const getProjectDetails = (id: string): ProjectDetails => ({
  id,
  title: {
    es: "Portal de Tarjetas Corporativas",
    en: "Corporate Cards Portal",
  },
  description: {
    es: "Una plataforma integral para la gestión de tarjetas corporativas, permitiendo a las empresas administrar sus gastos de manera eficiente.",
    en: "A comprehensive platform for corporate card management, enabling businesses to efficiently manage their expenses.",
  },
  role: {
    es: "Desarrollador Full Stack",
    en: "Full Stack Developer",
  },
  timeline: "2023 - 2024",
  technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
  challenges: {
    es: [
      "Implementación de autenticación segura multi-factor",
      "Gestión de transacciones en tiempo real",
      "Integración con múltiples APIs de procesamiento de pagos",
    ],
    en: [
      "Implementation of secure multi-factor authentication",
      "Real-time transaction management",
      "Integration with multiple payment processing APIs",
    ],
  },
  solutions: {
    es: [
      "Desarrollo de un sistema robusto de autenticación usando JWT y 2FA",
      "Implementación de WebSockets para actualizaciones en tiempo real",
      "Arquitectura modular para facilitar múltiples integraciones",
    ],
    en: [
      "Development of a robust authentication system using JWT and 2FA",
      "Implementation of WebSockets for real-time updates",
      "Modular architecture to facilitate multiple integrations",
    ],
  },
  imageUrl:
    "https://sjc.microlink.io/0DjUPQjuVf9l56vaPjASL4PSgTylkPZXi9yuwKewHBlWYGo4JHMiC8rwfeOo1aXiDHpC-BaSEMgMdz5_rW4KSQ.jpeg",
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/example",
})

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage()
  const project = getProjectDetails(params.id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <div className="py-12">
        <Link href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {language === "es" ? "Volver a Proyectos" : "Back to Projects"}
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{project.title[language]}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{project.description[language]}</p>
          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                <Globe className="mr-2 h-4 w-4" />
                {language === "es" ? "Ver en vivo" : "View live"}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-2">{language === "es" ? "Rol" : "Role"}</h2>
            <p className="text-gray-600 dark:text-gray-300">{project.role[language]}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">{language === "es" ? "Periodo" : "Timeline"}</h2>
            <p className="text-gray-600 dark:text-gray-300">{project.timeline}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">{language === "es" ? "Tecnologías" : "Technologies"}</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-lg p-2">
                  {technologyIcons[tech] || tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title[language]}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">{language === "es" ? "Desafíos" : "Challenges"}</h2>
            <ul className="space-y-4">
              {project.challenges[language].map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-blue-600 rounded-full" />
                  <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">{language === "es" ? "Soluciones" : "Solutions"}</h2>
            <ul className="space-y-4">
              {project.solutions[language].map((solution, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-green-600 rounded-full" />
                  <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

