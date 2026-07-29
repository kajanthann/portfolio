import React from "react";
import { profileImage } from "../assets/asset";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const NAV_ITEMS = ["About", "Experience", "Education", "Projects", "Contact"];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    icon: <FaGithub size={15} />,
    href: "https://github.com/kajanthan",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedinIn size={15} />,
    href: "https://linkedin.com/in/kajanthan",
  },
  {
    label: "Email",
    icon: <MdEmail size={15} />,
    href: "mailto:arulkajanthan904@email.com",
  },
];

function ProfileCard() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        w-full
        px-8
        pt-10
        pb-5
      "
    >
      {/* Profile Image + Social */}
      <div className="relative">
        <div
          className="
            w-46
            h-46
            lg:w-52
            lg:h-52
            overflow-hidden
            rounded-2xl
            border-2
            border-green-500/30
            bg-green-50
          "
        >
          <img
            src={profileImage}
            alt="Arulaiah Kajanthan"
            className="
              w-full
              h-full
              object-cover
            "
          />
        </div>

        {/* Social Icons */}

        <div
          className="
            absolute
            top-1/2
            -right-10
            -translate-y-1/2
            flex
            flex-col
            gap-2
          "
        >
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                w-8
                h-8
                rounded-xl
                border
                border-green-500/20
                bg-white
                text-green-600
                shadow-sm
                transition
                hover:scale-110
                hover:border-green-500
                hover:bg-green-50
              "
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Name */}

      <h1
        className="
          mt-6
          text-2xl
          lg:text-3xl
          font-bold
          font-mono
          text-slate-900
          text-center
        "
      >
        Arulaiah Kajanthan
      </h1>

      {/* Role */}

      <p
        className="
          mt-2
          text-xs
          font-mono
          text-green-700
          text-center
        "
      >
        Embedded Systems | IoT | AI/ML | MERN Stack
      </p>

      {/* Location */}

      <p
        className="
          mt-1
          text-xs
          font-mono
          text-slate-500
          text-center
        "
      >
        Jaffna, Sri Lanka | 0742937703
      </p>
    </div>
  );
}

function Sidebar({ active, onNav }) {
  return (
    <>
      {/* Desktop Sidebar */}

      <aside
        className="
          hidden
          lg:flex
          fixed
          left-0
          top-0
          h-screen
          w-[32%]
          border-r
          border-slate-200
        "
      >
        <div className="w-full">
          <ProfileCard />

          {/* Navigation */}

          <nav
            className="
              px-8
              mt-2
              text-sm
              font-mono
            "
          >
            <div className="text-slate-500">
              <p>{"{"}</p>

              <div
                className="
                  mt-2
                  space-y-2
                  pl-5
                "
              >
                {NAV_ITEMS.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                    "
                  >
                    <button
                      onClick={() => onNav(item)}
                      className={`
                        cursor-pointer
                        transition
                        ${
                          active === item
                            ? "text-green-600"
                            : "text-slate-500 hover:text-green-600"
                        }
                      `}
                    >
                      "{item}"
                    </button>

                    <span
                      className="
                        mx-2
                        text-slate-400
                      "
                    >
                      :
                    </span>

                    <span
                      className={
                        active === item ? "text-green-600" : "text-slate-400"
                      }
                    >
                      {active === item ? "true" : "false"}
                    </span>

                    <span className="text-slate-400">,</span>
                  </div>
                ))}
              </div>

              <p className="mt-2">{"}"}</p>
            </div>
          </nav>
        </div>
      </aside>

      {/* Mobile + Tablet Profile */}

      <div
        className="
          lg:hidden
          w-full
          border-b
          border-slate-200
        "
      >
        <ProfileCard />
      </div>
    </>
  );
}

export default Sidebar;
