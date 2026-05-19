import '../styles.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Services from './components/Services'
import Projects from './components/Projects'
import ProjectsGallery from './components/ProjectsGallery'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Intro />
        <Services />
        <Projects />
        <ProjectsGallery />
        <CTASection />
        <Footer />
      </main>
    </div>
  )
}

export default App
