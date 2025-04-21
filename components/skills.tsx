"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  category: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "C/C++", level: 80 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 85 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Spring Boot", level: 85 },
      { name: "Express", level: 80 },
      { name: "Django", level: 75 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PL/SQL", level: 80 },
      { name: "Oracle Autonomous Database", level: 75 },
    ],
  },
  {
    category: "DevOps/Cloud",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 75 },
      { name: "Azure Services", level: 85 },
      { name: "Git/GitHub", level: 90 },
    ],
  },
  {
    category: "Other Skills",
    skills: [
      { name: "Linux", level: 85 },
      { name: "Machine Learning", level: 80 },
      { name: "Natural Language Processing", level: 75 },
      { name: "Microservices Architecture", level: 80 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>

        <Tabs defaultValue={skillCategories[0].category} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.category} value={category.category} className="text-xs md:text-sm">
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <Card>
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <motion.div
                            className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  )
}
