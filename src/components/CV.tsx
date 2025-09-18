'use client'

import React, { useState, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DownloadIcon, UploadIcon, PrintIcon } from './CustomIcon'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

export const CV: React.FC = () => {
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [cvPreview, setCvPreview] = useState<string | null>('/Gavin_Rottet_CV.pdf')
  const [showCvInfo, setShowCvInfo] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === 'application/pdf') {
      setCvFile(file)
      
      // Create preview URL
      const url = URL.createObjectURL(file)
      setCvPreview(url)
      
      toast.success('CV mis à jour avec succès!')
    } else {
      toast.error('Veuillez sélectionner un fichier PDF valide.')
    }
  }

  const handleDownload = () => {
    if (cvFile) {
      const url = URL.createObjectURL(cvFile)
      const a = document.createElement('a')
      a.href = url
      a.download = cvFile.name
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } else {
      // Download default CV only if it exists
      const a = document.createElement('a')
      a.href = '/Gavin_Rottet_CV.pdf'
      a.download = 'Gavin_Rottet_CV.pdf'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }

  const handlePrint = () => {
    try {
      if (cvPreview) {
        // Create a new window for printing
        const printWindow = window.open(cvPreview, '_blank')
        if (printWindow) {
          printWindow.onload = () => {
            printWindow.print()
          }
        } else {
          // Fallback: try to print the iframe content
          const iframe = document.createElement('iframe')
          iframe.style.display = 'none'
          iframe.src = cvPreview
          document.body.appendChild(iframe)
          
          iframe.onload = () => {
            try {
              iframe.contentWindow?.print()
            } catch (error) {
              console.error('Print error:', error)
              toast.error('Impossible d\'imprimer directement. Le fichier PDF s\'ouvrira dans un nouvel onglet.')
              window.open(cvPreview, '_blank')
            }
            setTimeout(() => {
              document.body.removeChild(iframe)
            }, 1000)
          }
        }
      } else {
        // Print default CV
        window.open('/Gavin_Rottet_CV.pdf', '_blank')
      }
      toast.success('Impression lancée!')
    } catch (error) {
      console.error('Print error:', error)
      toast.error('Erreur lors de l\'impression. Le fichier PDF s\'ouvrira dans un nouvel onglet.')
      window.open(cvPreview || '/Gavin_Rottet_CV.pdf', '_blank')
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
        className="space-y-8"
      >
        {/* Action Buttons */}
        <motion.div variants={itemVariants}>
          <Card className="glass-effect">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <UploadIcon size={20} />
                  <span>Importer/Mettre à jour mon CV</span>
                </Button>
                
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
              
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
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
                {cvPreview ? (
                  <iframe
                    src={cvPreview}
                    className="w-full h-[600px] border border-border rounded-lg"
                    title="CV Preview"
                  />
                ) : (
                  <div className="w-full h-[600px] border border-border rounded-lg flex items-center justify-center bg-muted/20">
                    <div className="text-center space-y-4">
                      <div className="text-6xl text-muted-foreground">📄</div>
                      <p className="text-muted-foreground">
                        Aucun CV personnalisé chargé
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Le CV par défaut sera affiché lors du téléchargement
                      </p>
                    </div>
                  </div>
                )}
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
                      {cvFile ? new Date(cvFile.lastModified).toLocaleDateString() : 'CV par défaut'}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Format</h4>
                    <p className="text-sm text-muted-foreground">PDF (Portable Document Format)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Taille du fichier</h4>
                    <p className="text-sm text-muted-foreground">
                      {cvFile ? `${(cvFile.size / 1024 / 1024).toFixed(2)} MB` : 'Variable'}
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
