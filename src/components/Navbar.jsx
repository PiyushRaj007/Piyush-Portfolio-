import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = nav.map((n) => document.querySelector(n.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        <a href="#home" className="font-display text-lg tracking-tight text-fg">
          Piyush<span className="text-teal">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-fg' : 'text-muted hover:text-fg'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-4 right-4 -bottom-[1px] h-[2px] bg-teal rounded-full" />
                )}
              </a>
            )
          })}
        </nav>

        <a
          href={profile.resumeUrl}
          className="hidden md:inline-flex btn-ghost !text-xs !py-2 !px-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        <button
          className="md:hidden text-fg p-2 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink/97 backdrop-blur-md border-b border-line px-5 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-fg border-b border-line/60 last:border-none"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center mt-4"
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
