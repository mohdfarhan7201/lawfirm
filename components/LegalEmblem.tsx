import React from "react";

interface EmblemProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function LegalEmblem({
  className = "",
  size = 32,
  color = "#B89B62",
}: EmblemProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central Pillar & Apex Finial */}
      <circle cx="24" cy="6" r="2.5" fill={color} />
      <path
        d="M24 8.5V40"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Pedestal Base */}
      <path
        d="M14 42H34"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M17 39H31"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Crossbar with Balanced Arch */}
      <path
        d="M10 15C15 13.5 33 13.5 38 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="14" r="3" fill="none" stroke={color} strokeWidth="1.5" />

      {/* Left Pan Suspension Cords */}
      <path d="M10 15L6 26" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M10 15L14 26" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      {/* Left Scale Pan */}
      <path
        d="M5 26C5 29 15 29 15 26H5Z"
        fill={color}
        fillOpacity="0.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Right Pan Suspension Cords */}
      <path d="M38 15L34 26" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M38 15L42 26" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      {/* Right Scale Pan */}
      <path
        d="M33 26C33 29 43 29 43 26H33Z"
        fill={color}
        fillOpacity="0.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
