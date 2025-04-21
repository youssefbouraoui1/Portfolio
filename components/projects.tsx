"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  contributions: string[]
  technologies: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ticket Management System with NLP Chatbot",
    description:
      "Developed a comprehensive ticket management system featuring an integrated NLP-based chatbot that automatically prioritizes and clusters tickets, streamlining the support process.",
    contributions: [
      "Designed and implemented a microservices architecture using Django and Spring Boot",
      "Developed the NLP model for the chatbot's ticket classification functionality",
      "Integrated Kafka and WebSockets for real-time communication between services",
      "Implemented container orchestration with Docker and Kubernetes for scalability",
    ],
    technologies: [
      "Python",
      "Django",
      "Spring Boot",
      "Angular",
      "Kafka",
      "WebSockets",
      "Machine Learning",
      "NLP",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub",
    ],
    github: "https://github.com/orgs/Chatbot-pour-Clustering-des-tickets-PFA/repositories",
  },
  {
    id: 3,
    title: "ENSIAS Internship Management Platform",
    description:
      "Developed a comprehensive platform to connect ENSIAS students with internship opportunities, simplifying the application process and helping companies manage their internship offerings.",
    contributions: [
      "Built functionality for students to search and apply for internships",
      "Created systems for tracking application status",
      "Implemented features allowing companies to manage their internship offerings",
      "Designed and developed the full-stack application",
    ],
    technologies: ["React", "Express", "Oracle Autonomous Database", "Tailwind CSS", "Git", "GitHub"],
    github: "https://github.com/ProjetSI2024",
  },
  {
    id: 4,
    title: "Pascal Compiler in C",
    description:
      "Developed a complete compiler for the Pascal programming language, enabling translation and execution of Pascal code.",
    contributions: [
      "Built the lexical analyzer to identify tokens in the source code",
      "Implemented syntax analysis to verify grammatical correctness",
      "Created semantic analysis components to validate types and declarations",
      "Developed an intermediate pseudo-code generator",
      "Built an interpreter to execute the compiled code",
    ],
    technologies: ["C", "VSCode", "Git", "GitHub"],
    github: "https://github.com/Ismail-Ah/Compilateur",
  },
]

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const toggleProject = (id: number) => {
    if (expandedProject === id) {
      setExpandedProject(null)
    } else {
      setExpandedProject(id)
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

        <motion.div
          className="grid grid-cols-1 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies
                      .slice(0, expandedProject === project.id ? project.technologies.length : 5)
                      .map((tech, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <Badge variant="secondary">{tech}</Badge>
                        </motion.div>
                      ))}
                    {project.technologies.length > 5 && expandedProject !== project.id && (
                      <Badge variant="outline">+{project.technologies.length - 5} more</Badge>
                    )}
                  </div>

                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 space-y-4"
                    >
                      <h4 className="font-semibold">My Contributions:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {project.contributions.map((contribution, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            {contribution}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    {project.github && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            GitHub
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {project.demo && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleProject(project.id)}
                      className="flex items-center gap-1"
                    >
                      {expandedProject === project.id ? (
                        <>
                          <span>Show less</span>
                          <ChevronUp className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          <span>Show more</span>
                          <ChevronDown className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
