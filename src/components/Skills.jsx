import { motion } from 'framer-motion'
import { Code2, LineChart, Wrench } from 'lucide-react'
import { skills } from '../data'

const icons = [Code2, LineChart, Wrench]

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">Skills</p>
        <h2 className="section-heading mb-14 max-w-2xl">The toolkit behind the analysis.</h2>

        <div className="grid sm:grid-cols-3 gap-5">
          {skills.map((group, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card p-7"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-dim flex items-center justify-center mb-5">
                  <Icon size={18} className="text-teal" />
                </div>
                <h3 className="font-display text-lg text-fg mb-4">{group.category}</h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                      <span className="w-1 h-1 rounded-full bg-line" />
                      <span className="text-fg/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
