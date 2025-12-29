import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gulshan Kumar - Forensic Science × AI-Driven Cyber Intelligence | FORNEXT',
  description: 'Gulshan Kumar - Forensic Science student specializing in AI-Driven Cyber Intelligence. Building automation tools & practical forensic systems using n8n, agentic AI, and blockchain technology.',
  keywords: ['Forensic Science', 'AI Automation', 'Cyber Intelligence', 'n8n', 'Digital Forensics', 'OSINT', 'Blockchain', 'Agentic AI'],
  authors: [{ name: 'Gulshan Kumar' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Gulshan Kumar - Forensic Science × AI-Driven Cyber Intelligence',
    description: 'Building automation tools & practical forensic systems. Specializing in AI-driven cyber intelligence, digital forensics, and blockchain applications.',
    type: 'website',
    url: 'https://0xsherlocks.github.io/portfolio/',
    siteName: 'FORNEXT - Gulshan Kumar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gulshan Kumar - Forensic Science × AI-Driven Cyber Intelligence',
    description: 'Building automation tools & practical forensic systems. Specializing in AI-driven cyber intelligence and digital forensics.',
    creator: '@gulshanxraj',
  },
  themeColor: '#00f0ff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-main">{children}</body>
    </html>
  )
}
