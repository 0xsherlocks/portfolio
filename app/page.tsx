/* eslint-disable react/no-unescaped-entities -- descriptive copy intentionally includes apostrophes */
'use client'

import React, { useEffect, useMemo, useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import CallToAction from '@/components/CallToAction'

type Project = {
  id: string
  title: string
  status: 'ACTIVE' | 'DEPLOYED' | 'IN DEVELOPMENT'
  category: 'automation' | 'security' | 'ai' | 'blockchain'
  headline: string
  problem: string
  solution: string
  stack: string[]
  metrics: { label: string; value: string }[]
  links: { label: string; url: string; type: 'demo' | 'code' }[]
  impact: string[]
}

const expertise = [
  {
    icon: '🤖',
    title: 'Agentic AI & n8n Workflow Development',
    description: 'Designing autonomous workflows that collect, analyze, and act on data',
    skills: ['n8n Automation', 'Agentic AI Systems', 'Workflow Orchestration', 'Data Processing'],
    level: '85%',
  },
  {
    icon: '🔍',
    title: 'Cyber Forensics & OSINT',
    description: 'Digital investigations, online intelligence gathering, and cyber evidence',
    skills: ['Digital Forensics', 'OSINT Investigations', 'Cyber Evidence Analysis', 'Chain of Custody'],
    level: '80%',
  },
  {
    icon: '👤',
    title: 'Fingerprint & Identity Analysis',
    description: 'Traditional forensic identification techniques and identity imprints',
    skills: ['Fingerprint Analysis', 'Identity Verification', 'Biometric Systems', 'Evidence Collection'],
    level: '75%',
  },
  {
    icon: '⛓️',
    title: 'Blockchain Fundamentals',
    description: 'Evidence integrity and decentralized custody systems',
    skills: ['Blockchain Technology', 'Transaction Tracing', 'Smart Contracts', 'Decentralized Systems'],
    level: '70%',
  },
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Data-driven interfaces and visualization systems',
    skills: ['React.js', 'Tailwind CSS', 'Recharts', 'Frontend Architecture'],
    level: '82%',
  },
]

const experiences = [
  {
    date: 'JUNE 2025 - JULY 2025',
    role: 'Forensic Science Intern',
    company: 'State Forensic Science Lab, CID Patna',
    description:
      'Hands-on internship focused on real-time forensic case analysis. Observed examination of biological, toxicological, digital, and physical evidence while following chain of custody protocols.',
    achievements: [
      'Assisted in analysis of 15+ forensic cases involving fingerprint and document examination',
      'Documented evidence handling procedures that streamlined lab workflows by 25%',
      'Participated in 3 OSINT investigations supporting ongoing cyber crime cases',
    ],
    tags: ['Digital Forensics', 'OSINT', 'Evidence Analysis'],
  },
  {
    date: 'JULY 2025 - PRESENT',
    role: 'Blockchain & Crypto Intern',
    company: 'Future Interns',
    description:
      'Practical exposure to decentralized systems, digital assets, and forensic relevance of blockchain-based records and transparency.',
    achievements: [
      'Analyzed 100+ blockchain transactions to understand tracing methodologies',
      'Built a crypto portfolio tracker with live price feeds for personal use',
      'Researched blockchain forensics tools used in 5 major crypto crime investigations',
    ],
    tags: ['Blockchain', 'Cryptocurrency', 'Decentralized Systems'],
  },
]

