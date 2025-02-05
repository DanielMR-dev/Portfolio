"use client"
import Layout from "../../components/Layout"
import { useLanguage } from "../../contexts/LanguageContext"
import { translations } from "../../utils/translations"
import Image from "next/image"
import { MapPin, Mail, Phone, Linkedin, Code, Server, Shield, GraduationCap, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <Layout>
      <div className="py-16">
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Daniel Mira Restrepo"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Daniel Mira Restrepo</h1>
          <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">{t.introduction}</p>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300">
            <a
              href="https://maps.google.com/?q=Pereira,Colombia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-600 dark:hover:text-blue-400"
            >
              <MapPin className="w-4 h-4 mr-2" />
              {t.location}
            </a>
            <a
              href="mailto:miradaniel71@gmail.com"
              className="flex items-center hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Mail className="w-4 h-4 mr-2" />
              miradaniel71@gmail.com
            </a>
            <a href="tel:+573196149423" className="flex items-center hover:text-blue-600 dark:hover:text-blue-400">
              <Phone className="w-4 h-4 mr-2" />
              +57 319 614 9423
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-mira-restrepo-/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </div>
        </header>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{t.experience}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Front End Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold">{t.frontEndTitle}</h3>
                </div>
                <ul className="space-y-2">
                  {t.frontEndSkills.map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Back End Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Server className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold">{t.backEndTitle}</h3>
                </div>
                <ul className="space-y-2">
                  {t.backEndSkills.map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Other Knowledge Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Shield className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold">{t.otherKnowledge}</h2>
          </div>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-2">
                {t.otherSkills.map((skill, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300">
                    • {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold">{t.education}</h2>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Universidad Tecnológica de Pereira</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Ingeniería en Sistemas y Computación</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Servicio Nacional de Aprendizaje - SENA</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Bachiller Técnico en Sistemas</p>
                <p className="text-sm text-gray-500">Nov 2019</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Skills Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Star className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold">{t.additionalSkills}</h2>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {t.additionalSkillsList.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  )
}

