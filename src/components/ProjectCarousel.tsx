'use client'

import React, { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ImageModal } from './ImageModal'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  images: string[]
  githubUrl?: string
  demoUrl?: string
}

interface ProjectCarouselProps {
  projects: Project[]
  title: string
  className?: string
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ 
  projects, 
  title, 
  className = '' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || projects.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  if (projects.length === 0) return null

  const currentProject = projects[currentIndex]

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
        <div className="flex justify-center space-x-2 mb-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-primary' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 h-[600px]"
          >
            {/* Project Images */}
            <div className="space-y-4">
              <div className="relative">
                <ImageModal src={currentProject.images[0]} alt={currentProject.title}>
                  <Image
                    src={currentProject.images[0]}
                    alt={currentProject.title}
                    width={500}
                    height={400}
                    className="rounded-lg object-contain w-full h-full bg-muted/20"
                  />
                </ImageModal>
              </div>
              
              {/* Additional Images */}
              {currentProject.images.length > 1 && (
                <div className="grid grid-cols-2 gap-3">
                  {currentProject.images.slice(1, 3).map((image, idx) => (
                    <ImageModal key={idx} src={image} alt={`${currentProject.title} - Image ${idx + 2}`}>
                      <Image
                        src={image}
                        alt={`${currentProject.title} - Image ${idx + 2}`}
                        width={250}
                        height={180}
                        className="rounded-lg object-contain w-full h-full bg-muted/20"
                      />
                    </ImageModal>
                  ))}
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="space-y-6 flex flex-col h-full">
              <div className="flex-grow">
                <h4 className="text-xl font-bold text-primary mb-3">{currentProject.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{currentProject.description}</p>
              </div>

              {/* Technologies */}
              <div className="flex-shrink-0">
                <h5 className="text-lg font-semibold text-accent mb-3">Technologies Utilisées</h5>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, idx) => (
                    <Badge 
                      key={idx}
                      variant="secondary"
                      className="bg-accent/20 text-accent-foreground border border-accent/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mt-auto">
                {currentProject.githubUrl && (
                  <Button variant="outline" size="sm">
                    Voir le Code
                  </Button>
                )}
                {currentProject.demoUrl && (
                  <Button size="sm" className="neon-glow">
                    Voir la Démo
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {projects.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur-sm"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur-sm"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
    </div>
  )
}


