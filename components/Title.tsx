"use client";

import { motion } from "framer-motion";
import { Modak } from "next/font/google";


const modak = Modak({
  weight: "400",
  subsets: ["latin"],
});

interface TitleProps {
  isMobile?: boolean;
}

const text = "builds visual stories";

export default function Title({ isMobile = false }: TitleProps) {
  return (
    <section
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: isMobile ? "0 20px" : "0",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          margin: 0,

          display: "flex",
          flexDirection: isMobile ? "column" : "row",

          alignItems: "center",
          justifyContent: "center",

          gap: isMobile ? "8px" : "12px",

          lineHeight: 1,
        }}
      >
        {/* BRNK */}
        <span
          className={modak.className}
          style={{
            fontSize: isMobile ? "56px" : "64px",
            letterSpacing: "0.4px",
            color: "#F9F4E6",
          }}
        >
          B<span style={{ color: "#D24A16" }}>R</span>NK
        </span>

        {/* SUBTITLE */}
        <motion.span
          style={{
            display: "flex",
            flexWrap: "wrap",

            justifyContent: "center",

            opacity: 0.9,

            fontSize: isMobile ? "20px" : "32px",

            color: "#F9F4E6",

            letterSpacing: isMobile ? "1px" : "2px",

            maxWidth: isMobile ? "280px" : "none",
          }}
        >
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.8 + i * 0.03,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </motion.h1>

      {/* CTA */}
      <div
        style={{
          marginTop: isMobile ? "28px" : "32px",
          display: "flex",

          justifyContent: "center",
        }}
      >
        <a
          href="https://wa.me/5512997474824"
          style={{
            textDecoration: "none",
            padding: isMobile
              ? "12px 22px"
              : "14px 28px",

            borderRadius: "999px",
            border: "none",

            background: "#D24A16",
            color: "#F9F4E6",

            fontSize: isMobile ? "11px" : "13px",

            letterSpacing: "2px",

            cursor: "pointer",

            transition: "all 0.3s ease",

            fontFamily: "Moderustic, sans-serif",
          }}
          onMouseEnter={(e) => {
            if (!isMobile) {
              e.currentTarget.style.background =
                "#F9F4E6";
              e.currentTarget.style.color =
                "#020202";
            }
          }}
          onMouseLeave={(e) => {
            if (!isMobile) {
              e.currentTarget.style.background =
                "#D24A16";
              e.currentTarget.style.color =
                "#F9F4E6";
            }
          }}
        >
          START A PROJECT
        </a>
      </div>
    </section>
  );
}