import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="w-full min-h-screen px-8 lg:px-16 flex jubstify-center items-center bg-white py-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Title */}
        <div className="lg:w-1/3 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold">
            Experience
          </h2>
        </div>

        {/* Right Column: Timeline */}
        <div className="lg:w-2/3 flex flex-col gap-8">
          <div className="border-l-2 border-gray-300 pl-6 relative">
            {/* Timeline marker */}
            <span className="absolute -left-[7px] top-2 w-3 h-3 bg-gray-800 rounded-full"></span>

            <h3 className="text-xl font-semibold">Currently Studying</h3>
            <h4 className="text-gray-700">B.Tech in Computer Science • XYZ University</h4>
            <p className="text-gray-600 mt-2">
              I am currently pursuing my degree in Computer Science with a focus on Machine Learning and IoT. 
              Working on hands-on projects and research to gain practical skills and prepare for future opportunities.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
