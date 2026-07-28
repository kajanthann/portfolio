import React from "react";

export default function SectionTitle({ children }) {

  const label = children
    .toLowerCase()
    .replace(/ /g, "_");


  return (
    <div className="mb-10">

      {/* Code-style label */}
      <p
        className="
          text-sm 
          md:text-base 
          font-mono 
          tracking-[0.2em] 
          uppercase 
          text-green-300/90 
          flex 
          items-center 
          gap-2
        "
      >

        <span className="text-green-600">
          &lt;/&gt;
        </span>


        <span
          className="
            bg-gradient-to-r 
            from-green-500 
            to-emerald-600 
            bg-clip-text 
            text-transparent
          "
        >
          {label}
        </span>

      </p>


      {/* Animated underline */}
      <div className="relative mt-1">

        <div
          className="
            w-9 
            h-[2px] 
            bg-green-500 
            rounded-full
          "
        />

        <div
          className="
            absolute 
            top-0 
            left-0 
            w-12 
            h-[2px] 
            bg-green-300 
            blur-sm 
            opacity-60
          "
        />

      </div>

    </div>
  );
}