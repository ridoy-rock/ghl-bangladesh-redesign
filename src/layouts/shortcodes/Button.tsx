import React from "react";

// Button for markdown / MDX pages: <Button label="Join" link="https://…" style="outline" />
// Same look as src/layouts/components/Button.astro (label + round icon chip).
const Button = ({
  label,
  link,
  style,
  rel,
}: {
  label: string;
  link: string;
  style?: string;
  rel?: string;
}) => {
  const arrow = (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" />
    </svg>
  );

  return (
    <a
      href={link}
      target={link.startsWith("http") ? "_blank" : "_self"}
      rel={`noopener noreferrer ${
        rel ? (rel === "follow" ? "" : rel) : "nofollow"
      }`}
      className={`btn mb-4 me-4 ${
        style === "outline" ? "btn-outline" : "btn-green"
      }`}
    >
      <span className="btn-label">{label}</span>
      <span className="btn-chip ne" aria-hidden="true">
        {arrow}
        {arrow}
      </span>
    </a>
  );
};

export default Button;