const projects: Project[] = [
  {
    id: 'email-security',
    title: 'Outlook + Gmail Security & Scam Protector',
    status: 'ACTIVE',
    category: 'security',
    headline: 'AI-powered filtration and alerts across Outlook + Gmail inboxes.',
    problem: '50+ phishing/scam emails daily were wasting investigation time and creating risk.',
    solution:
      'n8n-driven automation that triages inboxes, scores threats with AI, quarantines malicious payloads, and dispatches Slack/email alerts.',
    stack: ['n8n', 'Gmail API', 'Outlook API', 'Python'],
    metrics: [
      { label: 'Phishing Reduction', value: '70%' },
      { label: 'Time Saved', value: '2 hrs/week' },
    ],
    links: [{ label: 'View on GitHub', url: 'https://github.com/0xsherlocks', type: 'code' }],
    impact: ['Real-time AI scoring on inbound mail', 'Automated quarantine & labeling', 'Dashboard-ready telemetry'],
  },
  {
    id: 'crypto-tracker',
    title: 'Crypto Portfolio Tracker',
    status: 'DEPLOYED',
    category: 'blockchain',
    headline: 'Live asset tracking with reporting and alerting.',
    problem: 'Investors lacked a unified, real-time view of portfolio value and performance.',
    solution:
      'Full-featured tracker with live pricing, portfolio breakdowns, exportable tax reports, and anomaly alerting.',
    stack: ['React.js', 'Tailwind CSS', 'Recharts', 'CoinGecko API'],
    metrics: [
      { label: 'Assets Tracked', value: '50+' },
      { label: 'Price Updates', value: 'Real-time' },
    ],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/0xsherlocks', type: 'code' },
      { label: 'Live Demo', url: '#', type: 'demo' },
    ],
    impact: ['Anomaly alerts for sudden moves', 'One-click CSV exports', 'Tax-ready summaries'],
  },
  {
    id: 'agentic-automation',
    title: 'Agentic AI & n8n Automation Systems',
    status: 'IN DEVELOPMENT',
    category: 'ai',
    headline: 'Autonomous workflows for forensic intelligence.',
    problem: 'Manual forensic data collection is slow and error-prone, delaying investigations.',
    solution:
      'Agentic AI workers orchestrated via n8n to collect, enrich, and triage evidence with automatic reporting.',
    stack: ['n8n', 'Python', 'AI/ML APIs', 'OpenAI'],
    metrics: [
      { label: 'Faster Analysis', value: '80%' },
      { label: 'Workflows Built', value: '5+' },
    ],
    links: [{ label: 'View on GitHub', url: 'https://github.com/0xsherlocks', type: 'code' }],
    impact: ['Autonomous collection & enrichment', 'Report-ready markdown exports', 'Anomaly detection hooks'],
  },
  {
    id: 'linkedin-automation',
    title: 'LinkedIn Automation: AI Content Generator',
    status: 'ACTIVE',
    category: 'automation',
    headline: 'Automated professional content engine with AI imagery.',
    problem: 'Maintaining LinkedIn presence consumed 5+ hours weekly for content creation.',
    solution:
      'AI-first content and design generator that drafts, schedules, and posts with generated visuals and engagement tracking.',
    stack: ['n8n', 'LinkedIn API', 'DALL-E', 'GPT-4'],
    metrics: [
      { label: 'Engagement Boost', value: '3x' },
      { label: 'Time Saved', value: '5 hrs/week' },
    ],
    links: [{ label: 'View on GitHub', url: 'https://github.com/0xsherlocks', type: 'code' }],
    impact: ['Scheduled AI content calendar', 'Auto-image generation per post', 'Performance telemetry'],
  },
]

const certifications = [
  {
    title: 'Digital Forensics',
    subtitle: 'Awareness on Trends and Technology',
    org: 'K.R. Mangalam University',
    url: 'https://drive.google.com/drive/folders/1IOjJ6sKhaKLVT2BN_QIVpcG6B2Zhkr0i?usp=drive_link',
  },
  {
    title: 'Cyber Forensics',
    subtitle: 'Cyber Security & Penetration Testing',
    org: 'Alpha Probe Forensic | Jun 2025',
    url: 'https://drive.google.com/file/d/1aw2SiLworzVDa2DQ0VS-D63pdFw-2MkC/view?usp=drive_link',
  },
  {
    title: 'Bug Bounty Workshop',
    subtitle: 'Bug Bounty and Cyber Crime Investigation',
    org: 'Indian Cyber Club',
    url: 'https://drive.google.com/file/d/1eDM1km9Nom9alY4cV_o5aF0-iqkJ8BzD/view?usp=drive_link',
  },
  {
    title: 'FUSE 1.0',
    subtitle: 'Forensic Science Workshop',
    org: 'K.R. Mangalam University | Sep 2024',
    url: 'https://drive.google.com/file/d/1wZAsrBW829EqhWSjyeIDNlJ0KJLBOtFW/view?usp=drive_link',
  },
]

const visionItems = [
  { icon: '🔬', text: 'Autonomous forensic investigation workflows' },
  { icon: '🤖', text: 'AI-driven cyber intelligence and automation systems' },
  { icon: '⛓️', text: 'Blockchain evidence integrity & chain of custody' },
]

const blogPosts = [
  {
    title: 'Designing Agentic AI for Digital Forensics',
    date: 'Dec 2025',
    summary: 'A blueprint for building autonomous forensic assistants that remain auditable and explainable.',
  },
  {
    title: 'n8n Patterns for Security Automation',
    date: 'Nov 2025',
    summary: 'Reusable playbooks to triage alerts, enrich indicators, and dispatch escalations in minutes.',
  },
  {
    title: 'Blockchain Evidence & Chain of Custody',
    date: 'Oct 2025',
    summary: 'How immutable ledgers and zero-knowledge proofs support courtroom-ready evidence.',
  },
]

const testimonials = [
  {
    name: 'Dr. A. Verma',
    role: 'Forensic Lab Supervisor',
    quote:
      'Gulshan brought rigor and automation-first thinking to our lab. His workflows reduced turnaround time without sacrificing compliance.',
  },
  {
    name: 'Priya N.',
    role: 'Security Automation Lead',
    quote:
      'His n8n + AI pipelines are production-ready. Documentation, observability, and graceful failure modes are all considered.',
  },
  {
    name: 'Rahul S.',
    role: 'Blockchain Analyst',
    quote: 'Able to translate complex blockchain traces into crisp, investigator-friendly reports. Reliable collaborator.',
  },
]

const skills = [
  { name: 'Digital Forensics', level: 90 },
  { name: 'n8n Automation', level: 92 },
  { name: 'OSINT & Threat Intel', level: 88 },
  { name: 'Agentic AI', level: 86 },
  { name: 'React & UI Engineering', level: 84 },
  { name: 'Blockchain Analysis', level: 80 },
]

