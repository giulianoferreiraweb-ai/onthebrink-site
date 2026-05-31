"use client";

import { motion } from "framer-motion";
import { Modak } from "next/font/google";

const modak = Modak({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        background: `
          radial-gradient(circle at top left, rgba(210,74,22,0.10), transparent 25%),
          linear-gradient(
            to bottom,
            #020202 0%,
            #120909 25%,
            #020202 100%
          )
        `,
        padding: "140px 40px",
        color: "#F9F4E6",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* GLOW */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(210,74,22,0.08)",
          filter: "blur(180px)",
          top: "-200px",
          left: "-100px",
          pointerEvents: "none",
        }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.15,
          duration: 0.8,
        }}
        style={{
          fontSize: "24px",
          letterSpacing: "3px",
          textAlign: "center",
          marginBottom: "40px",
          position: "relative",
          zIndex: 2,
        }}
      >
        ABOUT{" "}
        <span
          className={modak.className}
          style={{
            color: "#D24A16",
            textShadow: "0 0 24px rgba(0,0,0,0.35)",
          }}
        >
          BRNK
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 0.9, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.25,
          duration: 0.9,
        }}
        style={{
          fontSize: "20px",
          lineHeight: 1.8,
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          opacity: 0.9,
          position: "relative",
          zIndex: 2,
        }}
      >
        BRNK is a creative studio focused on crafting high-impact cinematic
        visual experiences. Founded by director of photography Giuliano
        Ferreira, the studio bridges storytelling, light and emotion to build
        visuals that move audiences and define brands.
        <br />
        <br />
        With experience across digital launches, live productions reaching over
        140,000 people, and projects executed in more than six countries, BRNK
        operates at the intersection of cinema and modern digital
        communication.
      </motion.p>
    </motion.section>
  );
}