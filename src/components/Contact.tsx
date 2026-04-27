'use client'

import React, { useCallback } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { EmailIcon, PhoneIcon, CalendarIcon } from './CustomIcon'
import { CalModalCustom } from './CalModalCustom'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

export const Contact: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const scrollToProjects = () => {
    const element = document.querySelector('#projets')
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText('gavinrottet2005@gmail.com').then(() => {
      toast.success('Email copié dans le presse-papiers !')
    })
  }, [])

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center space-y-4 sm:space-y-6 relative z-10"
      >
        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Contact
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4"
        >
          Prêt à collaborer sur votre prochain projet ? Contactez-moi directement ou planifions un appel pour discuter de vos besoins.
        </motion.p>

        {/* Note 24h */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-primary/5 border border-primary/20 rounded-full px-4 py-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
              <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span>
              Je réponds généralement sous 24h. Pour les demandes urgentes, contactez-moi directement via{' '}
              <a
                href="https://www.linkedin.com/in/gavin-rottet-b5250a2bb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                LinkedIn
              </a>
              {' '}ou par email.
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Contact Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-0"
      >
        {/* Left Column - Contact Information */}
        <motion.div variants={itemVariants} className="space-y-6">
          <Card className="glass-effect rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-8">Informations de Contact</h3>

              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-full bg-primary/20">
                    <EmailIcon size={24} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-lg">Email</p>
                    <p className="text-muted-foreground text-sm truncate">gavinrottet2005@gmail.com</p>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="flex-shrink-0 text-xs text-primary/70 hover:text-primary border border-primary/30 hover:border-primary/60 px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-primary/10"
                    title="Copier l'adresse email"
                  >
                    Copier
                  </button>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-full bg-primary/20">
                    <PhoneIcon size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Téléphone</p>
                    <p className="text-muted-foreground">0768267956</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-full bg-primary/20">
                    <CalendarIcon size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Disponibilité</p>
                    <p className="text-muted-foreground">Lun-Ven, 9h-18h</p>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column - Action Buttons */}
        <motion.div variants={itemVariants} className="space-y-6">
          <Card className="glass-effect rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">
                Prendre Contact
              </h3>

              <div className="space-y-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="w-full h-16 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 neon-glow"
                    onClick={() => window.open('mailto:gavinrottet2005@gmail.com')}
                    aria-label="Envoyer un email direct"
                  >
                    <EmailIcon size={24} className="mr-3" />
                    Envoyer un Email Direct
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <CalModalCustom
                    triggerText="Planifier un Appel (30 min)"
                    triggerVariant="outline"
                    triggerClassName="w-full h-16 text-lg font-semibold border-2 border-primary/50 bg-primary/10 hover:bg-primary/20 text-primary hover:text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    aria-label="Planifier un appel de 30 minutes"
                  />
                </motion.div>

                <div className="pt-6 border-t border-border/50">
                  <h4 className="text-lg font-semibold text-accent mb-4 text-center">
                    Autres Options
                  </h4>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="ghost"
                      className="w-full justify-center py-4 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300"
                      onClick={() => window.open('tel:0768267956')}
                      aria-label="Appeler directement"
                    >
                      <PhoneIcon size={20} className="mr-3" />
                      Appeler Directement
                    </Button>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.div variants={itemVariants}>
          <Card className="glass-effect rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6">
                Prêt à Transformer Vos Idées ?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Que vous ayez besoin d&apos;une application web complète, d&apos;une refonte de votre site existant,
                ou d&apos;un conseil technique, je suis là pour vous accompagner dans votre projet numérique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <CalModalCustom
                    triggerText="Planifier un Appel Gratuit"
                    triggerVariant="default"
                    triggerClassName="px-8 py-4 text-lg font-semibold neon-glow rounded-2xl"
                    aria-label="Planifier un appel gratuit"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 hover:bg-primary/10 gradient-shift"
                    onClick={scrollToProjects}
                    aria-label="Voir les projets réalisés"
                  >
                    Voir Mes Projets
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
