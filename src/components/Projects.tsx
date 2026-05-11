const projects = [
  {
    title: 'City Commercial Hub',
    description: 'Large-scale mixed-use building designed for corporate and retail tenants.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Roadway Construction Driveways',
    description: 'Major road upgrade with modern paving, drainage, and safety systems.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipP2281K1RJsgCZiVnBU9dhU22URmCtGVELOUIdq=w203-h152-k-no,
  },
  {
    title: 'Urban Renovation Project',
    description: 'High-end renovation transforming an older structure into a premium office space.',
    image: 'https://images.unsplash.com/photo-1514149765006-1f1402e0fdea?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Engineering Infrastructure',
    description: 'Civil engineering and foundation work for a strategic campus expansion.',
    image: 'https://images.unsplash.com/photo-1529429617124-0c7cd3c5aa2b?auto=format&fit=crop&w=1200&q=80',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.28em] text-orange-500">Featured work</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-950">See the quality of our built work.</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Each project is designed to elevate performance, aesthetics, and long-term value.</p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-[2rem] bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>
              <div className="p-8">
                <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-600">Premium Project</span>
                <h3 className="mt-5 text-2xl font-semibold text-slate-950">{project.title}</h3>
                <p className="mt-4 text-slate-600 leading-7">{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-orange-600"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
