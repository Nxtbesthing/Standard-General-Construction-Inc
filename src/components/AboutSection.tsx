import { useEffect, useState, type FormEvent } from 'react'

type Review = {
  id: string
  name: string
  job: string
  rating: number
  comment: string
  date: string
}

const defaultReviews: Review[] = [
  {
    id: '1',
    name: 'Michael A.',
    job: 'Commercial build',
    rating: 5,
    comment: 'Standard General Construction exceeded our expectations from start to finish. Their attention to detail, professionalism, and commitment to quality made our project a complete success.',
    date: 'May 2025',
  },
  {
    id: '2',
    name: 'Sarah T.',
    job: 'Retail renovation',
    rating: 5,
    comment: 'The team delivered our commercial building on schedule and within budget. Communication was excellent throughout the entire process.',
    date: 'July 2025',
  },
  {
    id: '3',
    name: 'David K.',
    job: 'Residential renovation',
    rating: 5,
    comment: 'Working with Standard General Construction was one of the best decisions we made. Their expertise and dedication gave us confidence every step of the way.',
    date: 'September 2025',
  },
  {
    id: '4',
    name: 'Jennifer M.',
    job: 'Kitchen remodel',
    rating: 4,
    comment: 'The renovation was completed with great care and professionalism. The final result was impressive, and the team was always responsive to our needs.',
    date: 'November 2025',
  },
]

const STORAGE_KEY = 'sgci-client-reviews'

const starDisplay = (rating: number) => {
  return Array.from({ length: 5 }, (_, index) => (
    <span key={index} className="text-orange-500">
      {index < rating ? '★' : '☆'}
    </span>
  ))
}

const AboutSection = () => {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews)
  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(5)
  const [error, setError] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as Review[]
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews(parsed)
        }
      }
    } catch {
      setReviews(defaultReviews)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews))
  }, [reviews])

  const totalReviews = reviews.length
  const averageRating = totalReviews > 0 ? reviews.reduce((sum: number, review: Review) => sum + review.rating, 0) / totalReviews : 0

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    if (!name.trim() || !job.trim() || !comment.trim()) {
      setError('Please provide your name, job/project, comment, and rating.')
      return
    }

    const newReview: Review = {
      id: Date.now().toString(),
      name: name.trim(),
      job: job.trim(),
      rating,
      comment: comment.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    }

    setReviews([newReview, ...reviews])
    setName('')
    setJob('')
    setComment('')
    setRating(5)
  }

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
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-950">Client Reviews</h2>
                  <p className="mt-3 text-slate-600">Submit a review after your job is completed and help us improve our service quality.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-6">
                    <p className="text-sm uppercase tracking-[0.28em] text-orange-500">Client count</p>
                    <p className="mt-4 text-4xl font-bold text-slate-950">{totalReviews}</p>
                    <p className="mt-2 text-slate-600">clients have submitted reviews</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-6">
                    <p className="text-sm uppercase tracking-[0.28em] text-orange-500">Average rating</p>
                    <p className="mt-4 text-4xl font-bold text-slate-950">{averageRating.toFixed(1)}</p>
                    <p className="mt-2 text-slate-600">stars across all reviews</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl bg-slate-50 p-6">
                  <div>
                    <label className="text-sm font-semibold text-slate-950" htmlFor="reviewName">Name</label>
                    <input
                      id="reviewName"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-950" htmlFor="reviewJob">Job / Project</label>
                    <input
                      id="reviewJob"
                      value={job}
                      onChange={(event) => setJob(event.target.value)}
                      className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                      placeholder="Project name or service provided"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-950">Rating</label>
                    <div className="mt-3 flex items-center gap-2 text-2xl">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          type="button"
                          key={value}
                          onClick={() => setRating(value)}
                          className={`rounded-full px-3 py-2 text-white transition ${value <= rating ? 'bg-orange-500' : 'bg-slate-300 text-slate-700'}`}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-950" htmlFor="reviewComment">Comment</label>
                    <textarea
                      id="reviewComment"
                      value={comment}
                      onChange={(event) => setComment(event.target.value)}
                      rows={4}
                      className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                      placeholder="Tell us about the work and how it went"
                    />
                  </div>
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                  >
                    Submit review
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-950">Latest client feedback</h2>
            <div className="mt-8 space-y-6 text-slate-600">
              {reviews.slice(0, 5).map((review) => (
                <div key={review.id} className="rounded-3xl bg-slate-50 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-slate-950">{review.name}</p>
                      <p className="text-sm text-slate-500">{review.job} • {review.date}</p>
                    </div>
                    <div className="text-xl font-semibold text-orange-500">{starDisplay(review.rating)}</div>
                  </div>
                  <p className="mt-4 italic text-slate-700">“{review.comment}”</p>
                </div>
              ))}
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
