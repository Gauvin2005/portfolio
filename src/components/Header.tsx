'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GitHubIcon, LinkedInIcon, MenuIcon, XIcon } from './CustomIcon'
import { CalModalCustom } from './CalModalCustom'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'À Propos', href: '#apropos' },
  { name: 'Compétences', href: '#competences' },
  { name: 'Expériences', href: '#experiences' },
  { name: 'Projets', href: '#projets' },
  { name: 'Mon CV', href: '#cv' },
  { name: 'Contact', href: '#contact' },
]

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navigation.map(nav => nav.href.slice(1))
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false) // Close mobile menu after navigation
    }
  }

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'glass-effect border-b border-border/50' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('#accueil')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Gavin Rottet
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  activeSection === item.href.slice(1)
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </Button>

          {/* Social Links & CTA */}
          <div className="flex items-center space-x-4">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href="https://github.com/Gauvin2005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/gavin-rottet-b5250a2bb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <LinkedInIcon size={20} />
              </a>
            </div>

            {/* CTA Button */}
            <CalModalCustom />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'text-left py-2 px-4 rounded-lg transition-colors hover:bg-primary/10',
                    activeSection === item.href.slice(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary'
                  )}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border">
                <a
                  href="https://github.com/Gauvin2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <GitHubIcon size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gavin-rottet-b5250a2bb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <LinkedInIcon size={20} />
                </a>
              </div>
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-border">
                <CalModalCustom 
                  triggerText="Planifier un appel"
                  triggerClassName="w-full"
                />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
