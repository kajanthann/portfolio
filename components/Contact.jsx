'use client'
import React, { useState } from 'react'
import { FiMail, FiPhone, FiMapPin  } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaTwitter, FaPaperPlane  } from 'react-icons/fa'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you, ${formData.name}! Your message has been sent.`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="w-full px-8 lg:px-16 py-20 bg-white scroll-mt-20">
        <div className='flex justify-center items-center'>
            <h2 className="text-2xl md:text-4xl font-semibold mb-7">Contact Me</h2>
        </div>
        
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Column: Info */}
        <div className="lg:w-1/3 flex flex-col justify-start">
          <p className="text-gray-900 mb-6 text-xl">
            Have a question or want to work together? Fill out the form and I’ll get back to you as soon as possible.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 text-gray-700 mb-6">
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
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 text-gray-700 mt-4">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-full hover:opacity-90 transition w-fit self-end mt-2"
            >
              Send Message <FaPaperPlane  className="inline-block ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
