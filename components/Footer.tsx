"use client";

import { useState } from "react";

export default function Footer() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <footer
      style={{
        background: "#D24A16",
        color: "#F9F4E6",
        padding: "36px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* LOGO */}
        <img
          src="/logo.svg"
          alt="BRNK"
          style={{
            height: "28px",
            width: "auto",
          }}
        />

        {/* LINKS */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "13px",
          }}
        >
          {[
            {
              label: "Instagram",
              href: "https://instagram.com",
            },
            {
              label: "Vimeo",
              href: "https://vimeo.com",
            },
            {
              label: "Email",
              href: "mailto:hello@brnk.studio",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={
                link.href.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel="noreferrer"
              onMouseEnter={() =>
                setHovered(link.label)
              }
              onMouseLeave={() =>
                setHovered(null)
              }
              style={{
                color: "#F9F4E6",
                textDecoration: "none",

                opacity:
                  hovered === link.label
                    ? 1
                    : 0.85,

                transform:
                  hovered === link.label
                    ? "translateY(-1px)"
                    : "translateY(0px)",

                transition: "all .25s ease",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* COPYRIGHT */}
        <span
          style={{
            fontSize: "11px",
            letterSpacing: "1px",
            opacity: 0.8,
          }}
        >
          © 2026 BRNK
        </span>
      </div>
    </footer>
  );
}