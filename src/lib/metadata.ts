import { Metadata } from 'next'

export const siteConfig = {
  name: 'Gavin Rottet - Développeur Full-Stack',
  description: 'Développeur web full-stack passionné, spécialisé en Next.js et Tailwind CSS. Créateur de solutions numériques modernes et performantes.',
  url: 'https://gavinrottet.dev',
  ogImage: '/gavin.png',
  links: {
    twitter: 'https://twitter.com/gavinrottet',
    github: 'https://github.com/Gauvin2005',
    linkedin: 'https://www.linkedin.com/in/gavin-rottet-b5250a2bb',
  },
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'développeur web',
    'full-stack',
    'Next.js',
    'React',
    'MySQL',
    'Tailwind CSS',
    'freelance',
    'portfolio',
    'développement web',
    'applications web',
    'sites web',
    'programmation',
    'JavaScript',
    'TypeScript',
    'CSS',
    'HTML'
  ],
  authors: [
    {
      name: 'Gavin Rottet',
      url: siteConfig.url,
    },
  ],
  creator: 'Gavin Rottet',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@gavinrottet',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}
