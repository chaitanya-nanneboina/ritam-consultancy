import React from 'react';

/**
 * Reusable Badge component for section pills (e.g. "Why Choose Ritam Consultancy?")
 */
export default function Badge({ children, icon, variant = "default", className = "" }) {
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 14px",
    borderRadius: "9999px",
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "0.2px",
    backgroundColor: variant === "accent" ? "#FEF2EA" : "#E8F3F1",
    color: variant === "accent" ? "#F96815" : "#044439",
    border: `1px solid ${variant === "accent" ? "#FDBA74" : "#A7F3D0"}`,
    width: "fit-content",
  };

  return (
    <div style={baseStyle} className={`badge ${className}`}>
      {icon && <span className="badge-icon">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}

