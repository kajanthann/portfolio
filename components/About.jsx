import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const languagesAndTools = [
  { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
  { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
  { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
  { name: 'Bootstrap', icon: 'https://skillicons.dev/icons?i=bootstrap' },
  { name: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind' },
  { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
  { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
  { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
  { name: 'Python', icon: 'https://skillicons.dev/icons?i=py' },
  { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
  { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
  { name: 'Firebase', icon: 'https://skillicons.dev/icons?i=firebase' },
  { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
  { name: 'GitHub', icon: 'https://skillicons.dev/icons?i=github' },
  { name: 'VSCode', icon: 'https://skillicons.dev/icons?i=vscode' },
]

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-[8%] lg:px-[12%] py-24 scroll-mt-20 bg-gradient-to-b from-white to-gray-50"
    >
      {/* Section Heading */}
      <h2 className="text-center mb-14 text-4xl font-semibold text-gray-900">
        About Me
      </h2>

      {/* Content */}
      <div className="flex w-full flex-col lg:flex-row items-center gap-20">
        {/* Profile Image */}
        <div className="w-64 sm:w-80 rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105">
          <Image
            src={assets.profile_img}
            alt="Kajanthan profile"
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Text & Info */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Description */}
          <p className="max-w-2xl text-gray-600 leading-relaxed text-lg animate-fadeIn">
            I am a passionate{' '}
            <span className="font-medium text-gray-800">ML & IoT Engineer</span>{' '}
            with hands-on experience in building intelligent systems that bridge
            hardware and data-driven software. My work focuses on autonomous
            systems, smart devices, and applying machine learning to solve
            real-world problems.
          </p>

          {/* Divider */}
          <div className="border-t border-gray-200 my-6 w-full"></div>

          {/* Languages & Tools */}
          <div>
            <h4 className="mb-6 text-gray-700 font-medium text-xl">
              Languages & Tools
            </h4>
            <ul className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 items-center">
              {languagesAndTools.map((tool, index) => (
                <li
                  key={index}
                  className="p-3 border flex items-center justify-center aspect-square border-gray-300 rounded-lg hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 transition cursor-pointer"
                  title={tool.name}
                >
                  <img src={tool.icon} alt={tool.name} className="w-8 h-8" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
