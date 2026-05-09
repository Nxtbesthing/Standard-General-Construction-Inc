const Intro = () => {
  return (
    <section id="about" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-orange-500">Company introduction</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">Trusted construction leadership for commercial and industrial builds.</h2>
            <p className="text-lg leading-8 text-slate-600">
              Standard General Construction Inc. combines premium craftsmanship with industrial efficiency to deliver modern, durable, and sustainable infrastructure projects.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">Corporate quality</h3>
                <p className="mt-3 text-slate-600">A polished experience from planning and permitting through execution.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">Modern systems</h3>
                <p className="mt-3 text-slate-600">Advanced project controls keep delivery fast, transparent, and dependable.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl text-white">
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-orange-300">Our approach</p>
                <p className="mt-4 text-lg leading-8">We combine engineering excellence, commercial responsibility, and a client-first mindset to create projects built to perform.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-800/90 p-5">
                  <p className="text-3xl font-bold text-orange-400">24/7</p>
                  <p className="mt-2 text-slate-300">Project monitoring and client updates.</p>
                </div>
                <div className="rounded-3xl bg-slate-800/90 p-5">
                  <p className="text-3xl font-bold text-orange-400">70%</p>
                  <p className="mt-2 text-slate-300">Repeat clients and long-term partnerships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
