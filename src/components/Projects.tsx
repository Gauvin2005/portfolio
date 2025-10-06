'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProjectCarousel } from './ProjectCarousel'
import { ImageModal } from './ImageModal'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const Projects: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showFormationProjects, setShowFormationProjects] = useState(false)
  const [showGroupeProjects, setShowGroupeProjects] = useState(false)

  const scrollToExperience = (anchor: string) => {
    const element = document.querySelector(anchor)
    if (element) {
      const headerOffset = 80 // Hauteur approximative de la navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Projets simplifiés pour la navigation croisée
  const simplifiedProjects = [
    {
      id: 1,
      title: 'Application de Gestion des Interventions Médicales',
      shortDescription: 'Application web moderne pour la gestion des interventions médicales d\'urgence.',
      image: '/intervention112.png',
      experienceAnchor: '#experience-crm',
      featured: true
    },
    {
      id: 2,
      title: 'Projet Backend .NET/C#',
      shortDescription: 'Développement backend avec POO et méthodologies agiles.',
      image: '/publipostage2.png',
      experienceAnchor: '#experience-abraxas',
      featured: false
    }
  ]

  // Projets de formation
  const formationProjects = [
    {
      id: 'formation-1',
      title: 'Projet HTML/CSS/JavaScript',
      description: 'Site web responsive, intégrant des animations et des effets visuels modernes.',
      technologies: ['HTML5', 'CSS3', 'PHP', 'JavaScript', 'MySQL', 'Bootstrap', 'PHPMyAdmin', 'API Rest', 'JWT'],
      images: ['/filRouge1.png']
    },
    {
      id: 'formation-2',
      title: 'Application PHP',
      description: 'Application web dynamique avec gestion de base de données MySQL et interface d\'administration.',
      technologies: ['PHP', 'MySQL', 'JavaScript'],
      images: ['https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop']
    }
  ]

  // Projets de groupe
  const groupeProjects = [
    {
      id: 'groupe-1',
      title: 'Projet Flutter',
      description: 'Application mobile cross-platform développée en équipe avec Flutter et Dart.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      images: ['https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop']
    },
    {
      id: 'groupe-2',
      title: 'Supervision Étudiant',
      description: 'Encadrement d\'un étudiant de première année dans ses projets de programmation.',
      technologies: ['Python', 'Java', 'SQL'],
      images: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop']
    }
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
          Projets Réalisés
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          Une sélection de projets qui démontrent mes compétences techniques et ma capacité à livrer des solutions innovantes.
        </motion.p>
        
        {/* Global Toggle Button */}
        <motion.div variants={itemVariants}>
          <Button
            onClick={() => setShowAllProjects(!showAllProjects)}
            variant="outline"
            className="neon-glow"
          >
            {showAllProjects ? 'Masquer tous les projets' : 'Voir tous mes projets'}
          </Button>
        </motion.div>
      </motion.div>

      {/* Projets Simplifiés (affichés par défaut) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {simplifiedProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="h-full">
              <Card className={`glass-effect h-full flex flex-col ${project.featured ? 'neon-glow' : ''}`}>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="space-y-4 flex flex-col h-full">
                    {/* Project Image */}
                    <div className="relative flex-shrink-0">
                      <ImageModal src={project.image} alt={project.title}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={300}
                          height={200}
                          className={`rounded-lg w-full h-48 ${project.id === 1 ? 'object-contain' : project.id === 2 ? 'object-contain' : 'object-cover'}`}
                        />
                      </ImageModal>
                    </div>
                    
                    {/* Project Info */}
                    <div className="space-y-3 flex flex-col flex-grow">
                      <div className="flex items-start space-x-3">
                        <h3 className="text-xl font-bold text-primary leading-tight">{project.title}</h3>
                        {project.featured && (
                          <Badge className="bg-primary/30 text-primary border border-primary/50 flex-shrink-0">
                            Projet Principal
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground flex-grow">{project.shortDescription}</p>
                      
                      {/* Link to Experience */}
                      <Button
                        onClick={() => scrollToExperience(project.experienceAnchor)}
                        variant="outline"
                        size="sm"
                        className="w-full mt-auto"
                      >
                        Voir l&apos;expérience détaillée
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Projets de Formation et Groupe */}
      {showAllProjects && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {/* Projets de Formation Individuels */}
          <motion.div variants={itemVariants}>
            <Card className="glass-effect">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-primary">Projets de Formation Individuels</h3>
                  <p className="text-muted-foreground">
                    Collection de projets réalisés durant ma formation, couvrant différents langages et technologies pour développer une expertise polyvalente.
                  </p>
                  
                  <Button
                    onClick={() => setShowFormationProjects(!showFormationProjects)}
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    {showFormationProjects ? 'Masquer les projets' : 'Voir mes projets'}
                  </Button>
                  
                  {showFormationProjects && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-8"
                    >
                      <ProjectCarousel 
                        projects={formationProjects} 
                        title="Mes Projets de Formation Individuels"
                      />
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Projets de Groupe */}
          <motion.div variants={itemVariants}>
            <Card className="glass-effect">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-primary">Projets de Formation en Groupe & Supervision</h3>
                  <p className="text-muted-foreground">
                    Projets collaboratifs et expérience de supervision d&apos;étudiants, démontrant mes compétences en leadership et en travail d&apos;équipe.
                  </p>
                  
                  <Button
                    onClick={() => setShowGroupeProjects(!showGroupeProjects)}
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    {showGroupeProjects ? 'Masquer les projets' : 'Voir mes projets'}
                  </Button>
                  
                  {showGroupeProjects && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-8"
                    >
                      <ProjectCarousel 
                        projects={groupeProjects} 
                        title="Mes Projets de Groupe en Formation"
                      />
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}