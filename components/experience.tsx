"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Full Stack Engineer Intern",
    company: "IT UP2YOU",
    location: "Rabat, Morocco",
    period: "July 2024 - August 2024",
    description: "Worked on developing a comprehensive web application using modern technologies.",
    responsibilities: [
      "Designed and developed a comprehensive web application using React for frontend and Spring Boot for backend services",
      "Implemented responsive UI components and RESTful API integrations",
      "Collaborated with team members to ensure smooth integration between frontend and backend systems",
    ],
    technologies: ["React", "Spring Boot", "RESTful API", "Git", "GitHub"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle>{experience.title}</CardTitle>
                      <CardDescription className="text-lg font-medium mt-1">{experience.company}</CardDescription>
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{experience.description}</p>

                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
