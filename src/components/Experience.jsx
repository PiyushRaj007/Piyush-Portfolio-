import { motion } from 'framer-motion'
import { Droplets } from 'lucide-react'
import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-4"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="section-heading mb-12 max-w-2xl"
        >
          Real-world data, at watershed scale.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="card p-7 sm:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal/[0.06] rounded-full blur-[100px]" />

          <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-dim flex items-center justify-center shrink-0">
                <Droplets size={20} className="text-teal" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-fg">{experience.role}</h3>
                <p className="text-muted mt-1">{experience.org}</p>
              </div>
            </div>
          </div>

          <p className="relative text-sm text-muted2 font-mono uppercase tracking-wide mb-8">
            {experience.focus}
          </p>

          <div className="relative grid grid-cols-3 gap-4 sm:gap-8 mb-9 pb-9 border-b border-line">
            {experience.stats.map((s) => (
              <div key={s.label}>
                <p className="stat-number text-teal">{s.number}</p>
                <p className="stat-label mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <ul className="relative space-y-4 mb-8">
            {experience.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-fg/85 leading-relaxed">
                <span className="mt-2.5 w-1 h-1 rounded-full bg-teal shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="relative flex flex-wrap gap-2 mb-2">
            {experience.parameters.map((p) => (
              <span key={p} className="chip !border-amber/30 !text-amber">
                {p}
              </span>
            ))}
          </div>
          <div className="relative flex flex-wrap gap-2">
            {experience.methods.map((m) => (
              <span key={m} className="chip">
                {m}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
