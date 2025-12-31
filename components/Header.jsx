'use client'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <section
      id="top"
      className="w-11/12 max-w-4xl mx-auto h-screen flex flex-col items-center justify-center text-center gap-6"
    >
      <svg className="absolute -z-10 -mt-50" width="890" height="364" viewBox=" 0 890 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="#e2e8f0" d="M.5.5h63.825v63.825H.5zm0 380.85h63.825v63.825H.5zM444.824.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM.5 190.924h63.825v63.825H.5zm0 380.849h63.825v63.825H.5zm444.324-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M.5 63.975h63.825V127.8H.5zm0 380.849h63.825v63.825H.5zM444.824 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM.5 254.4h63.825v63.825H.5zm0 380.85h63.825v63.825H.5zM444.824 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M.5 127.449h63.825v63.825H.5zm0 380.85h63.825v63.825H.5zm444.324-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM.5 317.875h63.825V381.7H.5zm0 380.85h63.825v63.825H.5zm444.324-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM635.248.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924 190.924h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zm444.324-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M190.924 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM635.248 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM190.924 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM635.248 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M190.924 127.449h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zm444.324-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924 317.875h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zm444.324-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM127.449.5h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M127.449 381.35h63.825v63.825h-63.825zM571.775.5H635.6v63.825h-63.825zm0 380.85H635.6v63.825h-63.825zM127.449 190.924h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zm444.326-380.849H635.6v63.825h-63.825zm0 380.849H635.6v63.825h-63.825zM127.449 63.975h63.825V127.8h-63.825z" />
                <path stroke="#e2e8f0" d="M127.449 444.824h63.825v63.825h-63.825zM571.775 63.975H635.6V127.8h-63.825zm0 380.849H635.6v63.825h-63.825zM127.449 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM571.775 254.4H635.6v63.825h-63.825zm0 380.85H635.6v63.825h-63.825zM127.449 127.449h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M127.449 508.299h63.825v63.825h-63.825zm444.326-380.85H635.6v63.825h-63.825zm0 380.85H635.6v63.825h-63.825zM127.449 317.875h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zm444.326-380.85H635.6V381.7h-63.825zm0 380.85H635.6v63.825h-63.825zM317.873.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM762.197.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM317.873 190.924h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zm444.324-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M317.873 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM762.197 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM317.873 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM762.197 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M317.873 127.449h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zm444.324-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM317.873 317.875h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zm444.324-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM63.973.5h63.825v63.825H63.973zm0 380.85h63.825v63.825H63.973zM508.297.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM63.973 190.924h63.825v63.825H63.973zm0 380.849h63.825v63.825H63.973zm444.324-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M63.973 63.975h63.825V127.8H63.973zm0 380.849h63.825v63.825H63.973zM508.297 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM63.973 254.4h63.825v63.825H63.973zm0 380.85h63.825v63.825H63.973zM508.297 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M63.973 127.449h63.825v63.825H63.973zm0 380.85h63.825v63.825H63.973zm444.324-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM63.973 317.875h63.825V381.7H63.973zm0 380.85h63.825v63.825H63.973zm444.324-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM254.4.5h63.825v63.825H254.4zm0 380.85h63.825v63.825H254.4zM698.725.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM254.4 190.924h63.825v63.825H254.4zm0 380.849h63.825v63.825H254.4zm444.325-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M254.4 63.975h63.825V127.8H254.4zm0 380.849h63.825v63.825H254.4zM698.725 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM254.4 254.4h63.825v63.825H254.4zm0 380.85h63.825v63.825H254.4zM698.725 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M254.4 127.449h63.825v63.825H254.4zm0 380.85h63.825v63.825H254.4zm444.325-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM254.4 317.875h63.825V381.7H254.4zm0 380.85h63.825v63.825H254.4zm444.325-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924.5h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M190.924 381.35h63.825v63.825h-63.825zM635.248.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924 190.924h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zm444.324-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zM190.924 63.975h63.825V127.8h-63.825z" />
                <path stroke="#e2e8f0" d="M190.924 444.824h63.825v63.825h-63.825zM635.248 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM190.924 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM635.248 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924 127.449h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M190.924 508.299h63.825v63.825h-63.825zm444.324-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924 317.875h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zm444.324-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM381.352.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM825.674.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM381.352 190.924h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zm444.322-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M381.352 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM825.674 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM381.352 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM825.674 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                <path stroke="#e2e8f0" d="M381.352 127.449h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zm444.322-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM381.352 317.875h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zm444.322-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                <path fill="url(#a)" d="M0 0h889.999v763.049H0z" />
                <defs>
                    <radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 381.525 -445 0 445 381.525)">
                        <stop offset=".293" stopColor="#fff" stopOpacity="0" />
                        <stop offset="1" stopColor="#fff" />
                    </radialGradient>
                </defs>
            </svg>
      {/* Profile Image */}
      <Image
        src={assets.profile_img}
        alt="profile"
        className="rounded-full w-40 h-40 object-cover"
        priority
      />

      

      {/* Greeting */}
      <h3 className="text-2xl font-semibold flex items-center gap-2">
        Hi, I’m Kajanthan
        <Image src={assets.hand_icon} alt="wave" className="w-6 h-6 inline-block origin-bottom-right animate-hand-wave" />
      </h3>

      {/* Main Title */}
      <div className="text-2xl md:text-4xl text-primary-600 dark:text-primary-400 mb-6">
            <TypeAnimation
              sequence={[
            'ML Engineer', 2000,
            'IoT Engineer', 2000,
            'AI Developer', 2000,
          ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </div>

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
