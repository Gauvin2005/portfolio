import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Services } from '@/components/Services'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Section } from '@/components/Section'
import { SkipLink } from '@/components/SkipLink'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Toaster } from '@/components/ui/sonner'

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      <SkipLink />
      <Header />

      <main id="main-content">
        <Hero />

        <Section id="apropos" background="default">
          <About />
        </Section>

        <Section id="competences" background="gradient">
          <Skills />
        </Section>

        <Section id="services" background="default">
          <Services />
        </Section>

        <Section id="experiences" background="gradient">
          <Experience />
        </Section>

        <Section id="projets" background="default">
          <Projects />
        </Section>

        <Section id="contact" background="gradient">
          <Contact />
        </Section>
      </main>

      <Footer />
      <Toaster />
      <ScrollToTop />
    </div>
  )
}
