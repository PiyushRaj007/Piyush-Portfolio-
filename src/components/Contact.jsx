import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { profile } from '../data'

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: 'LinkedIn', value: 'piyush-raj-918126289', href: profile.linkedin, Icon: Linkedin },
  { label: 'GitHub', value: 'PiyushRaj007', href: profile.github, Icon: Github },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-line relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-[600px] h-[300px] bg-teal/[0.06] rounded-full blur-[120px]" />

      <div className="relative max-w-content mx-auto px-5 sm:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-5 justify-center inline-flex"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-display text-4xl sm:text-5xl text-fg tracking-tight"
        >
          Let&rsquo;s connect.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-4 text-muted max-w-md mx-auto"
        >
          Open to Data Analyst and Business Analyst roles — internships and full-time.
        </motion.p>

        <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {links.map(({ label, value, href, Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-6 flex flex-col items-center gap-3 group hover:border-teal/40 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-dim flex items-center justify-center">
                <Icon size={17} className="text-teal" />
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted2">
                  {label}
                </p>
                <p className="text-sm text-fg mt-1 flex items-center gap-1 justify-center break-all">
                  {value}
                  <ArrowUpRight
                    size={13}
                    className="text-muted2 group-hover:text-teal transition-colors duration-200 shrink-0"
                  />
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
