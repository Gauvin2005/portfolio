'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

const MonitorIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <path d="m9 8 2 2 4-4" />
  </svg>
)

const RefreshIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </svg>
)

const SparklesIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4M22 5h-4" />
    <path d="M4 17v2M5 18H3" />
  </svg>
)

const ArchitectureIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
  </svg>
)

const services = [
  {
    Icon: MonitorIcon,
    title: 'Application Web Sur Mesure',
    description:
      "De l'idée à la mise en production — conception, développement et déploiement d'applications web modernes avec Next.js, TypeScript et Tailwind CSS.",
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    color: 'text-primary',
    border: 'hover:border-primary/50',
  },
  {
    Icon: RefreshIcon,
    title: 'Refonte & Amélioration',
    description:
      'Votre site est lent, vieillissant ou difficile à maintenir ? Je modernise votre stack, améliore les performances et rafraîchis le design.',
    tags: ['Migration', 'Performance', 'UX'],
    color: 'text-accent',
    border: 'hover:border-accent/50',
  },
  {
    Icon: SparklesIcon,
    title: 'Intégration IA',
    description:
      "Ajout de fonctionnalités intelligentes à votre application — chatbot, génération de contenu, analyse de données ou automatisation de workflows.",
    tags: ['LLM', 'API IA', 'Automatisation'],
    color: 'text-purple-400',
    border: 'hover:border-purple-400/50',
  },
  {
    Icon: ArchitectureIcon,
    title: 'Conseil & Architecture',
    description:
      "Audit technique, choix de stack, architecture système ou accompagnement sur un projet complexe — je vous aide à poser les bonnes bases.",
    tags: ['Audit', 'Architecture', 'Conseil'],
    color: 'text-orange-400',
    border: 'hover:border-orange-400/50',
  },
]

export const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  }

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
          Ce que je peux faire pour toi
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          Développeur full-stack et fondateur de{' '}
          <a
            href="https://nuvoracode.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors font-semibold underline decoration-primary/40"
          >
            Nuvoracode
          </a>
          , j&apos;interviens sur tout le cycle de vie d&apos;un projet web.
        </motion.p>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={itemVariants}>
            <Card
              className={`glass-effect h-full transition-all duration-300 border ${service.border} group`}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <span className={`flex-shrink-0 mt-0.5 ${service.color}`}>
                    <service.Icon />
                  </span>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${service.color}`}>{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
