import project1 from '../assets/images/project 1.jpg'
import project2 from '../assets/images/project 2.jpg'
import project3 from '../assets/images/project 3.jpg'
import project4 from '../assets/images/project 4.jpg'
import project5 from '../assets/images/project5.jpg'
import project6 from '../assets/images/project6.jpg'
import project7 from '../assets/images/project7.jpg'
import project8 from '../assets/images/project8.jpg'
import project9 from '../assets/images/project9.jpg'
import project10 from '../assets/images/project10.jpg'

const galleryImages = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
]

const ProjectsGallery = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Projects Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={image}
                srcSet={`${image} 1x, ${image} 2x`}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                loading="lazy"
                decoding="async"
                alt={`Project ${index + 1}`}
                className="w-full h-80 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProjectsGallery