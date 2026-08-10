import { motion } from 'framer-motion'
import { about } from '../data'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-4">About</p>
            <h2 className="section-heading">Civil engineer,<br />analyst by practice.</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg text-fg/90 leading-relaxed max-w-2xl">{about.paragraph}</p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {about.highlights.map((h) => (
                <span key={h} className="chip">
                  {h}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
