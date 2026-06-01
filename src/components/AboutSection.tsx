const AboutSection = () => {
  return (
    <section id="company" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-orange-500">Building Excellence</p>
                <h1 className="mt-4 text-4xl font-bold text-slate-950">Welcome to Standard General Construction</h1>
              </div>

              <div className="grid gap-8 lg:grid-cols-[2fr_1fr] items-start">
                <div className="space-y-5 text-slate-600 leading-8">
                  <p>
                    At Standard General Construction, we transform ideas into reality through quality craftsmanship, innovative solutions, and a commitment to excellence. Whether you're planning a residential, commercial, or industrial project, our experienced team is dedicated to delivering durable, efficient, and cost-effective construction services tailored to your needs.
                  </p>
                  <p>
                    From concept to completion, we focus on precision, safety, and customer satisfaction, ensuring every project meets the highest industry standards.
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-lg">
                  <h2 className="text-2xl font-semibold">Why Choose Standard General Construction?</h2>
                  <ul className="mt-6 space-y-4 text-slate-200">
                    <li>✅ Experienced and Skilled Professionals</li>
                    <li>✅ Quality Materials and Workmanship</li>
                    <li>✅ Timely Project Delivery</li>
                    <li>✅ Transparent Communication</li>
                    <li>✅ Competitive Pricing</li>
                    <li>✅ Commitment to Safety and Compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-950">Our Services</h2>
              <ul className="mt-6 space-y-3 text-slate-600">
                <li>• General Construction</li>
                <li>• Residential Building Projects</li>
                <li>• Commercial Construction</li>
                <li>• Renovation & Remodeling</li>
                <li>• Project Management</li>
                <li>• Structural Works</li>
                <li>• Civil Engineering Services</li>
                <li>• Property Development Consulting</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-950">What Our Clients Say</h2>
              <div className="mt-8 space-y-6 text-slate-600">
                <div className="rounded-3xl bg-slate-50 p-6">
                  <p className="text-xl font-semibold text-orange-500">⭐⭐⭐⭐⭐</p>
                  <p className="mt-4 italic">“Standard General Construction exceeded our expectations from start to finish. Their attention to detail, professionalism, and commitment to quality made our project a complete success. Highly recommended!”</p>
                  <p className="mt-4 font-semibold text-slate-900">Michael A.</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-6">
                  <p className="text-xl font-semibold text-orange-500">⭐⭐⭐⭐⭐</p>
                  <p className="mt-4 italic">“The team delivered our commercial building on schedule and within budget. Communication was excellent throughout the entire process. We couldn't be happier with the results.”</p>
                  <p className="mt-4 font-semibold text-slate-900">Sarah T.</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-6">
                  <p className="text-xl font-semibold text-orange-500">⭐⭐⭐⭐⭐</p>
                  <p className="mt-4 italic">“Working with Standard General Construction was one of the best decisions we made. Their expertise and dedication gave us confidence every step of the way.”</p>
                  <p className="mt-4 font-semibold text-slate-900">David K.</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-6">
                  <p className="text-xl font-semibold text-orange-500">⭐⭐⭐⭐☆</p>
                  <p className="mt-4 italic">“The renovation was completed with great care and professionalism. The final result was impressive, and the team was always responsive to our needs.”</p>
                  <p className="mt-4 font-semibold text-slate-900">Jennifer M.</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-6">
                  <p className="text-xl font-semibold text-orange-500">⭐⭐⭐⭐⭐</p>
                  <p className="mt-4 italic">“Exceptional service and outstanding workmanship. We will definitely use Standard General Construction again for future projects.”</p>
                  <p className="mt-4 font-semibold text-slate-900">Robert E.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 text-slate-600 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-950">Let's Build Something Great Together</h2>
            <p className="mt-6 text-lg leading-8">
              Ready to start your next project?
            </p>
            <p className="mt-4 leading-8">
              Contact Standard General Construction today and discover how our expertise, dedication, and commitment to excellence can bring your vision to life.
            </p>
            <p className="mt-6 font-semibold text-slate-900">Quality. Integrity. Reliability.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
