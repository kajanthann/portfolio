'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const sections = ['home', 'about', 'services', 'work', 'contact']

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)  

      // Update active section
      let current = 'home'
      for (let section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop - 100 // offset for navbar height
          if (window.scrollY >= top) {
            current = section
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Header Background */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 -translate-y-[80%]">
        <Image
          src={assets.header_bg_color}
          alt="header background"
          className="w-full"
          priority
        />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 z-50 w-full flex items-center justify-between px-5 lg:px-8 xl:px-[8%] py-3
          transition-all duration-300
          ${isScrolled ? 'bg-white/60 backdrop-blur-lg shadow-sm' : ''}
        `}
      >
        {/* Logo */}
        <a href="#top">
          <Image alt="logo" src={assets.logo} className="w-28 cursor-pointer mr-14" />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-2 text-gray-600 rounded-full shadow-sm transition
            ${isScrolled ? 'bg-white/70' : 'bg-white/50'}
          `}
        >
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`transition-colors ${
                  activeSection === section ? 'text-black border-b-2 border-black ' : 'text-gray-600'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(true)} className="block md:hidden">
            <Image alt="menu" src={assets.menu_black} className="w-6" />
          </button>

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 px-8 py-1 border border-gray-400 rounded-full ml-4"
          >
            Contact
            <Image alt="arrow" src={assets.arrow_icon} className="w-3" />
          </a>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`fixed top-0 right-0 md:hidden flex flex-col gap-4 px-10 py-20 text-gray-600
            bg-rose-50 w-64 h-screen z-50 transition-transform duration-300
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          {/* Close Button */}
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6">
            <Image alt="close" src={assets.close_black} className="w-5 cursor-pointer" />
          </button>

          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
                className={`${activeSection === section ? 'text-gray-800 font-semibold' : 'text-gray-600'}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
