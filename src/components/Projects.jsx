import { motion } from 'framer-motion'
import { Github, ArrowUpRight, Database, TrendingDown } from 'lucide-react'
import { projects } from '../data'

const icons = {
  'sql-retail-sales': Database,
  'customer-churn': TrendingDown,
}

function ProjectCard({ project, reverse }) {
  const Icon = icons[project.id] || Database

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="card overflow-hidden"
    >
      <div className={`grid lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        {/* Visual / KPI side */}
        <div className="bg-surface2 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-line relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-teal/[0.05] rounded-full blur-[90px]" />
          <div className="relative flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-teal-dim flex items-center justify-center">
              <Icon size={18} className="text-teal" />
            </div>
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted">
              Case Study
            </span>
          </div>

          <div className="relative grid grid-cols-3 gap-4">
            {project.scaleStats.map((s) => (
              <div key={s.label}>
                <p className="stat-number !text-2xl sm:!text-3xl text-fg">{s.number}</p>
                <p className="stat-label mt-1.5 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="relative flex flex-wrap gap-2 mt-9">
            {project.tools.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Narrative side */}
        <div className="p-8 sm:p-10">
          <h3 className="font-display text-2xl text-fg mb-5">{project.title}</h3>

          <div className="space-y-5 text-sm sm:text-[15px] leading-relaxed">
            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-amber mb-1.5">
                Problem
              </p>
              <p className="text-fg/85">{project.problem}</p>
            </div>

            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-amber mb-1.5">
                Approach
              </p>
              <p className="text-fg/85">{project.approach}</p>
            </div>

            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-amber mb-1.5">
                Key Findings
              </p>
              <ul className="space-y-2">
                {project.findings.map((f) => (
                  <li key={f} className="flex gap-2.5 text-fg/85">
                    <span className="mt-2 w-1 h-1 rounded-full bg-teal shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-amber mb-1.5">
                Outcome
              </p>
              <p className="text-fg/85">{project.outcome}</p>
            </div>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-fg hover:text-teal transition-colors duration-200 group"
          >
            <Github size={16} />
            View on GitHub
            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">Selected Work</p>
        <h2 className="section-heading mb-14 max-w-2xl">
          Two datasets, two decisions worth making.
        </h2>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
