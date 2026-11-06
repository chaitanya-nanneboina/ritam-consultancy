import React from 'react';

/**
 * Reusable Button component adhering to Ritam Consultancy PRD:
 * - Primary: #044439
 * - Accent: #F96815
 * - Outline: White with border
 */
export default function Button({
  children,
  variant = "primary", // 'primary' | 'accent' | 'outline' | 'ghost'
  size = "md",         // 'sm' | 'md' | 'lg'
  icon,
  iconPosition = "right",
  fullWidth = false,
  onClick,
  href,
  disabled = false,
  type = "button",
  className = "",
  ...props
}) {
  const styles = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    borderRadius: "9999px",
    fontWeight: "600",
    textDecoration: "none",
    transition: "all 0.2s ease",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    padding: size === "sm" ? "8px 16px" : size === "lg" ? "14px 28px" : "11px 22px",
    fontSize: size === "sm" ? "14px" : size === "lg" ? "16px" : "15px",
    ...(variant === "primary" && {
      backgroundColor: "#044439",
      color: "#FFFFFF",
      border: "1px solid #044439",
    }),
    ...(variant === "accent" && {
      backgroundColor: "#F96815",
      color: "#FFFFFF",
      border: "1px solid #F96815",
    }),
    ...(variant === "outline" && {
      backgroundColor: "#FFFFFF",
      color: "#044439",
      border: "1.5px solid #D0D5DD",
    }),
  };

  if (href) {
    return (
      <a href={href} style={styles} className={`btn btn-${variant} ${className}`} {...props}>
        {icon && iconPosition === "left" && <span>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={styles}
      className={`btn btn-${variant} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
}

