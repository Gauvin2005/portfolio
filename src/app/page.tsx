import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { CV } from '@/components/CV'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Section } from '@/components/Section'
import { SkipLink } from '@/components/SkipLink'
import { Toaster } from '@/components/ui/sonner'

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      <SkipLink />
      <Header />
      
      <main id="main-content">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <Section id="apropos" background="default">
          <About />
        </Section>
        
        {/* Skills Section */}
        <Section id="competences" background="gradient">
          <Skills />
        </Section>
        
        {/* Experience Section */}
        <Section id="experiences" background="default">
          <Experience />
        </Section>
        
        {/* Projects Section */}
        <Section id="projets" background="gradient">
          <Projects />
        </Section>
        
        {/* CV Section */}
        <Section id="cv" background="default">
          <CV />
        </Section>
        
        {/* Contact Section */}
        <Section id="contact" background="gradient">
          <Contact />
        </Section>
      </main>
      
      <Footer />
      <Toaster />
    </div>
  )
}
