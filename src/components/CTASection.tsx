const CTASection = () => {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-10 shadow-2xl sm:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_280px] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-orange-400">Ready to build</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Partner with a construction team you can trust.</h2>
              <p className="mt-5 text-slate-300 leading-8">Whether you need a corporate facility, roadway upgrade, or a renovation plan, our team is prepared to guide the project from design through completion.</p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-orange-400"
              >
                Contact Us
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-orange-400 hover:text-orange-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
