'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EmailIcon, PhoneIcon, CalendarIcon } from './CustomIcon'
import { CalModalCustom } from './CalModalCustom'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('Message envoyé avec succès! Je vous répondrai dans les plus brefs délais.')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      toast.error('Erreur lors de l&apos;envoi du message. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
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
          Contact
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          Prêt à collaborer sur votre prochain projet ? Planifions un appel pour discuter de vos besoins et voir comment je peux vous aider.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-8"
      >
        {/* Contact Information */}
        <motion.div variants={itemVariants} className="space-y-6">
          <Card className="glass-effect">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-6">Informations de Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <EmailIcon size={20} className="text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">gavinrottet2005@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <PhoneIcon size={20} className="text-primary" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-sm text-muted-foreground">0768267956</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <CalendarIcon size={20} className="text-primary" />
                  <div>
                    <p className="font-medium">Disponibilité</p>
                    <p className="text-sm text-muted-foreground">Lun-Ven, 9h-18h</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Contact Form */}
          <Card className="glass-effect">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-6">Message Rapide</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nom</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet ou votre demande..."
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    rows={4}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full neon-glow"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Cal.com Integration */}
        <motion.div variants={itemVariants}>
          <Card className="glass-effect h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                Planifier un Appel
              </h3>
              
              <div className="text-center space-y-4 mb-6">
                <p className="text-muted-foreground">
                  Choisissez un créneau qui vous convient pour discuter de votre projet.
                </p>
                <p className="text-sm text-muted-foreground">
                  Les appels durent généralement 30 minutes et sont gratuits.
                </p>
              </div>

              {/* Cal.com Modal */}
              <CalModalCustom 
                triggerText="Planifier un appel (30 min)"
                triggerVariant="outline"
                triggerClassName="w-full bg-primary/10 hover:bg-primary/20 border-primary/50 text-primary hover:text-primary-foreground transition-all duration-300"
              />

              {/* Alternative Contact Methods */}
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="text-lg font-semibold text-accent mb-4 text-center">
                  Autres Moyens de Contact
                </h4>
                
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.open('mailto:gavinrottet2005@gmail.com')}
                  >
                    <EmailIcon size={20} className="mr-3" />
                    Envoyer un Email Direct
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.open('tel:0768267956')}
                  >
                    <PhoneIcon size={20} className="mr-3" />
                    Appeler Directement
                  </Button>
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
          <Card className="glass-effect">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Prêt à Transformer Vos Idées ?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Que vous ayez besoin d&apos;une application web complète, d&apos;une refonte de votre site existant, 
                ou d&apos;un conseil technique, je suis là pour vous accompagner dans votre projet numérique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="neon-glow">
                  Planifier un Appel Gratuit
                </Button>
                <Button size="lg" variant="outline">
                  Voir Mes Projets
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
