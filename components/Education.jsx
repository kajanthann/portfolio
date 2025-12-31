import React from 'react'

const Education = () => {
  const educationList = [
    {
      level: "O/L",
      institution: "ABC College, Sri Lanka",
      year: "2016",
      description: "Completed General Certificate of Education Ordinary Level with distinction in Mathematics and Science."
    },
    {
      level: "A/L",
      institution: "ABC College, Sri Lanka",
      year: "2018",
      description: "Completed Advanced Level in Science stream with focus on Physics, Chemistry, and Mathematics."
    },
    {
      level: "University",
      institution: "XYZ University, Sri Lanka",
      year: "2022",
      description: "B.Tech in Computer Science with specialization in ML & IoT. Gained hands-on experience in projects and research."
    }
  ]

  return (
    <section id="education" className="w-full bg-white px-8 lg:px-16 py-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Title */}
        <div className="lg:w-1/3 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
        </div>

        {/* Right Column: Timeline */}
        <div className="lg:w-2/3 flex flex-col gap-8">
          {educationList.map((edu, index) => (
            <div key={index} className="border-l-2 border-gray-300 pl-6 relative">
              <span className="absolute -left-[7px] top-2 w-3 h-3 bg-gray-800 rounded-full"></span>
              <h3 className="text-xl font-semibold">{edu.level}</h3>
              <h4 className="text-gray-700">{edu.institution} • {edu.year}</h4>
              <p className="text-gray-600 mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
