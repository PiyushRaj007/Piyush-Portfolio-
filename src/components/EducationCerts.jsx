import { motion } from 'framer-motion'
import { Award, GraduationCap } from 'lucide-react'
import { certifications, education } from '../data'

export default function EducationCerts() {
  const primary = education.find((e) => e.primary)
  const secondary = education.filter((e) => !e.primary)

  return (
    <section id="education" className="py-24 sm:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Education */}
          <div>
            <p className="eyebrow mb-4">Education</p>
            <h2 className="font-display text-2xl sm:text-3xl text-fg mb-8">Academic background.</h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55 }}
              className="card p-7"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-teal-dim flex items-center justify-center shrink-0">
                  <GraduationCap size={19} className="text-teal" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-fg">{primary.degree}</h3>
                  <p className="text-sm text-muted mt-1">{primary.institute}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="chip">{primary.years}</span>
                    <span className="chip !text-teal !border-teal/30">{primary.score}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-4 space-y-3">
              {secondary.map((e) => (
                <div
                  key={e.degree}
                  className="flex items-center justify-between px-5 py-3.5 rounded-xl border border-line/70 text-sm"
                >
                  <div>
                    <p className="text-fg/80">{e.degree}</p>
                    <p className="text-muted2 text-xs mt-0.5">{e.institute}</p>
                  </div>
                  <div className="text-right shrink-0 pl-4">
                    <p className="font-mono text-muted text-xs">{e.years}</p>
                    <p className="font-mono text-muted2 text-xs mt-0.5">{e.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="eyebrow mb-4">Certifications</p>
            <h2 className="font-display text-2xl sm:text-3xl text-fg mb-8">Training & credentials.</h2>

            <div className="space-y-4">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="card p-6 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-lg bg-amber-dim flex items-center justify-center shrink-0">
                    <Award size={18} className="text-amber" />
                  </div>
                  <div>
                    <h3 className="font-display text-base text-fg leading-snug">{c.title}</h3>
                    <p className="text-sm text-muted mt-1.5">{c.org}</p>
                    <p className="font-mono text-xs text-muted2 mt-2">{c.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
