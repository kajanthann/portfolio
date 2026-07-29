import React from "react";

import Tag from "../components/Tag";
import SectionTitle from "../components/SectionTitle";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const PROJECTS = [
  {
    title: "Smart Accident Detection & Real-Time Alert System",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    desc: "Final year project developing an intelligent accident detection system using ESP32, Raspberry Pi, sensor fusion, GPS tracking, computer vision, and AI-based emergency alerts.",
    tags: ["ESP32", "Raspberry Pi", "YOLO", "GPS", "Python", "IoT"],
    status: "In Progress",
    github: "https://github.com/kajanthan",
    demo: null,
  },

  {
    title: "CowGuard - Smart Livestock Monitoring System",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80",
    desc: "IoT livestock monitoring platform using ESP32, LoRa communication, GPS tracking, MQTT, Firebase, and React dashboard for real-time monitoring.",
    tags: ["ESP32", "LoRa", "MQTT", "Firebase", "React", "Node.js"],
    status: "Completed",
    github: "https://github.com/kajanthan",
    demo: "https://cowguard.vercel.app",
  },

  {
    title: "AI Image Caption Generator",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    desc: "Deep learning project using CNN feature extraction and LSTM sequence generation to automatically generate captions from images.",
    tags: ["TensorFlow", "CNN", "LSTM", "Python"],
    status: "Completed",
    github: "https://github.com/kajanthan",
    demo: null,
  },

  {
    title: "RAG Based AI Assistant",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
    desc: "Retrieval-Augmented Generation system using embeddings, vector databases, LLMs, and document-based question answering.",
    tags: ["Python", "RAG", "LLM", "MongoDB", "Vector Search"],
    status: "Completed",
    github: "https://github.com/kajanthan",
    demo: null,
  },

  {
    title: "IoT Edge Computing Platform",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    desc: "Edge IoT platform using Raspberry Pi, MQTT broker, SQLite, and Node-RED for sensor data processing and local storage.",
    tags: ["Raspberry Pi", "MQTT", "SQLite", "Node-RED"],
    status: "Prototype",
    github: "https://github.com/kajanthan",
    demo: null,
  },

  {
    title: "MERN Full Stack Applications",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    desc: "Full-stack web applications built using React, Next.js, Node.js, Express.js, MongoDB, Firebase, and REST APIs.",
    tags: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    status: "Completed",
    github: "https://github.com/kajanthan",
    demo: null,
  },
];

export default function Projects() {
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
      <SectionTitle>Projects</SectionTitle>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
        "
      >
        {PROJECTS.map((project, index) => (
          <div
            key={index}
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
            {/* Image Section */}

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
                      ? "bg-green-100 text-green-700 border-green-500/30"
                      : project.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-700 border-yellow-500/30"
                        : "bg-blue-100 text-blue-700 border-blue-500/30"
                  }
                `}
              >
                {project.status}
              </span>

              {/* Project Links */}

              <div
                className="
                  absolute
                  bottom-3
                  left-3
                  flex
                  gap-2
                "
              >
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
                  title="GitHub Repository"
                >
                  <FaGithub size={15} />
                </a>

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
                    title="Live Website"
                  >
                    <FaExternalLinkAlt size={12} />
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
                  mb-4
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
                  gap-1 border-t pt-2
                  border-slate-200
                "
              >
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
