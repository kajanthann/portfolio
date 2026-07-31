import React, { useEffect, useState } from "react";

import Tag from "../components/Tag";
import SectionTitle from "../components/SectionTitle";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const PROJECTS_API =
  `${API_URL}/api/projects/all-projects`;


export default function Projects() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchProjects = async () => {

      try {

        const res = await fetch(PROJECTS_API);

        const data = await res.json();

        setProjects(data);

      } catch(error){

        console.error(
          "Failed to fetch projects:",
          error
        );

      } finally {

        setLoading(false);

      }

    };


    fetchProjects();

  }, []);



  return (

    <section
      id="Projects"
      className="
        py-16
        scroll-mt-16
        border-t
        border-slate-200
      "
    >

      <SectionTitle>
        Projects
      </SectionTitle>


      {loading ? (

        <p className="
          text-sm
          font-mono
          text-slate-400
        ">
          Loading projects...
        </p>


      ) : (

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
        "
      >

        {projects.map((project)=>(


          <div
            key={project._id}
            className="
              overflow-hidden
              rounded-xl
              border
              border-slate-200
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-green-500/40
              hover:shadow-lg
            "
          >


            {/* Image */}

            <div
              className="
                relative
                h-40
                overflow-hidden
              "
            >

              <img
                src={project.image}
                alt={project.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-500
                  hover:scale-105
                "
              />


              <div
                className="
                  absolute
                  inset-0
                  bg-black/20
                "
              />


              {/* Status */}

              <span
                className={`
                  absolute
                  right-3
                  top-3
                  rounded-full
                  border
                  px-2
                  py-1
                  text-[10px]
                  font-mono

                  ${
                    project.status === "Completed"
                    ?
                    "bg-green-100 text-green-700 border-green-500/30"
                    :
                    project.status === "In Progress"
                    ?
                    "bg-yellow-100 text-yellow-700 border-yellow-500/30"
                    :
                    "bg-blue-100 text-blue-700 border-blue-500/30"
                  }
                `}
              >

                {project.status}

              </span>



              {/* Links */}

              <div
                className="
                  absolute
                  bottom-3
                  left-3
                  flex
                  gap-2
                "
              >

                {project.github && (

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded
                      bg-white/90
                      text-slate-700
                      shadow
                      transition
                      hover:bg-green-600
                      hover:text-white
                    "
                    title="Github"
                  >

                    <FaGithub size={15}/>

                  </a>

                )}



                {project.demo && (

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded
                      bg-white/90
                      text-slate-700
                      shadow
                      transition
                      hover:bg-green-600
                      hover:text-white
                    "
                    title="Live Demo"
                  >

                    <FaExternalLinkAlt size={12}/>

                  </a>

                )}

              </div>

            </div>




            {/* Content */}

            <div
              className="
                p-4
              "
            >

              <h3
                className="
                  mb-2
                  text-sm
                  font-semibold
                  text-slate-900
                "
              >

                {project.title}

              </h3>



              <p
                className="
                  mb-3
                  text-xs
                  leading-relaxed
                  text-slate-600
                "
              >

                {project.desc}

              </p>



              <div
                className="
                  flex
                  flex-wrap
                  gap-1
                  border-t
                  pt-2
                  border-slate-200
                "
              >

                {project.tags.map((tag,index)=>(

                  <Tag key={index}>
                    {tag}
                  </Tag>

                ))}

              </div>


            </div>


          </div>


        ))}


      </div>

      )}

    </section>

  );

}