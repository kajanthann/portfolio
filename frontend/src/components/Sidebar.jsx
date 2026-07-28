import React from "react";
import { profileImage } from "../assets/asset";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const NAV_ITEMS = [
  "About",
  "Experience",
  "Education",
  "Projects",
  "Contact",
];

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
        <div
          className="
            flex
            flex-col
            items-center
            w-full
            px-8
            py-10
          "
        >
          {/* Profile Image + Social Icons */}
          <div className="relative">
            <div
              className="
                w-52
                h-52
                overflow-hidden
                rounded-2xl
                border-2
                border-green-500/30
                bg-gradient-to-br
                from-green-100
                to-emerald-50
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
                  aria-label={item.label}
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
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:border-green-500
                    hover:bg-green-50
                    hover:shadow-[0_0_15px_rgba(34,197,94,0.25)]
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
              text-3xl
              font-bold
              font-mono
              text-slate-900
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
            "
          >
            Jaffna, Sri Lanka | 0742937703
          </p>

          {/* Navigation */}
          <nav
            className="
              mt-10
              w-full
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
                        font-mono
                        transition-colors
                        duration-200
                        ${
                          active === item
                            ? "text-green-600"
                            : "text-slate-500 hover:text-green-600"
                        }
                      `}
                    >
                      "{item}"
                    </button>

                    <span className="mx-2 text-slate-400">
                      :
                    </span>

                    <span
                      className={
                        active === item
                          ? "text-green-600"
                          : "text-slate-400"
                      }
                    >
                      {active === item ? "true" : "false"}
                    </span>

                    <span className="text-slate-400">
                      ,
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-2">
                {"}"}
              </p>
            </div>
          </nav>
        </div>
      </aside>

      {/* Mobile Header */}
      <header
        className="
          fixed
          left-0
          right-0
          top-0
          z-50
          flex
          h-14
          items-center
          justify-between
          border-b
          border-slate-200
          bg-white/90
          px-4
          backdrop-blur-md
          lg:hidden
        "
      >
        <span
          className="
            font-mono
            font-bold
            text-green-600
          "
        >
          kajanthan.dev
        </span>

        <div className="flex gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => onNav(item)}
              className={`
                cursor-pointer
                rounded
                px-2
                py-1
                text-[11px]
                font-mono
                transition
                ${
                  active === item
                    ? "bg-green-100 text-green-600"
                    : "text-slate-500 hover:text-green-600"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </header>
    </>
  );
}

export default Sidebar;