'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

export const Skills: React.FC = () => {
  const technicalSkills = {
    frontend: [
      'Next.js', 'React', 'HTML', 'CSS', 'JavaScript (JS)', 
      'Tailwind CSS', 'shadcn/ui', 'Flutter'
    ],
    backend: [
      'Prisma', 'MySQL', 'Dotnet', 'C#', 'PHP', 
      'Python', 'Java', 'SQL', 'Java'
    ],
    tools: [
      'Méthode Agile (Jira, Confluence)', 'POO', 'Autotask', 
      'Slack', 'Teams', 'PowerPoint', 'Word', 'Docker', 'CI/CD'
    ]
  }

  const softSkills = [
    'Esprit d\'équipe',
    'Capacité d\'adaptation',
    'Sens de l\'organisation',
    'Respect des consignes',
    'Rigoureux',
    "À l'écoute"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const SkillCategory: React.FC<{ title: string; skills: string[]; color: string }> = ({ 
    title, 
    skills, 
    color 
  }) => (
    <motion.div variants={itemVariants}>
      <Card className="glass-effect h-full">
        <CardContent className="p-6">
          <h3 className={`text-xl font-semibold mb-4 ${color}`}>{title}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="bg-primary/30 text-primary hover:bg-primary/40 transition-colors border border-primary/50"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold">
          Compétences
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          Un éventail de compétences techniques et humaines pour créer des solutions numériques exceptionnelles.
        </motion.p>
      </motion.div>

      {/* Technical Skills */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-center">
          Compétences Techniques
        </motion.h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <SkillCategory 
            title="Frontend" 
            skills={technicalSkills.frontend} 
            color="text-primary" 
          />
          <SkillCategory 
            title="Backend" 
            skills={technicalSkills.backend} 
            color="text-accent" 
          />
          <SkillCategory 
            title="Outils & Méthodologies" 
            skills={technicalSkills.tools} 
            color="text-primary" 
          />
        </div>
      </motion.div>

      {/* Soft Skills */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-center">
          Soft Skills
        </motion.h3>
        
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <Card className="glass-effect">
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center gap-4">
                {softSkills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="text-lg px-6 py-3 bg-accent/10 text-accent-foreground border-accent/30 hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Skills Visualization */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-center">
          Expertise par Domaine
        </motion.h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend Expertise */}
          <motion.div variants={itemVariants}>
            <Card className="glass-effect">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-4">Développement Frontend</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Next.js / React</span>
                    <div className="w-32 bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tailwind CSS</span>
                    <div className="w-32 bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>JavaScript</span>
                    <div className="w-32 bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Backend Expertise */}
          <motion.div variants={itemVariants}>
            <Card className="glass-effect">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-accent mb-4">Développement Backend</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Prisma / MySQL</span>
                    <div className="w-32 bg-secondary rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>C# / .NET</span>
                    <div className="w-32 bg-secondary rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Python / PHP</span>
                    <div className="w-32 bg-secondary rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
