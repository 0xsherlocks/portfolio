'use client'

import { useState, useEffect } from 'react'

type NavigationProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function Navigation({ theme, onToggleTheme }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#vision', label: 'Vision' },
    { href: '#blog', label: 'Articles' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`nav-hud ${scrolled ? 'nav-hud-scrolled' : ''} ${menuOpen ? 'nav-hud-open' : ''}`}
      aria-label="Primary"
    >
      <div className="nav-container">
        <div className="brand">
          <span className="brand-text glitch" data-text="FORNEXT">
            FORNEXT
          </span>
          <div className="availability-pill" aria-live="polite">
            <span className="status-dot" aria-hidden="true" /> Available for missions
          </div>
        </div>

        <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`} role="menubar">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                className="nav-link"
                role="menuitem"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            id="theme-toggle"
            aria-label="Toggle theme"
            className="theme-toggle"
            onClick={onToggleTheme}
          >
            <span className="theme-icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
            <span className="theme-label">{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
          </button>
          <button
            className={`mobile-trigger ${menuOpen ? 'open' : ''}`}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}
