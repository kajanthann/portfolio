import React from "react";
import Tag from "../components/Tag";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";

const EXPERIENCES = [
  {
    role: "AI/ML & Computer Vision",
    org: "Academic & Personal Projects",
    desc: "Developing AI and computer vision solutions using Python, TensorFlow, YOLO, and OpenCV for intelligent real-world applications, including accident detection and image-based analysis.",
    tags: ["Python", "TensorFlow", "YOLO", "OpenCV"],
  },
  {
    role: "Embedded Systems & IoT",
    org: "Academic & Personal Projects",
    desc: "Designing and developing embedded and IoT systems using ESP32, STM32, Raspberry Pi, sensors, communication protocols, and cloud platforms for real-world applications.",
    tags: ["ESP32", "STM32", "Raspberry Pi", "MQTT", "LoRa"],
  },
  {
    role: "Full-Stack Development",
    org: "Academic & Personal Projects",
    desc: "Building full-stack web and mobile applications using React, Node.js, Express, MongoDB, Firebase, and modern development tools for practical software solutions.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
  },
];

export default function Experience() {
  return (
    <section id="Experience" className="py-16 scroll-mt-16 border-t border-slate-200">
      <SectionTitle>Technical Experience</SectionTitle>
      <div className="flex flex-col gap-4">
        {EXPERIENCES.map((exp, index) => (
          <Card
            key={index}
            className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between flex-wrap gap-3 mb-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">{exp.role}</p>
                <p className="mt-1 text-xs font-mono text-green-600">{exp.org}</p>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-slate-600">{exp.desc}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}