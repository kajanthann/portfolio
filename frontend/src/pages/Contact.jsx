import React from "react";

import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";

import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="
        pt-16
        pb-10
        scroll-mt-20
        border-t
        border-slate-200/60
      "
    >
      <SectionTitle>Contact</SectionTitle>

      <Card
        className="
          w-full
          max-w-xl
          border
          border-slate-200/70
          shadow-sm
        "
      >
        {/* ============================================= */}
        {/* FORM - commented out for now, backend pending */}
        {/* ============================================= */}
        {/*
        <form
          className="
            flex
            flex-col
            gap-4
          "
        >
          <div>
            <label
              className="
                mb-1.5
                block
                text-xs
                font-mono
                text-slate-600
              "
            >
              Name
            </label>

            <input
              type="text"
              placeholder="Your name"
              className="
                w-full
                rounded-lg
                border
                border-slate-200
                bg-transparent
                px-4
                py-3
                text-sm
                text-slate-900
                placeholder:text-slate-400
                outline-none
                transition
                focus:border-green-500
                focus:ring-2
                focus:ring-green-500/20
              "
            />
          </div>

          <div>
            <label
              className="
                mb-1.5
                block
                text-xs
                font-mono
                text-slate-600
              "
            >
              Email
            </label>

            <input
              type="email"
              placeholder="your@email.com"
              className="
                w-full
                rounded-lg
                border
                border-slate-200
                bg-transparent
                px-4
                py-3
                text-sm
                text-slate-900
                placeholder:text-slate-400
                outline-none
                transition
                focus:border-green-500
                focus:ring-2
                focus:ring-green-500/20
              "
            />
          </div>

          <div>
            <label
              className="
                mb-1.5
                block
                text-xs
                font-mono
                text-slate-600
              "
            >
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="
                w-full
                resize-none
                rounded-lg
                border
                border-slate-200
                bg-transparent
                px-4
                py-3
                text-sm
                text-slate-900
                placeholder:text-slate-400
                outline-none
                transition
                focus:border-green-500
                focus:ring-2
                focus:ring-green-500/20
              "
            />
          </div>

          <div
            className="
              mt-2
              flex
              flex-col
              gap-4
              border-t
              border-slate-200/70
              pt-4

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-4
                gap-y-3
              "
            >
              
                href="mailto:arulkajanthan904@email.com"
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-slate-500
                  transition
                  hover:text-green-600
                "
              >
                <MdEmail className="text-green-600" />
              </a>

              
                href="tel:+94742937703"
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-slate-500
                  transition
                  hover:text-green-600
                "
              >
                <FaPhone className="text-green-600" />
              </a>

              
                href="https://www.linkedin.com/in/a-kajanthan/"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-slate-500
                  transition
                  hover:text-green-600
                "
              >
                <FaLinkedin className="text-green-600" />
              </a>

              
                href="https://github.com/kajanthann"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-slate-500
                  transition
                  hover:text-green-600
                "
              >
                <FaGithub className="text-green-600" />
              </a>
            </div>

            <button
              type="submit"
              className="
                w-full
                rounded-lg
                bg-green-600
                px-6
                py-2.5
                text-sm
                font-mono
                text-white
                transition
                hover:bg-green-700
                hover:shadow-lg
                hover:shadow-green-500/20

                sm:w-auto
                cursor-pointer
              "
            >
              Send
            </button>
          </div>
        </form>
        */}

        {/* ============================================= */}
        {/* SIMPLE CONTACT INFO - replace with form above  */}
        {/* once backend is ready                          */}
        {/* ============================================= */}
        <div
          className="
            flex
            flex-col
            gap-4
          "
        >
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <MdEmail className="text-lg text-green-600" />
            arulkajanthan904@email.com
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-700">
            <FaPhone className="text-base text-green-600" />
            +94 74 293 7703
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-700">
            <MdLocationOn className="text-lg text-green-600" />
            Colombo, Sri Lanka
          </div>

          <div
            className="
              mt-2
              flex
              items-center
              gap-5
            "
          >
            <a
              href="https://www.linkedin.com/in/a-kajanthan/"
              target="_blank"
              rel="noreferrer"
              className="
                text-slate-500
                transition
                hover:text-green-600
              "
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://github.com/kajanthann"
              target="_blank"
              rel="noreferrer"
              className="
                text-slate-500
                transition
                hover:text-green-600
              "
              title="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
}