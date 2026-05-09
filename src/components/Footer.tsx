const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div>
            <p className="text-xl font-semibold text-white">Standard General Construction</p>
            <p className="mt-4 text-slate-500">Premium construction services with a focus on trust, quality, and modern industrial design.</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Contact</p>
            <p className="mt-4">123 Construction Ave, Build City, BC</p>
            <p className="mt-2">(555) 123-4567</p>
            <p className="mt-2">info@standardgeneralconstruction.com</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Quick links</p>
            <div className="mt-4 space-y-2 text-slate-400">
              <a href="#services" className="block hover:text-white transition-colors duration-200">Services</a>
              <a href="#projects" className="block hover:text-white transition-colors duration-200">Projects</a>
              <a href="#about" className="block hover:text-white transition-colors duration-200">About</a>
              <a href="#contact" className="block hover:text-white transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Standard General Construction Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
