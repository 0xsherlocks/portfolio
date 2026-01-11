import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-bg">
      <Navigation />
      <Hero />
      
      {/* Placeholder sections for future migration */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <span className="text-accent-purple font-mono">[01]</span>
          <h2 className="text-4xl font-bold mt-4 gradient-text">ABOUT</h2>
          <p className="text-text-secondary mt-4">Section to be migrated...</p>
        </div>
      </section>

      <section id="expertise" className="min-h-screen flex items-center justify-center px-4 py-20 bg-secondary-bg/30">
        <div className="text-center">
          <span className="text-accent-purple font-mono">[02]</span>
          <h2 className="text-4xl font-bold mt-4 gradient-text">EXPERTISE</h2>
          <p className="text-text-secondary mt-4">Section to be migrated...</p>
        </div>
      </section>

      <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <span className="text-accent-purple font-mono">[03]</span>
          <h2 className="text-4xl font-bold mt-4 gradient-text">EXPERIENCE</h2>
          <p className="text-text-secondary mt-4">Section to be migrated...</p>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20 bg-secondary-bg/30">
        <div className="text-center">
          <span className="text-accent-purple font-mono">[04]</span>
          <h2 className="text-4xl font-bold mt-4 gradient-text">PROJECTS</h2>
          <p className="text-text-secondary mt-4">Section to be migrated...</p>
        </div>
      </section>

      <section id="certifications" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <span className="text-accent-purple font-mono">[05]</span>
          <h2 className="text-4xl font-bold mt-4 gradient-text">CERTIFICATIONS</h2>
          <p className="text-text-secondary mt-4">Section to be migrated...</p>
        </div>
      </section>

      <section id="vision" className="min-h-screen flex items-center justify-center px-4 py-20 bg-secondary-bg/30">
        <div className="text-center">
          <span className="text-accent-purple font-mono">[06]</span>
          <h2 className="text-4xl font-bold mt-4 gradient-text">WHAT I'M BUILDING</h2>
          <p className="text-text-secondary mt-4">Section to be migrated...</p>
        </div>
      </section>

      <CallToAction />

      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <span className="text-accent-purple font-mono">[07]</span>
          <h2 className="text-4xl font-bold mt-4 gradient-text">CONTACT</h2>
          <p className="text-text-secondary mt-4">Section to be migrated...</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-secondary-bg border-t border-glass-border">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold gradient-text mb-2">FORNEXT</div>
          <p className="text-text-secondary text-sm mb-4">Cyber-Intelligence Excellence</p>
          <div className="flex justify-center gap-4 text-sm text-text-secondary mb-4">
            <a href="/privacy-policy.html" className="hover:text-accent-cyan transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="/terms-of-service.html" className="hover:text-accent-cyan transition-colors">Terms of Service</a>
          </div>
          <p className="text-text-secondary text-sm">
            © 2025 Gulshan Kumar. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            System Status: <span className="text-accent-green font-bold">ONLINE</span>
          </p>
        </div>
      </footer>
    </main>
  )
}
