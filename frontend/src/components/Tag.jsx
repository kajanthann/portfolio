import React from "react";

export default function Tag({ children }) {
  return (
    <span
      className="
        bg-green-400/10 
        text-green-600 
        border 
        border-green-400/25 
        rounded 
        px-2 
        py-0.5 
        text-[10px] 
        font-mono 
        tracking-wide
      "
    >
      {children}
    </span>
  );
}