"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, GraduationCap, Award } from "lucide-react"

interface Education {
  id: number
  degree: string
  institution: string
  period: string
  description?: string
}

interface Certification {
  id: number
  name: string
  issuer: string
  date?: string
}

const educations: Education[] = [
  {
    id: 1,
    degree: "Software Engineering",
    institution: "ENSIAS, Rabat",
    period: "2023-2026",
    description: "Studying software engineering with focus on modern development practices, cloud computing, and AI.",
  },
  {
    id: 2,
    degree: "CPGE Mathematics, Physics and Engineering Sciences",
    institution: "Lycée Ibn Timiya, Marrakech",
    period: "2021-2023",
    description: "Intensive preparatory classes focusing on mathematics, physics, and engineering sciences.",
  },
  {
    id: 3,
    degree: "Baccalaureate in Mathematical Sciences A",
    institution: "Lycée Mohammed V, Marrakech",
    period: "2020-2021",
  },
]

const certifications: Certification[] = [
  {
    id: 1,
    name: "AI Analyst",
    issuer: "IBM",
    date: "2023",
  },
  {
    id: 2,
    name: "Meta Frontend Developer",
    issuer: "Coursera",
    date: "2023",
  },
  {
    id: 3,
    name: "Introduction To Networks",
    issuer: "Cisco",
    date: "2022",
  },
  {
    id: 4,
    name: "Reinforcement Learning",
    issuer: "Datacamp",
    date: "2023",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              Education
            </h3>
            <div className="space-y-4">
              {educations.map((education) => (
                <motion.div
                  key={education.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: education.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{education.degree}</CardTitle>
                          <CardDescription>{education.institution}</CardDescription>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                          <CalendarDays className="h-4 w-4" />
                          <span>{education.period}</span>
                        </div>
                      </div>
                    </CardHeader>
                    {education.description && (
                      <CardContent>
                        <p>{education.description}</p>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((certification) => (
                <motion.div
                  key={certification.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: certification.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{certification.name}</CardTitle>
                          <CardDescription>{certification.issuer}</CardDescription>
                        </div>
                        {certification.date && <Badge variant="outline">{certification.date}</Badge>}
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
