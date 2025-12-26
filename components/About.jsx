import { assets, infoList } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

// Updated list of languages and tools
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
  { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql' },
  { name: 'Arduino', icon: 'https://skillicons.dev/icons?i=arduino' },
  { name: 'C', icon: 'https://skillicons.dev/icons?i=c' },
  { name: 'Java', icon: 'https://skillicons.dev/icons?i=java' },
  { name: 'TensorFlow', icon: 'https://skillicons.dev/icons?i=tensorflow' },
  { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
  { name: 'GitHub', icon: 'https://skillicons.dev/icons?i=github' },
  { name: 'Linux', icon: 'https://skillicons.dev/icons?i=linux' },
  { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },
  { name: 'VSCode', icon: 'https://skillicons.dev/icons?i=vscode' },
]

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-[8%] lg:px-[12%] py-24 scroll-mt-20"
    >
      {/* Section Heading */}
      <h4 className="text-center mb-2 text-lg text-gray-500">Introduction</h4>
      <h2 className="text-center mb-14 text-4xl font-semibold">About Me</h2>

      {/* Content */}
      <div className="flex w-full flex-col lg:flex-row items-center gap-20">
        {/* Profile Image */}
        <div className="w-64 sm:w-80 rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={assets.profile_img}
            alt="Kajanthan profile"
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Text & Info */}
        <div className="flex-1">
          {/* Description */}
          <p className="max-w-2xl mb-12 text-gray-600 leading-relaxed">
            I am a passionate{' '}
            <span className="font-medium text-gray-800">ML & IoT Engineer</span>{' '}
            with hands-on experience in building intelligent systems that bridge
            hardware and data-driven software. My work focuses on autonomous
            systems, smart devices, and applying machine learning to solve
            real-world problems.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border border-gray-300 p-6 rounded-xl cursor-pointer
                           hover:bg-slate-50 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <Image src={icon} alt={`${title} icon`} className="w-7" />
                <h3 className="my-4 font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </li>
            ))}
          </ul>

          {/* Tools & Languages */}
          <div className="mt-14">
            <h4 className="mb-6 text-gray-700 font-medium">
              Languages & Tools
            </h4>
            <ul className="flex flex-wrap gap-4 items-center">
              {languagesAndTools.map((tool, index) => (
                <li
                  key={index}
                  className="p-3 border flex items-center justify-center w-12 sm:w-14 aspect-square border-gray-300 rounded-lg hover:bg-slate-50 hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
                  title={tool.name}
                >
                  <img src={tool.icon} alt={tool.name} className="w-6 sm:w-8" />
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
