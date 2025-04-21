"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-lg mb-4">
              I am Youssef Bouraoui, a second-year Software Engineering student at ENSIAS (École Nationale Supérieure
              d'Informatique et d'Analyse des Systèmes) in Rabat. With a solid foundation in mathematics and physics
              from my CPGE studies, I've developed strong expertise in software development.
            </p>
            <p className="text-lg mb-4">
              I am particularly passionate about DevOps practices and data analysis, constantly seeking to improve my
              skills in these areas. My technical journey spans full-stack development, cloud technologies, and
              implementing machine learning solutions for real-world problems.
            </p>
            <p className="text-lg">
              As a full-stack developer, I have experience building complete web applications using modern frameworks
              like React and Spring Boot. My cloud technology experience includes working with Azure services for
              database management, storage solutions, and implementing CI/CD pipelines for automated deployment.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span>Rabat Agdal, Morocco</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span>0706206148</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span>bouraouiyoussef12@gmail.com</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <a
                  href="https://www.linkedin.com/in/youssef-bouraoui-666aa129a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  linkedin.com/in/youssef-bouraoui-666aa129a
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <a
                  href="https://github.com/youssefbouraoui1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  github.com/youssefbouraoui1
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}
