import React from "react";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";

const EDUCATION = [
  {
    degree: "B.Comp Honours in Software Engineering",
    school: "University of Sri Jayewardenepura",
    location: "Colombo, Sri Lanka",
    period: "2023 - Present",
    desc: "B.Comp Honours in Software Engineering",
    badge: "Undergraduate",
  },
  {
    degree: "G.C.E Ordinary Level & Advanced Level",
    school: "J/Velanai Central College",
    location: "Jaffna, Sri Lanka",
    period: "Completed",
    desc: "Physical Science Stream: Mathematics, Physics, and Chemistry (A2B).",
    badge: "Completed",
  },
];

export default function Education() {
  return (
    <section
      id="Education"
      className="
        py-16
        scroll-mt-16
        border-t
        border-slate-200
      "
    >
      {/* Section Heading */}
      <SectionTitle>Education</SectionTitle>

      {/* Education Cards */}
      <div className="flex flex-col gap-4">
        {EDUCATION.map((edu, index) => (
          <Card
            key={index}
            className="
              flex
              items-start
              gap-4
              bg-white
              border
              border-slate-200
              shadow-sm
              hover:shadow-md
              transition
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-10
                w-10
                flex-shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-green-500/30
                bg-green-50
                text-lg
              "
            >
              🎓
            </div>

            <div className="flex-1">
              {/* Header */}
              <div
                className="
                  mb-1
                  flex
                  flex-wrap
                  justify-between
                  gap-2
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
                    {edu.degree}
                  </p>

                  <p
                    className="
                      mt-0.5
                      font-mono
                      text-xs
                      text-green-600
                    "
                  >
                    {edu.school}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-slate-500
                    "
                  >
                    {edu.location}
                  </p>
                </div>

                <div
                  className="
                    text-right
                  "
                >
                  <p
                    className="
                      font-mono
                      text-[11px]
                      text-slate-500
                    "
                  >
                    {edu.period}
                  </p>

                  <span
                    className="
                      mt-1
                      inline-block
                      rounded
                      bg-green-100
                      px-2
                      py-0.5
                      font-mono
                      text-[10px]
                      text-green-700
                    "
                  >
                    {edu.badge}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-slate-600
                "
              >
                {edu.desc}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
