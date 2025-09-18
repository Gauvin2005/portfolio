import React from 'react'
import { GitHubIcon, LinkedInIcon } from './CustomIcon'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2025 Gavin Rottet. Tous droits réservés.
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

          {/* Made with love */}
          <div className="text-sm text-muted-foreground">
            Réalisé avec ❤️ par Gavin Rottet
          </div>
        </div>
      </div>
    </footer>
  )
}
