'use client'
import React from 'react'
import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const workData = [
    { 
      title: 'Portfolio Website', 
      description: 'A personal website built with React and Tailwind CSS.', 
      image: '/work-1.png', 
      year: '2023',
      link: 'https://your-portfolio-link.com'
    },
    { 
      title: 'E-commerce App', 
      description: 'Full-stack e-commerce app using Node.js and MongoDB.', 
      image: '/work-2.png', 
      year: '2023',
      link: 'https://your-ecommerce-link.com'
    },
    { 
      title: 'IoT Smart Home', 
      description: 'Automating home appliances with sensors.', 
      image: '/work-3.png', 
      year: '2022',
      link: '#'
    },
    { 
      title: 'ML Model', 
      description: 'Predictive ML model for stock prices.', 
      image: '/work-4.png', 
      year: '2022',
      link: '#'
    },
    { 
      title: 'Smart Agriculture', 
      description: 'IoT based smart agriculture monitoring system.', 
      image: '/work-5.png', 
      year: '2022',
      link: '#'
    },
    { 
      title: 'Portfolio Redesign', 
      description: 'Redesign of personal portfolio with animations.', 
      image: '/work-6.png', 
      year: '2023',
      link: '#'
    },
    { 
      title: 'ML Model', 
      description: 'Predictive ML model for stock prices.', 
      image: '/work-4.png', 
      year: '2022',
      link: '#'
    },
    { 
      title: 'Smart Agriculture', 
      description: 'IoT based smart agriculture monitoring system.', 
      image: '/work-5.png', 
      year: '2022',
      link: '#'
    },
    { 
      title: 'Portfolio Redesign', 
      description: 'Redesign of personal portfolio with animations.', 
      image: '/work-6.png', 
      year: '2023',
      link: '#'
    },
  ]

  return (
    <section id="work" className="w-full h-screen px-8 lg:px-16 py-20 bg-white">
      <div className="max-w-6xl mx-auto h-full flex gap-12">
        
        {/* Left Column: Fixed Title */}
        <div className="lg:w-1/3 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold mb-4">
            Projects / Work
          </h2>
        </div>

        {/* Right Column: Scrollable Projects */}
        <div className="lg:w-2/3 h-full overflow-y-scroll pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <div className="grid grid-cols-1 mt-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {workData.map((project, index) => (
              <div
                key={index}
                className="relative border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Project Image */}
                <div className="w-full h-40 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Project Details */}
                <div className="p-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-gray-600 text-xs">{project.description}</p>
                </div>
                {/* External Link Icon */}
                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-2 right-2 text-white bg-black bg-opacity-60 p-1 rounded-full hover:bg-opacity-80 transition"
                      title="Visit project"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects
