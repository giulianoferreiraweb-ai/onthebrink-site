"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // detecta mobile direto no componente (sem props)
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "ABOUT", id: "about" },
    { name: "WORK", id: "work" },
    { name: "CONTACT", id: "contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        padding: isMobile
          ? scrolled
            ? "12px 16px"
            : "16px 16px"
          : scrolled
          ? "16px 40px"
          : "24px 40px",

        transition: "all .35s ease",

        background: scrolled
          ? "rgba(2,2,2,0.45)"
          : "transparent",

        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",

        borderBottom: scrolled
          ? "1px solid rgba(249,244,230,0.08)"
          : "1px solid transparent",

        boxSizing: "border-box",
      }}
    >
      {/* LOGO */}
      <a
        href="#home"
        style={{
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <img
          src="/logo.svg"
          alt="BRNK"
          style={{
            height: isMobile
              ? scrolled
                ? "34px"
                : "42px"
              : scrolled
              ? "58px"
              : "80px",

            width: "auto",
            transition: "all .35s ease",
          }}
        />
      </a>

      {/* MENU DESKTOP */}
      {!isMobile && (
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "42px",

            padding: scrolled ? "14px 22px" : "0px",

            borderRadius: "999px",

            background: scrolled
              ? "rgba(255,255,255,0.03)"
              : "transparent",

            border: scrolled
              ? "1px solid rgba(255,255,255,0.06)"
              : "1px solid transparent",

            transition: "all .35s ease",
          }}
        >
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                color: "#D24A16",
                textDecoration: "none",
                fontSize: "12px",
                letterSpacing: "2px",
                fontFamily: "Moderustic, sans-serif",
                opacity: 0.75,
                transition: "all .2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.color = "#F9F4E6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.75";
                e.currentTarget.style.color = "#D24A16";
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      )}

      {/* MENU MOBILE SIMPLES */}
      {isMobile && (
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                color: "#D24A16",
                textDecoration: "none",
                fontSize: "10px",
                letterSpacing: "1px",
                opacity: 0.8,
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}