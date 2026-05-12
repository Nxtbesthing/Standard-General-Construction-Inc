
interface ServiceItem {
  title: string
  description: string
  icon: JSX.Element
}

const services: ServiceItem[] = [
  {
    title: 'Building Construction',
    description: 'Full-service building construction for offices, warehouses, residential towers, and mixed-use developments.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 21V8l8-5 8 5v13H4Z" />
        <path d="M9 21v-6h6v6" />
        <path d="M12 3v5" />
      </svg>
    ),
  },
  {
    title: 'Road Construction',
    description: 'Durable roadways and infrastructure with precision grading, paving, and civil site work.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 16h18" />
        <path d="M7 8h10" />
        <path d="M12 3v18" />
        <path d="M4 21h16" />
      </svg>
    ),
  },
  {
    title: 'Civil Engineering',
    description: 'Complete civil engineering services that keep projects structurally sound, safe, and future-ready.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20h16" />
        <path d="M8 16h8" />
        <path d="M12 4v12" />
        <path d="M7 8h10" />
      </svg>
    ),
  },
  {
    title: 'Renovation',
    description: 'Transformative renovation work with modern finishes, systems upgrades, and efficient scheduling.',
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
    description: 'Expert planning, communication, and risk control to ensure every project meets scope, schedule, and budget.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
        <path d="M7 4v16" />
      </svg>
    ),
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.28em] text-orange-500">What we do</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-950">Industry leading services for complex construction needs.</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">From infrastructure and civil works to renovation and integrated project management, we deliver smart, reliable solutions.</p>
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
