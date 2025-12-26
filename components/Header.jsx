import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <section
      id="top"
      className="w-11/12 max-w-4xl mx-auto h-screen flex flex-col items-center justify-center text-center gap-6"
    >
      {/* Profile Image */}
      <Image
        src={assets.profile_img}
        alt="Kajanthan profile photo"
        className="rounded-full w-40 h-40 object-cover"
        priority
      />

      {/* Greeting */}
      <h3 className="text-2xl font-semibold flex items-center gap-2">
        Hi, I’m Kajanthan
        <Image src={assets.hand_icon} alt="wave" className="w-6 h-6" />
      </h3>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight">
        ML & IoT Engineer
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-gray-600">
        I design and build intelligent systems using Machine Learning and IoT,
        focusing on real-world automation, smart devices, and data-driven solutions.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        
        <a
          href="#contact"
          className="group px-10 py-3 rounded-full bg-black text-white flex items-center gap-2 transition hover:opacity-90"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="arrow"
            className="w-4 transition-transform group-hover:translate-x-2"
          />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="group px-10 py-3 rounded-full border border-gray-400 flex items-center gap-2 transition hover:bg-black hover:text-white"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="download"
            className="w-4"
          />
        </a>
      </div>
    </section>
  )
}

export default Header
