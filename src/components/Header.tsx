'use client'

import React, { useState, useEffect, startTransition } from 'react'
import { Button } from '@/components/ui/button'
import { GitHubIcon, LinkedInIcon, MenuIcon, XIcon } from './CustomIcon'
import { AnimatedUnderline } from './AnimatedUnderline'
import { CalModalCustom } from './CalModalCustom'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'

const navigation = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'À Propos', href: '#apropos' },
  { name: 'Compétences', href: '#competences' },
  { name: 'Services', href: '#services' },
  { name: 'Expériences', href: '#experiences' },
  { name: 'Projets', href: '#projets' },
  { name: 'Contact', href: '#contact' },
]

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    startTransition(() => setIsMounted(true))

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

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
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isMounted && isScrolled
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
            <AnimatedUnderline className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Gavin Rottet
            </AnimatedUnderline>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  isMounted && activeSection === item.href.slice(1)
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

          {/* Social Links, Theme Toggle & CTA */}
          <div className="flex items-center space-x-3">
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

            {/* Dark/Light toggle */}
            {isMounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                aria-label="Changer le thème"
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
            )}

            <div className="hidden sm:block">
              <CalModalCustom
                triggerText="Planifier un appel"
                triggerClassName="text-sm px-3 py-1.5"
              />
            </div>
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
                    isMounted && activeSection === item.href.slice(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary'
                  )}
                >
                  {item.name}
                </button>
              ))}

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
                {isMounted && (
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                    aria-label="Changer le thème"
                  >
                    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                  </button>
                )}
              </div>

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
