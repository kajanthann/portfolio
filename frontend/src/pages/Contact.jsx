import React from "react";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdArrowOutward } from "react-icons/md";

export default function Contact() {
  return (
    <section id="Contact" className="pt-16 pb-10 scroll-mt-20 border-t border-slate-200/60">
      <SectionTitle>Contact</SectionTitle>
      <Card className="w-full max-w-2xl border border-slate-200/70 bg-white shadow-sm">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            
            <div className="flex flex-col gap-4">
              <a
                href="mailto:arulkajanthan904@email.com"
                className="group flex items-center gap-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600 transition group-hover:bg-green-100">
                  <MdEmail size={19} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-slate-400">EMAIL</p>
                  <p className="text-sm text-slate-700 transition group-hover:text-green-600">
                    arulkajanthan904@email.com
                  </p>
                </div>
              </a>
              <a
                href="tel:+94742937703"
                className="group flex items-center gap-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600 transition group-hover:bg-green-100">
                  <FaPhone size={15} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-slate-400">PHONE</p>
                  <p className="text-sm text-slate-700 transition group-hover:text-green-600">
                    +94 74 293 7703
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">
                  <MdLocationOn size={19} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-slate-400">LOCATION</p>
                  <p className="text-sm text-slate-700">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 border-t border-slate-200 pt-6 sm:flex-col sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
            <a
              href="https://www.linkedin.com/in/a-kajanthan/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2.5 transition hover:border-green-500/40 hover:bg-green-50/50"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-slate-500 transition group-hover:text-green-600" size={18} />
            </a>
            <a
              href="https://github.com/kajanthann"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2.5 transition hover:border-green-500/40 hover:bg-green-50/50"
              title="GitHub"
              aria-label="GitHub"
            >
              <FaGithub className="text-slate-500 transition group-hover:text-green-600" size={18} />
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
}