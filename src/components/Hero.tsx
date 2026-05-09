const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <div className="hero-section">
        <div className="hero-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow animate-fade-in-up">Premium industrial construction services</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight animate-fade-in-up">
            Building bold infrastructure for a stronger tomorrow.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-slate-200 leading-relaxed animate-fade-in-up animation-delay-200">
            Standard General Construction provides corporate, trustworthy, and modern construction solutions across building, road, civil, renovation, and project management.
          </p>

          <div className="hero-actions mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-400">
            <a
              href="#contact"
              className="btn bg-orange-500 shadow-orange-500/20 hover:bg-orange-600 text-white"
            >
              Get a Quote
            </a>
            <a
              href="#projects"
              className="btn border border-white/20 text-white bg-white/10 hover:bg-white/15"
            >
              View Projects
            </a>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-left backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Experience</p>
              <p className="mt-4 text-3xl font-semibold text-white">20+ Years</p>
              <p className="mt-2 text-slate-300">Delivering lasting projects with precision and care.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-left backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Projects</p>
              <p className="mt-4 text-3xl font-semibold text-white">500+</p>
              <p className="mt-2 text-slate-300">Large and small commercial, residential, and civil works.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-left backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Satisfaction</p>
              <p className="mt-4 text-3xl font-semibold text-white">100%</p>
              <p className="mt-2 text-slate-300">Trusted by corporate clients and communities alike.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
