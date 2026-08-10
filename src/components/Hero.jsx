import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Download } from 'lucide-react'
import { profile } from '../data'

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="absolute -top-24 right-0 w-[520px] h-[520px] bg-teal/[0.07] rounded-full blur-[120px]" />

      <div className="relative max-w-content mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="eyebrow mb-5">Data Analyst · Delhi Technological University</p>

            <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl sm:leading-[1.05] font-medium text-fg tracking-tight">
              {profile.name}
            </h1>

            <p className="mt-5 font-mono text-sm sm:text-base text-teal tracking-wide">
              {profile.tagline}
            </p>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
              {profile.headline} {profile.summary}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowDown size={15} />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Download size={15} />
                Download Resume
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-line text-muted hover:text-teal hover:border-teal transition-colors duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-line text-muted hover:text-teal hover:border-teal transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="card relative p-7 animate-floaty">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted">
                  water_quality_index.csv
                </span>
                <span className="w-2 h-2 rounded-full bg-teal" />
              </div>

              <svg viewBox="0 0 340 140" className="w-full h-auto" aria-hidden="true">
                <line x1="0" y1="35" x2="340" y2="35" stroke="#232B36" strokeWidth="1" />
                <line x1="0" y1="70" x2="340" y2="70" stroke="#232B36" strokeWidth="1" />
                <line x1="0" y1="105" x2="340" y2="105" stroke="#232B36" strokeWidth="1" />
                <polyline
                  points="0,95 40,80 80,88 120,55 160,68 200,30 240,48 280,20 340,38"
                  fill="none"
                  stroke="#3FBFA6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="0,110 40,105 80,112 120,98 160,102 200,86 240,94 280,80 340,90"
                  fill="none"
                  stroke="#E8A33D"
                  strokeWidth="1.5"
                  strokeOpacity="0.55"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-line">
                <div>
                  <p className="stat-number !text-xl">9</p>
                  <p className="stat-label">Stretches</p>
                </div>
                <div>
                  <p className="stat-number !text-xl">29</p>
                  <p className="stat-label">Drains</p>
                </div>
                <div>
                  <p className="stat-number !text-xl">5yr</p>
                  <p className="stat-label">Span</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
