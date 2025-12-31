'use client'
import React from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 pt-10 pb-5">
      <div className="max-w-6xl mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About / Logo */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-white">Kajanthan</h1>
          <p className="text-gray-400">
            ML & IoT Engineer. Building intelligent systems bridging hardware & software.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <a href="#about" className="hover:text-white transition">About Me</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#work" className="hover:text-white transition">Projects</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-white mb-2">Contact</h3>
          <div className="flex items-center gap-2">
            <FiMail className="text-xl" />
            <span>kajanthan@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FiPhone className="text-xl" />
            <span>+94 123 456 789</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMapPin className="text-xl" />
            <span>Sri Lanka</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-2 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Kajanthan. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
