import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-950/95 backdrop-blur-xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-white text-xl sm:text-2xl font-semibold tracking-[0.2em] uppercase">
            Standard General
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 hover:border-orange-400 hover:text-white transition-all duration-200"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((value: boolean) => !value)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="md:hidden bg-slate-950/98 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 pb-6 pt-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-slate-200 py-3 px-4 rounded-2xl hover:bg-slate-900/90 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
