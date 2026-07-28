import React from "react";

import Tag from "../components/Tag";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";


const EXPERIENCES = [
  {
    role: "AI/ML & Computer Vision Projects",
    org: "Academic & Personal Projects",
    period: "2024 – Present",
    desc:
      "Developed AI and computer vision solutions using Python, TensorFlow, YOLO, and OpenCV for intelligent real-world applications.",
    tags: [
      "Python",
      "TensorFlow",
      "YOLO",
      "OpenCV",
    ],
  },

  {
    role: "Embedded Systems & IoT Development",
    org: "Academic & Personal Projects",
    period: "2023 – Present",
    desc:
      "Built embedded and IoT systems using ESP32, STM32, Raspberry Pi, sensors, communication protocols, and cloud platforms.",
    tags: [
      "ESP32",
      "STM32",
      "Raspberry Pi",
      "MQTT",
      "LoRa",
    ],
  },

  {
    role: "Full Stack Web Development",
    org: "Personal Projects",
    period: "2024 – Present",
    desc:
      "Developed full-stack applications using MERN stack and modern technologies including React, Next.js, Node.js, Express, Firebase, and MongoDB.",
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Firebase",
    ],
  },
];


export default function Experience() {

  return (

    <section
      id="Experience"
      className="
        py-16
        scroll-mt-16
        border-t
        border-slate-200
      "
    >

      <SectionTitle>
        Technical Experience
      </SectionTitle>


      <div
        className="
          flex
          flex-col
          gap-4
        "
      >

        {EXPERIENCES.map((exp,index)=>(

          <Card
            key={index}
            className="
              bg-white
              border
              border-slate-200
              shadow-sm
              hover:shadow-md
              transition
            "
          >


            {/* Header */}

            <div
              className="
                flex
                justify-between
                flex-wrap
                gap-3
                mb-3
              "
            >

              <div>

                <p
                  className="
                    text-sm
                    font-semibold
                    text-slate-900
                  "
                >
                  {exp.role}
                </p>


                <p
                  className="
                    mt-1
                    text-xs
                    font-mono
                    text-green-600
                  "
                >
                  {exp.org}
                </p>

              </div>


              <span
                className="
                  text-xs
                  font-mono
                  text-slate-500
                "
              >
                {exp.period}
              </span>


            </div>



            {/* Description */}

            <p
              className="
                mb-4
                text-sm
                leading-relaxed
                text-slate-600
              "
            >
              {exp.desc}
            </p>



            {/* Technologies */}

            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >

              {exp.tags.map((tag)=>(

                <Tag key={tag}>
                  {tag}
                </Tag>

              ))}

            </div>


          </Card>

        ))}


      </div>


    </section>

  );

}