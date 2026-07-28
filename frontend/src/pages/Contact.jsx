import React from "react";

import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";

import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="
        pt-16
        pb-20
        scroll-mt-20
        border-t
        border-slate-200
      "
    >
      <SectionTitle>Contact</SectionTitle>

      <Card
        className="
          max-w-2xl
          border
          border-slate-200
          shadow-sm
        "
      >
        {/* Contact Form */}
        <form
          className="
            flex
            flex-col
            gap-3
          "
        >
          {/* Name */}
          <div>
            <label
              className="
                mb-1
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
                bg-slate-50
                px-4
                py-3
                text-sm
                text-slate-900
                outline-none
                focus:border-green-500
                focus:ring-2
                focus:ring-green-500/20
              "
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="
                mb-1
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
                bg-slate-50
                px-4
                py-3
                text-sm
                text-slate-900
                outline-none
                focus:border-green-500
                focus:ring-2
                focus:ring-green-500/20
              "
            />
          </div>

          {/* Message */}
          <div>
            <label
              className="
                mb-1
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
                bg-slate-50
                px-4
                py-3
                text-sm
                text-slate-900
                outline-none
                focus:border-green-500
                focus:ring-2
                focus:ring-green-500/20
              "
            />
          </div>

          {/* Bottom Actions */}
          <div
            className="
                        mt-1
                        flex
                        items-center
                        justify-between
                        border-t
                        border-slate-200
                        pt-3
                      "
          >
            {/* Social Links - Left */}
            <div
              className="
    flex
    items-center
    gap-5
  "
            >
              {/* Email */}
              <a
                href="mailto:arulkajanthan904@email.com"
                className="
      flex
      items-center
      gap-2
      text-sm
      text-slate-500
      transition
      hover:text-green-600
    "
              >
                <MdEmail />
                Email
              </a>

              {/* Phone */}
              <a
                href="tel:+94742937703"
                className="
      flex
      items-center
      gap-2
      text-sm
      text-slate-500
      transition
      hover:text-green-600
    "
              >
                <FaPhone />
                0742937703
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/kajanthan"
                target="_blank"
                rel="noreferrer"
                className="
      flex
      items-center
      gap-2
      text-sm
      text-slate-500
      transition
      hover:text-green-600
    "
              >
                <FaLinkedin />
                LinkedIn
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/kajanthan"
                target="_blank"
                rel="noreferrer"
                className="
      flex
      items-center
      gap-2
      text-sm
      text-slate-500
      transition
      hover:text-green-600
    "
              >
                <FaGithub />
                GitHub
              </a>
            </div>

            {/* Button - Right */}
            <button
              type="submit"
              className="
      rounded-lg
      bg-green-600
      px-5
      py-2
      text-sm
      font-mono
      text-white
      transition
      hover:bg-green-700
      hover:shadow-lg
      hover:shadow-green-500/20
      cursor-pointer
    "
            >
              Send
            </button>
          </div>
        </form>
      </Card>
    </section>
  );
}
