import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        border 
        border-green-400/15 
        rounded-xl 
        p-5 
        backdrop-blur-xs 
        transition-all 
        duration-200 
        hover:border-green-400/40 
        ${className}
      `}
    >
      {children}
    </div>
  );
}