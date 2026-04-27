import React from 'react'
import { AnimatedUnderline } from './AnimatedUnderline'
import { GitHubIcon, LinkedInIcon } from './CustomIcon'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2026 <AnimatedUnderline>Gavin Rottet</AnimatedUnderline>. Tous droits réservés.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
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

          {/* Made with love + last update */}
          <div className="flex flex-col items-center md:items-end gap-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              Réalisé avec{' '}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {' '}par <AnimatedUnderline>Gavin Rottet</AnimatedUnderline>
            </span>
            <span className="text-xs text-muted-foreground/60">Dernière mise à jour : mai 2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
