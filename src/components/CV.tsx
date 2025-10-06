'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DownloadIcon, PrintIcon } from './CustomIcon'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { getGithubAssetUrl } from '@/lib/githubAssets'

export const CV: React.FC = () => {
  const [showCvInfo, setShowCvInfo] = useState(false)

  const handleDownload = () => {
    const a = document.createElement('a')
    a.href = getGithubAssetUrl('cv')
    a.download = 'Gavin_Rottet_CV.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const handlePrint = () => {
    try {
      // Print default CV
      window.open(getGithubAssetUrl('cv'), '_blank')
      toast.success('Impression lancée!')
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Print error:', error)
      toast.error('Erreur lors de l\'impression. Le fichier PDF s\'ouvrira dans un nouvel onglet.')
      window.open(getGithubAssetUrl('cv'), '_blank')
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
    <div className="space-y-12 relative">
      {/* Animated Background Elements - Document/Tech Style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Document-like shapes */}
        <motion.div
          className="absolute top-24 left-20 w-16 h-20 bg-gradient-to-b from-slate-400/15 to-gray-400/15 rounded-sm"
          animate={{
            rotate: [0, 5, -5, 0],
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-24 w-12 h-16 bg-gradient-to-b from-violet-400/20 to-purple-400/20 rounded-sm"
          animate={{
            rotate: [0, -8, 8, 0],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Code brackets */}
        <motion.div
          className="absolute bottom-32 left-16 text-4xl font-bold text-lime-400/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          {'{'}
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-16 text-4xl font-bold text-lime-400/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          {'}'}
        </motion.div>
        
        {/* Floating icons */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-6 h-6 bg-gradient-to-r from-sky-400/25 to-cyan-400/25 rounded-full flex items-center justify-center"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 180, 360],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <span className="text-xs text-sky-400/60">📄</span>
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-gradient-to-r from-orange-400/25 to-red-400/25 rounded-full flex items-center justify-center"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <span className="text-sm text-orange-400/60">💼</span>
        </motion.div>
        
        {/* Data flow lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-36 h-0.5 bg-gradient-to-r from-transparent via-slate-400/50 to-transparent"
          animate={{
            x: [-150, 150],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-0 w-28 h-0.5 bg-gradient-to-l from-transparent via-violet-400/50 to-transparent"
          animate={{
            x: [150, -150],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />
        
        {/* Corner decorations */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-lime-400/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-sky-400/20"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center space-y-6 relative z-10"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold">
          Mon CV
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          Consultez, téléchargez ou imprimez mon CV professionnel. Vous pouvez également le mettre à jour avec la dernière version.
        </motion.p>
      </motion.div>

      {/* CV Management */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8 relative z-10"
      >
        {/* Action Buttons */}
        <motion.div variants={itemVariants}>
          <Card className="glass-effect">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleDownload}
                  className="flex items-center space-x-2 neon-glow"
                >
                  <DownloadIcon size={20} />
                  <span>Télécharger mon CV (PDF)</span>
                </Button>
                
                <Button
                  onClick={handlePrint}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <PrintIcon size={20} />
                  <span>Imprimer mon CV</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CV Preview */}
        <motion.div variants={itemVariants}>
          <Card className="glass-effect">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                Aperçu du CV
              </h3>
              
              <div className="relative">
                <iframe
                  src={getGithubAssetUrl('cv')}
                  className="w-full h-[600px] border border-border rounded-lg"
                  title="CV Preview"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CV Information */}
        <motion.div variants={itemVariants}>
          <Card className="glass-effect">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-primary">
                  Informations sur le CV
                </h3>
                <Button
                  onClick={() => setShowCvInfo(!showCvInfo)}
                  variant="outline"
                  size="sm"
                >
                  {showCvInfo ? 'Masquer' : 'Afficher'} les détails
                </Button>
              </div>
              
              {showCvInfo && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Dernière mise à jour</h4>
                    <p className="text-sm text-muted-foreground">
                      CV par défaut
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Format</h4>
                    <p className="text-sm text-muted-foreground">PDF (Portable Document Format)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Taille du fichier</h4>
                    <p className="text-sm text-muted-foreground">
                      Variable
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Contenu inclus</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Informations personnelles</li>
                      <li>• Expériences professionnelles</li>
                      <li>• Compétences techniques</li>
                      <li>• Projets réalisés</li>
                      <li>• Formation et certifications</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Langues disponibles</h4>
                    <p className="text-sm text-muted-foreground">Français (principal)</p>
                  </div>
                </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
