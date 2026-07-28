import React from "react";

import {
  FaPython,
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiEspressif,
  SiStmicroelectronics,
  SiRaspberrypi,
  SiTensorflow,
  SiOpencv,
  SiMqtt,
  SiFlutter,
  SiArduino,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFastapi,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiPlatformio,
  SiLinux,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

const SKILLS = [
  {
    name: "C/C++",
    icon: SiCplusplus,
    color: "text-blue-700",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "text-yellow-500",
  },
  {
    name: "Java",
    icon: FaJava,
    color: "text-red-600",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
  },

  {
    name: "STM32",
    icon: SiStmicroelectronics,
    color: "text-blue-700",
  },
  {
    name: "ESP32",
    icon: SiEspressif,
    color: "text-black",
  },
  {
    name: "Arduino",
    icon: SiArduino,
    color: "text-teal-500",
  },
  {
    name: "Raspberry Pi",
    icon: SiRaspberrypi,
    color: "text-red-500",
  },
  {
    name: "PlatformIO",
    icon: SiPlatformio,
    color: "text-orange-500",
  },

  {
    name: "TensorFlow",
    icon: SiTensorflow,
    color: "text-orange-500",
  },
  {
    name: "OpenCV",
    icon: SiOpencv,
    color: "text-green-600",
  },
  {
    name: "YOLO",
    icon: SiOpencv,
    color: "text-purple-600",
  },

  {
    name: "MQTT",
    icon: SiMqtt,
    color: "text-purple-500",
  },

  {
    name: "HTML",
    icon: FaHtml5,
    color: "text-orange-600",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "text-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-500",
  },
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "text-blue-400",
  },

  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-600",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-800",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "text-teal-500",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "text-yellow-500",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-600",
  },

  {
    name: "VS Code",
    icon: VscCode,
    color: "text-blue-500",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "text-orange-600",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "text-black",
  },
  {
    name: "Linux",
    icon: SiLinux,
    color: "text-yellow-600",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "text-orange-500",
  },
];

const STATS = [
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "3+",
    label: "Years Coding",
  },
  {
    value: "2026",
    label: "Final Year",
  },
];

export default function About() {
  return (
    <section
      id="About"
      className="
        pt-20
        pb-16
        scroll-mt-16
      "
    >
      <p
        className="
          mb-3
          text-sm
          font-mono
          text-green-600
        "
      >
        {">"} hello_world.init()
      </p>

      <h2
        className="
          text-2xl
          font-semibold
          leading-tight
          text-slate-900
          lg:text-3xl
        "
      >
        Final Year
        <br />
        <span className="text-green-600">Software Engineering</span>
        <br />
        Undergraduate
      </h2>

      <p
        className="
          mt-5
          max-w-xl
          text-base
          leading-relaxed
          text-slate-800
        "
      >
        I am a Software Engineering undergraduate passionate about{" "}
        <span className="font-medium text-green-600">
          Embedded Systems, Firmware Engineering, IoT, Artificial Intelligence,
          and Robotics.
        </span>{" "}
        I build intelligent real-world systems by combining microcontrollers,
        sensors, edge computing, cloud platforms, and machine learning.
        <br />
        <br />
        Currently, I am developing my final-year project,{" "}
        <span className="font-medium text-green-600">
          Smart Accident Detection & Real-Time Alert System
        </span>
        , using ESP32, Raspberry Pi, sensor fusion, GPS tracking, computer
        vision, and AI-based accident analysis.
        <br />
        <br />
        My interests include building{" "}
        <span className="font-medium text-green-600">
          autonomous robots, IoT platforms, embedded AI solutions, and firmware
          applications.
        </span>
      </p>

      {/* Skills */}

      <div
        className="
          mt-8
          mb-10
          flex
          flex-wrap
          gap-3
        "
      >
        {SKILLS.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="
                group
                flex
                items-center
                gap-3
                rounded
                border
                border-slate-200
                bg-white
                p-1
                shadow-sm
                transition
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <Icon
                className={`
                  text-2xl
                  ${skill.color}
                `}
              />

              <span
                className="
                  text-xs
                  font-mono
                  text-slate-700
                "
              >
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Stats */}

      <div
        className="
          grid
          grid-cols-3
          gap-3
        "
      >
        {STATS.map((item) => (
          <div
            key={item.label}
            className="
              rounded-xl
              border
              border-green-600/20
              bg-white
              p-4
              text-center
              shadow-sm
              hover:shadow-md
              transition
            "
          >
            <p
              className="
                font-mono
                text-2xl
                font-bold
                text-green-600
              "
            >
              {item.value}
            </p>

            <p
              className="
                mt-1
                text-xs
                text-slate-500
              "
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
