'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically import Spline to avoid SSR issues
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse text-accent-cyan">Loading 3D Scene...</div>
    </div>
  ),
})

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-8 lg:px-16 py-20">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-gradient-to-br from-primary-bg via-secondary-bg to-primary-bg opacity-50"></div>
        <div className="absolute w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl bottom-20 -right-20"></div>
      </div>

      <div className="container mx-auto max-w-7xl z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 font-mono text-sm md:text-base">
              <span className="text-accent-purple">[</span>
              <span className="text-accent-cyan tracking-wider">FORENSICS x AI</span>
              <span className="text-accent-purple">]</span>
            </div>

            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="block text-text-primary">GULSHAN KUMAR</span>
                <span className="block gradient-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2">
                  CYBER-INTELLIGENCE
                </span>
                <span className="block text-text-primary text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2">
                  PRACTITIONER
                </span>
              </h1>

              <p className="text-lg md:text-xl text-text-secondary font-medium">
                Forensic Science × AI-Driven Cyber Intelligence
              </p>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">
              I build automation tools & practical forensic systems — combining forensic science 
              expertise with AI-driven automation, n8n workflows, and blockchain technology to 
              solve real-world investigative challenges.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 py-6">
              <div className="text-center space-y-1">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-cyan">3+</div>
                <div className="text-xs md:text-sm text-text-secondary uppercase tracking-wide">Internships Completed</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-cyan">6+</div>
                <div className="text-xs md:text-sm text-text-secondary uppercase tracking-wide">Active Projects</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-cyan">7+</div>
                <div className="text-xs md:text-sm text-text-secondary uppercase tracking-wide">Certifications</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-accent-cyan text-primary-bg font-bold text-center uppercase tracking-wide rounded-md hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all duration-300 hover:-translate-y-1"
              >
                Initialize Contact
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-accent-cyan text-accent-cyan font-bold text-center uppercase tracking-wide rounded-md hover:bg-accent-cyan/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300"
              >
                View Operations
              </a>
            </div>
          </div>

          {/* Right side - Spline 3D */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 rounded-lg">
                <div className="text-center">
                  <div className="animate-pulse text-accent-cyan text-xl mb-2">Loading 3D Scene...</div>
                  <div className="text-text-secondary text-sm">Initializing Spline Animation</div>
                </div>
              </div>
            }>
              <div className="w-full h-full">
                <Spline 
                  scene="https://prod.spline.design/nexbotrobotcharacterconcept-4gEtZVWFlZ2pabpyeWPnauOb/scene.splinecode"
                  onLoad={() => console.log('Spline scene loaded')}
                  onError={(error) => console.error('Spline error:', error)}
                />
              </div>
            </Suspense>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-text-secondary tracking-widest">SCROLL TO EXPLORE</span>
        <div className="w-0.5 h-8 bg-accent-cyan"></div>
      </div>
    </section>
  )
}