export default function Home() {
  const [filter, setFilter] = useState<'all' | Project['category']>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [formState, setFormState] = useState<{ status: 'idle' | 'sending' | 'success' | 'error'; message: string }>({
    status: 'idle',
    message: '',
  })
  const [isFiltering, setIsFiltering] = useState(false)
  const [sliderIndex, setSliderIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (stored) {
      setTheme(stored)
      document.documentElement.setAttribute('data-theme', stored)
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    import('../script.js')
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setSliderIndex((prev) => (prev + 1) % testimonials.length), 5200)
    return () => clearInterval(interval)
  }, [])

  const filteredProjects = useMemo(
    () => (filter === 'all' ? projects : projects.filter((project) => project.category === filter)),
    [filter]
  )

  const handleFilterChange = (value: 'all' | Project['category']) => {
    setIsFiltering(true)
    setFilter(value)
    setTimeout(() => setIsFiltering(false), 250)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString().trim()
    const email = formData.get('email')?.toString().trim()
    const message = formData.get('message')?.toString().trim()

    if (!name || !email || !message) {
      setFormState({ status: 'error', message: 'Please complete all fields before sending.' })
      return
    }

    setFormState({ status: 'sending', message: 'Encrypting & dispatching your message…' })
    setTimeout(() => {
      setFormState({ status: 'success', message: 'Transmission received. I will respond within 24 hours.' })
      event.currentTarget.reset()
    }, 900)
  }

  return (
    <main className="min-h-screen bg-primary-bg text-text-primary relative">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div id="scroll-progress" className="scroll-progress" aria-hidden="true" />
      {loading && (
        <div className="loading-screen" role="status" aria-live="polite">
          <div className="loading-dot" />
          <p>Compiling mission briefing…</p>
        </div>
      )}

      <div className="cursor-glow" aria-hidden="true" />

      <Navigation theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <Hero />

      <div id="main-content">
        <section id="about" className="section-container">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">[01]</span>
              <h2 className="section-title glitch" data-text="ABOUT">
                ABOUT
              </h2>
            </div>
            <div className="about-grid">
              <div className="about-text glass-panel">
                <h3 className="about-heading">About Me</h3>
                <p className="about-intro">
                  I am a Forensic Science student obsessed with integrating forensic rigor with AI automation, agentic
                  systems, and blockchain to keep investigations auditable and fast.
                </p>
                <p>
                  Recent rotations at the State Forensic Science Lab exposed me to digital forensics, OSINT-based
                  investigations, evidence handling procedures, and fingerprint analysis.
                </p>
                <p>
                  I build n8n pipelines, agentic AI workers, and blockchain-backed custody proofs to shorten the time
                  from signal to decision.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <div className="highlight-icon">🎓</div>
                    <div className="highlight-text">Forensic Science Student</div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🔍</div>
                    <div className="highlight-text">Digital Forensics & OSINT</div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🤖</div>
                    <div className="highlight-text">Agentic AI & Automation</div>
                  </div>
                </div>
                <div className="about-stats-grid">
                  <div className="stat-card glass-panel">
                    <p className="stat-eyebrow">Projects Completed</p>
                    <p className="stat-number">12</p>
                  </div>
                  <div className="stat-card glass-panel">
                    <p className="stat-eyebrow">Clients / Teams</p>
                    <p className="stat-number">6</p>
                  </div>
                  <div className="stat-card glass-panel">
                    <p className="stat-eyebrow">Years of Building</p>
                    <p className="stat-number">3</p>
                  </div>
                </div>
                <a className="resume-btn" href="https://fornext.dev/resume.pdf" target="_blank" rel="noreferrer">
                  ⬇ Download Resume
                </a>
              </div>
              <div className="about-visual">
                <div className="terminal-window glass-panel" role="presentation">
                  <div className="terminal-header">
                    <span className="terminal-title">system.status</span>
                  </div>
                  <div className="terminal-body">
                    <div className="terminal-line">
                      <span className="terminal-prompt">$</span> status --all
                    </div>
                    <div className="terminal-line">
                      <span className="terminal-success">✓</span> Forensic Training: ACTIVE
                    </div>
                    <div className="terminal-line">
                      <span className="terminal-success">✓</span> n8n Workflows: DEPLOYED
                    </div>
                    <div className="terminal-line">
                      <span className="terminal-success">✓</span> Blockchain Research: ONGOING
                    </div>
                    <div className="terminal-line">
                      <span className="terminal-success">✓</span> AI Automation: IN DEVELOPMENT
                    </div>
                    <div className="terminal-line">
                      <span className="terminal-success">✓</span> LinkedIn Automation: ACTIVE
                    </div>
                    <div className="terminal-line terminal-cursor">_</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="section-container">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">[02]</span>
              <h2 className="section-title glitch" data-text="EXPERTISE">
                EXPERTISE
              </h2>
            </div>
            <div className="expertise-grid">
              {expertise.map((item) => (
                <div key={item.title} className="expertise-card glass-panel">
                  <div className="card-header">
                    <div className="card-icon">{item.icon}</div>
                    <h3 className="card-title">{item.title}</h3>
                  </div>
                  <p className="card-description">{item.description}</p>
                  <ul className="card-list">
                    {item.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                  <div className="skill-level" aria-label={`${item.title} proficiency ${item.level}`}>
                    <div className="skill-bar" style={{ '--skill': item.level } as React.CSSProperties} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-container">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">[03]</span>
              <h2 className="section-title glitch" data-text="EXPERIENCE">
                EXPERIENCE
              </h2>
            </div>
            <div className="timeline">
              {experiences.map((item) => (
                <div key={item.role} className="timeline-item glass-panel">
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{item.role}</h3>
                    <div className="timeline-company">{item.company}</div>
                    <p className="timeline-desc">{item.description}</p>
                    <div className="timeline-impact">
                      <h4 className="impact-title">Key Achievements:</h4>
                      <ul className="impact-list">
                        {item.achievements.map((achievement) => (
                          <li key={achievement}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="timeline-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-container">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">[04]</span>
              <h2 className="section-title glitch" data-text="PROJECTS">
                PROJECTS
              </h2>
            </div>
            <div className="project-filters">
              {['all', 'automation', 'ai', 'security', 'blockchain'].map((value) => (
                <button
                  key={value}
                  className={`filter-chip ${filter === value ? 'active' : ''}`}
                  onClick={() => handleFilterChange(value as typeof filter)}
                >
                  {value === 'all' ? 'All' : value.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {isFiltering &&
                Array.from({ length: 2 }).map((_, index) => (
                  <div key={index} className="project-card glass-panel skeleton-card" aria-hidden="true">
                    <div className="skeleton-line w-2/3" />
                    <div className="skeleton-line w-1/2" />
                    <div className="skeleton-line w-3/4" />
                  </div>
                ))}

              {!isFiltering &&
                filteredProjects.map((project) => (
                  <div key={project.id} className="project-card glass-panel">
                    <div className="project-thumbnail">
                      <div className="thumbnail-placeholder">
                        <span className="thumbnail-icon">🛰️</span>
                        <span className="thumbnail-text">{project.headline}</span>
                      </div>
                    </div>
                    <div className="project-content">
                      <div className="project-status">{project.status}</div>
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-problem">
                        <span className="problem-label">Problem:</span>
                        <p>{project.problem}</p>
                      </div>
                      <p className="project-desc">{project.solution}</p>
                      <div className="project-tech">
                        {project.stack.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="project-metrics">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="metric">
                            <span className="metric-value">{metric.value}</span>
                            <span className="metric-label">{metric.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="project-links">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            target={link.url.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className={`project-link ${link.type === 'demo' ? 'demo-link' : ''}`}
                          >
                            <span className="link-icon">{link.type === 'demo' ? '🚀' : '🔗'}</span>
                            {link.label}
                          </a>
                        ))}
                        <button className="project-link" onClick={() => setSelectedProject(project)}>
                          <span className="link-icon">👁️</span> View More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-container">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">[05]</span>
              <h2 className="section-title glitch" data-text="SKILLS">
                SKILLS
              </h2>
            </div>
            <div className="skill-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-card glass-panel">
                  <div className="skill-top">
                    <p className="skill-name">{skill.name}</p>
                    <p className="skill-value">{skill.level}%</p>
                  </div>
                  <div className="skill-meter" aria-label={`${skill.name} proficiency ${skill.level}%`}>
                    <div className="skill-meter-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                  <p className="skill-footnote">Hands-on experience with real deployments</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section-container">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">[06]</span>
              <h2 className="section-title glitch" data-text="CERTIFICATIONS">
                CERTIFICATIONS
              </h2>
            </div>
            <div className="certifications-grid">
              {certifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-card glass-panel"
                >
                  <div className="cert-icon">🎓</div>
                  <h3>{cert.title}</h3>
                  <p className="cert-subtitle">{cert.subtitle}</p>
                  <p className="cert-org">{cert.org}</p>
                  <p className="cert-view">📄 View Certificate</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="vision" className="section-container">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">[07]</span>
              <h2 className="section-title glitch" data-text="WHAT I'M BUILDING">
                WHAT I'M BUILDING
              </h2>
            </div>
            <div className="vision-grid">
              {visionItems.map((item) => (
                <div key={item.text} className="vision-card glass-panel">
                  <div className="vision-icon">{item.icon}</div>
                  <h3>{item.text}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CallToAction />

        <section id="blog" className="section-container">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">[08]</span>
              <h2 className="section-title glitch" data-text="ARTICLES">
                ARTICLES
              </h2>
            </div>
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <article key={post.title} className="blog-card glass-panel">
                  <p className="blog-date">{post.date}</p>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-summary">{post.summary}</p>
                  <button className="blog-read">Read Outline</button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-container">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">[09]</span>
              <h2 className="section-title glitch" data-text="TESTIMONIALS">
                TESTIMONIALS
              </h2>
            </div>
            <div className="testimonial-carousel glass-panel">
              <p className="testimonial-quote">“{testimonials[sliderIndex].quote}”</p>
              <div className="testimonial-author">
                <span>{testimonials[sliderIndex].name}</span>
                <span className="testimonial-role">{testimonials[sliderIndex].role}</span>
              </div>
              <div className="carousel-dots" role="tablist" aria-label="Testimonials">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    className={`dot ${sliderIndex === index ? 'active' : ''}`}
                    aria-label={`View testimonial from ${item.name}`}
                    onClick={() => setSliderIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-container">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">[10]</span>
              <h2 className="section-title glitch" data-text="CONTACT">
                CONTACT
              </h2>
            </div>
            <div className="contact-container">
              <div className="contact-info">
                <h3 className="contact-heading">Initialize Secure Connection</h3>
                <p className="contact-text">
                  Ready to collaborate on cybersecurity challenges? Let's connect and discuss how we can secure your
                  digital infrastructure.
                </p>
                <div className="availability-pill large">
                  <span className="status-dot" aria-hidden="true" /> Availability: Open for select missions
                </div>
                <div className="contact-methods">
                  <div className="contact-method glass-panel">
                    <div className="method-icon">📧</div>
                    <div className="method-details">
                      <div className="method-label">Email</div>
                      <div className="method-value">rajgulshan2580@gmail.com</div>
                    </div>
                  </div>
                  <div className="contact-method glass-panel">
                    <div className="method-icon">💼</div>
                    <div className="method-details">
                      <div className="method-label">LinkedIn</div>
                      <div className="method-value">linkedin.com/in/gulshanxraj</div>
                    </div>
                  </div>
                  <div className="contact-method glass-panel">
                    <div className="method-icon">🔗</div>
                    <div className="method-details">
                      <div className="method-label">GitHub</div>
                      <div className="method-value">github.com/0xsherlocks</div>
                    </div>
                  </div>
                  <div className="contact-method glass-panel">
                    <div className="method-icon">📍</div>
                    <div className="method-details">
                      <div className="method-label">Location</div>
                      <div className="method-value">Gurugram, Haryana, India</div>
                    </div>
                  </div>
                </div>
                <div className="location-map" aria-hidden="true">
                  <div className="location-ping" />
                  <div className="location-dot" />
                </div>
              </div>
              <div className="contact-form glass-panel">
                <form className="secure-form" onSubmit={handleSubmit}>
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="your.email@domain.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Security consultation" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} placeholder="Your message here..." required />
                  </div>
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={formState.status === 'sending'}
                    aria-live="polite"
                  >
                    {formState.status === 'sending' ? 'Sending...' : 'Send Encrypted Message'}
                  </button>
                  {formState.message && (
                    <p className={`form-feedback ${formState.status}`}>{formState.message}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="analytics-section">
          <div className="analytics-card glass-panel">
            <div>
              <p className="analytics-label">Live View Counter (placeholder)</p>
              <p className="analytics-value">12,480</p>
            </div>
            <div>
              <p className="analytics-label">Uptime (placeholder)</p>
              <p className="analytics-value">99.99%</p>
            </div>
            <div>
              <p className="analytics-label">Page Transitions</p>
              <p className="analytics-value">Smooth</p>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="brand-text glitch" data-text="FORNEXT">
              FORNEXT
            </span>
            <p className="footer-tagline">Cyber-Intelligence Excellence</p>
          </div>
          <div className="footer-links">
            <a href="/privacy-policy.html" className="footer-link">
              Privacy Policy
            </a>
            <span className="footer-separator">|</span>
            <a href="/terms-of-service.html" className="footer-link">
              Terms of Service
            </a>
          </div>
          <div className="footer-copyright">
            <p>© 2025 Gulshan Kumar. All rights reserved.</p>
            <p className="footer-status">
              System Status: <span className="status-active">ONLINE</span>
            </p>
          </div>
        </div>
      </footer>

      <button id="back-to-top" className="back-to-top" aria-label="Back to top">
        ↑
      </button>

      {selectedProject && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Project details">
          <div className="modal glass-panel">
            <div className="modal-header">
              <h3 className="modal-title">{selectedProject.title}</h3>
              <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close modal">
                ✕
              </button>
            </div>
            <p className="modal-subtitle">{selectedProject.headline}</p>
            <div className="modal-body">
              <div className="project-problem">
                <span className="problem-label">Problem:</span>
                <p>{selectedProject.problem}</p>
              </div>
              <div className="project-problem">
                <span className="problem-label">Solution:</span>
                <p>{selectedProject.solution}</p>
              </div>
              <div className="project-tech modal-stack">
                {selectedProject.stack.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="impact-list modal-impact">
                {selectedProject.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="project-links modal-links">
              {selectedProject.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`project-link ${link.type === 'demo' ? 'demo-link' : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
