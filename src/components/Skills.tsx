'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const Skills: React.FC = () => {
  // Mapping des compétences vers leurs documentations officielles
  const skillDocumentation: Record<string, string> = {
    'Next.js': 'https://nextjs.org/docs',
    'React': 'https://react.dev/learn',
    'HTML': 'https://developer.mozilla.org/fr/docs/Web/HTML',
    'CSS': 'https://developer.mozilla.org/fr/docs/Web/CSS',
    'JavaScript (JS)': 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
    'Tailwind CSS': 'https://tailwindcss.com/docs',
    'shadcn/ui': 'https://ui.shadcn.com/docs',
    'Flutter': 'https://docs.flutter.dev',
    'MySQL': 'https://dev.mysql.com/doc',
    'Dotnet': 'https://learn.microsoft.com/en-us/dotnet',
    'C#': 'https://learn.microsoft.com/en-us/dotnet/csharp',
    'Python': 'https://docs.python.org/3',
    'Java': 'https://docs.oracle.com/en/java',
    'SQL': 'https://www.w3schools.com/sql',
    'PHP': 'https://www.php.net/docs.php',
    'Docker': 'https://docs.docker.com',
    'Git': 'https://git-scm.com/doc',
    'GitHub': 'https://docs.github.com',
    'GitLab': 'https://docs.gitlab.com',
    'Ubuntu': 'https://ubuntu.com/tutorials',
    'CI/CD': 'https://docs.github.com/en/actions/learn-github-actions',
    'Actions': 'https://docs.github.com/en/actions',
    'Pipelines': 'https://docs.gitlab.com/ee/ci/pipelines',
    'Runners': 'https://docs.gitlab.com/ee/ci/runners',
    // Méthodologies et concepts
    'POO': 'https://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_objet',
    'Méthode Agile': 'https://fr.wikipedia.org/wiki/M%C3%A9thode_agile',
    'Jira': 'https://www.atlassian.com/fr/software/jira',
    'Confluence': 'https://www.atlassian.com/fr/software/confluence',
    // Outils de communication
    'Slack': 'https://slack.com/intl/fr-fr/help',
    'Teams': 'https://support.microsoft.com/fr-fr/teams',
    // Suite Microsoft Office
    'PowerPoint': 'https://support.microsoft.com/fr-fr/powerpoint',
    'Word': 'https://support.microsoft.com/fr-fr/word',
    // Outils de développement
    'Cursor': 'https://cursor.sh/docs',
    'Claude': 'https://claude.ai',
    'ChatGPT': 'https://chat.openai.com',
    // Outils métier
    'Autotask': 'https://www.autotask.com/help'
  }

  const technicalSkills = {
    frontend: [
      'Next.js', 'React', 'HTML', 'CSS', 'JavaScript (JS)', 
      'Tailwind CSS', 'shadcn/ui', 'Flutter'
    ],
    backend: [
      'Next.js', 'MySQL', 'Dotnet', 'C#', 
      'Python', 'Java', 'SQL', 'PHP'
    ],
    tools: [
      'Méthode Agile (Jira, Confluence)', 'POO', 'Autotask', 
      'Slack', 'Teams', 'PowerPoint', 'Word', 'Docker',
      'Cursor', 'Claude', 'ChatGPT', 'Ubuntu', 'Git (GitHub, GitLab, CI/CD, Actions, Pipelines, Runners)'
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

  // Fonction pour extraire les compétences individuelles d'une chaîne complexe
  const extractSkills = (skillString: string): string[] => {
    // Si c'est une compétence simple, la retourner telle quelle
    if (skillDocumentation[skillString]) {
      return [skillString]
    }
    
    // Pour les compétences complexes comme "Git (GitHub, GitLab, CI/CD, Actions, Pipelines, Runners)"
    const match = skillString.match(/^(.+?)\s*\((.+)\)$/)
    if (match) {
      const [, mainSkill, subSkills] = match
      const subSkillsList = subSkills.split(',').map(s => s.trim())
      return [mainSkill, ...subSkillsList]
    }
    
    return [skillString]
  }

  // Fonction pour obtenir l'URL de documentation d'une compétence
  const getDocumentationUrl = (skill: string): string | null => {
    return skillDocumentation[skill] || null
  }

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
            {skills.map((skillString, index) => {
              const extractedSkills = extractSkills(skillString)
              return extractedSkills.map((skill, skillIndex) => {
                const documentationUrl = getDocumentationUrl(skill)
                const badgeKey = `${index}-${skillIndex}`
                
                if (documentationUrl) {
                  return (
                    <Link key={badgeKey} href={documentationUrl} target="_blank" rel="noopener noreferrer">
                      <Badge 
                        variant="secondary"
                        className="bg-primary/30 text-primary hover:bg-primary/40 transition-colors border border-primary/50 cursor-pointer hover:scale-105 transform"
                        title={`Documentation ${skill}`}
                      >
                        {skill}
                      </Badge>
                    </Link>
                  )
                }
                
                return (
                  <Badge 
                    key={badgeKey}
                    variant="secondary"
                    className="bg-primary/30 text-primary hover:bg-primary/40 transition-colors border border-primary/50"
                  >
                    {skill}
                  </Badge>
                )
              })
            })}
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
          Domaines préférés
        </motion.h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Frontend */}
          <motion.div variants={itemVariants}>
            <Card className="glass-effect group hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-4">Frontend</h4>
                <div className="space-y-2">
                  <Link 
                    href="https://nextjs.org/docs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors cursor-pointer block"
                  >
                    NextJS
                  </Link>
                  <Link 
                    href="https://ui.shadcn.com/docs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors cursor-pointer block"
                  >
                    ShadcnUI
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Backend */}
          <motion.div variants={itemVariants}>
            <Card className="glass-effect group hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-accent mb-4">Backend</h4>
                <div className="space-y-2">
                  <Link 
                    href="https://expressjs.com/en/4x/api.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm hover:text-accent transition-colors cursor-pointer block"
                  >
                    Express
                  </Link>
                  <Link 
                    href="https://docs.docker.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm hover:text-accent transition-colors cursor-pointer block"
                  >
                    Docker
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Base de données */}
          <motion.div variants={itemVariants}>
            <Card className="glass-effect group hover:border-secondary-foreground/50 transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-secondary-foreground mb-4">Base de données</h4>
                <div className="space-y-2">
                  <Link 
                    href="https://dev.mysql.com/doc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm hover:text-secondary-foreground transition-colors cursor-pointer block"
                  >
                    MySQL
                  </Link>
                  <Link 
                    href="https://www.prisma.io/docs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm hover:text-secondary-foreground transition-colors cursor-pointer block"
                  >
                    Prisma
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
