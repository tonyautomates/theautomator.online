"use client";

import { useState } from "react";

type CtaButtonProps = {
  onClick?: () => void;
  ariaLabel?: string;
};

export default function CtaButton({
  onClick,
  ariaLabel = "Book Free Audit",
}: CtaButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const baseStyle: React.CSSProperties = {
    backgroundColor: isHovered ? "#1E4FD8" : "#2563EB", // hover darker blue
    color: "#FFFFFF",
    padding: "14px 36px",
    borderRadius: "9999px", // pill shape
    border: "none",
    fontSize: "16px",
    fontWeight: 600,
    fontFamily: "inherit",
    cursor: "pointer",
    outline: "none",
    boxShadow: isHovered
      ? "0 10px 24px rgba(37, 99, 235, 0.45)"
      : "0 6px 16px rgba(37, 99, 235, 0.35)",
    transform: isPressed ? "scale(0.97)" : "scale(1)",
    transition:
      "background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      style={baseStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      Book Free Audit
    </button>
  );
}