'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="hero-visual-skeleton">
      <span className="pulse-dot" />
      <p>Booting 3D intelligence…</p>
    </div>
  ),
})

export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-3d-bg" aria-hidden="true">
        <div className="grid-3d" />
        <div className="particles" />
        <div className="floating-orb orb-cyan" />
        <div className="floating-orb orb-purple" />
      </div>

      <div className="hero-content">
        <div className="hero-tag">
          <span className="tag-bracket">[</span>
          <span className="tag-text">FORENSICS x AI</span>
          <span className="tag-bracket">]</span>
        </div>

        <div className="hero-mesh glass-panel">
          <div className="hero-text">
            <h1 id="hero-title" className="hero-title">
              <span className="title-line">GULSHAN KUMAR</span>
              <span className="title-line glitch" data-text="CYBER-INTELLIGENCE">
                CYBER-INTELLIGENCE
              </span>
              <span className="title-line">PRACTITIONER</span>
            </h1>
            <p className="hero-subtitle">Forensic Science × AI-Driven Cyber Intelligence</p>
            <p className="hero-description">
              I build automation tools & practical forensic systems — combining forensic science expertise with AI-driven
              automation, n8n workflows, and blockchain technology to solve real-world investigative challenges.
            </p>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value" data-target="3">
                0
              </div>
              <div className="stat-label">Internships Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-value" data-target="6">
                0
              </div>
              <div className="stat-label">Active Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-value" data-target="7">
                0
              </div>
              <div className="stat-label">Certifications</div>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#contact" className="cta-button primary">
              Initialize Contact
            </a>
            <a href="#projects" className="cta-button secondary">
              View Operations
            </a>
          </div>
        </div>

        <div className="hero-visual glass-panel" aria-label="3D forensic assistant">
          <Suspense
            fallback={
              <div className="hero-visual-skeleton">
                <span className="pulse-dot" />
                <p>Booting 3D intelligence…</p>
              </div>
            }
          >
            <div className="spline-shell">
              <Spline scene="https://prod.spline.design/nexbotrobotcharacterconcept-4gEtZVWFlZ2pabpyeWPnauOb/scene.splinecode" />
            </div>
          </Suspense>
          <div className="floating-badges">
            <div className="floating-chip">AI Automation</div>
            <div className="floating-chip">OSINT</div>
            <div className="floating-chip">Blockchain</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  )
}
