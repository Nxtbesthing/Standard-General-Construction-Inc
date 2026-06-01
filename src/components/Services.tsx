
interface ServiceItem {
  title: string
  description: string
  icon: JSX.Element
}

const services: ServiceItem[] = [
  {
    title: 'Building Construction',
    description: 'Turn concept into landmark structures with precision engineering, premium materials, and expert site supervision.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 21V8l8-5 8 5v13H4Z" />
        <path d="M9 21v-6h6v6" />
        <path d="M12 3v5" />
      </svg>
    ),
  },
  {
    title: 'Residential Projects',
    description: 'Custom homes and multifamily projects designed to balance comfort, functionality, and long-term performance.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 12l8-8 8 8" />
        <path d="M4 12v8h16v-8" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Commercial Construction',
    description: 'Retail, office, and industrial space delivered with clean execution, code compliance, and operational readiness.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 21h16V7H4v14Z" />
        <path d="M4 7l8-4 8 4" />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
      </svg>
    ),
  },
  {
    title: 'Renovation & Remodeling',
    description: 'Refresh interiors, upgrade systems, and reimagine spaces with thoughtful renovation that respects budget and schedule.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 14h16" />
        <path d="M6 14V6h12v8" />
        <path d="M8 22v-6h8v6" />
      </svg>
    ),
  },
  {
    title: 'Project Management',
    description: 'Clear planning, proactive coordination, and dependable communication from design through handover.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
        <path d="M7 4v16" />
      </svg>
    ),
  },
  {
    title: 'Structural Works',
    description: 'Foundations, framing, and load-bearing systems engineered to support every stage of construction with safety and strength.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20h16" />
        <path d="M8 16h8" />
        <path d="M12 4v12" />
        <path d="M7 8h10" />
      </svg>
    ),
  },
]

const WorkIllustration = ({ variant }: { variant: 'helmet' | 'mixer' | 'blocks' }) => {
  const illustrations: Record<string, JSX.Element> = {
    helmet: (
      <svg viewBox="0 0 160 160" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29 86c0-31 26-56 58-56s58 25 58 56v15H29V86Z" fill="#FBBF24" />
        <path d="M32 101h114v8H32v-8Z" fill="#F59E0B" />
        <path d="M42 78c0-14 12-25 26-25s26 11 26 25v7H42v-7Z" fill="#F59E0B" />
        <path d="M50 50c0-12 10-22 22-22s22 10 22 22" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" />
        <path d="M73 70v20" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" />
      </svg>
    ),
    mixer: (
      <svg viewBox="0 0 160 160" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34 86h92v42H34V86Z" fill="#E5E7EB" />
        <path d="M46 86L70 48h20l24 38" stroke="#1F2937" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M60 92h40" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" />
        <path d="M36 126h96" stroke="#1F2937" strokeWidth="8" strokeLinecap="round" />
        <circle cx="54" cy="132" r="8" fill="#111827" />
        <circle cx="106" cy="132" r="8" fill="#111827" />
        <path d="M55 40h50" stroke="#FBBF24" strokeWidth="10" strokeLinecap="round" />
      </svg>
    ),
    blocks: (
      <svg viewBox="0 0 160 160" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="28" y="56" width="44" height="30" rx="6" fill="#F97316" />
        <rect x="88" y="56" width="44" height="30" rx="6" fill="#FB923C" />
        <rect x="28" y="96" width="44" height="30" rx="6" fill="#F59E0B" />
        <rect x="88" y="96" width="44" height="30" rx="6" fill="#FBBF24" />
        <path d="M28 56h44" stroke="#111827" strokeWidth="4" />
        <path d="M88 56h44" stroke="#111827" strokeWidth="4" />
        <path d="M28 86h44" stroke="#111827" strokeWidth="4" />
        <path d="M88 86h44" stroke="#111827" strokeWidth="4" />
        <path d="M28 96h44" stroke="#111827" strokeWidth="4" />
        <path d="M88 96h44" stroke="#111827" strokeWidth="4" />
      </svg>
    ),
  }

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
      <div className="h-40 w-full">{illustrations[variant]}</div>
    </div>
  )
}

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.28em] text-orange-500">What we do</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-950">Industry leading services for complex construction needs.</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">From infrastructure and civil works to renovation and integrated project management, we deliver smart, reliable solutions.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start mb-12">
          <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
            <p className="text-lg leading-8 text-slate-600">
              Our services are designed to cover every stage of construction, from strategic planning and permitting to on-site execution and final delivery. We blend practical craftsmanship with thoughtful design to create projects that look strong, feel functional, and stand the test of time.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">Creativity in construction</h3>
                <p className="mt-3 text-slate-600">We build with intention, using smart workflows, innovative techniques, and responsive planning to deliver real value.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">Hands-on reliability</h3>
                <p className="mt-3 text-slate-600">Every project is supported by skilled teams, disciplined safety protocols, and strict quality control.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 shadow-2xl text-white">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Work item illustrations</h3>
                  <p className="text-slate-300">A polished set of construction visuals representing the tools that power our projects.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <WorkIllustration variant="helmet" />
                  <WorkIllustration variant="mixer" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <WorkIllustration variant="blocks" />
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
                  <div className="space-y-4 text-slate-950">
                    <h4 className="text-xl font-semibold">Built for the job</h4>
                    <p className="text-slate-600">These illustrations show the core equipment and materials we use on every project: safety gear, mixers, and modular building blocks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 shadow-sm transition-all duration-300 group-hover:bg-orange-100">
                {service.icon}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-4 text-slate-600 leading-7">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
