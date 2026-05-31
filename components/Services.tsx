"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "CINEMATIC COMMERCIALS",
    text: "High-end branded films and cinematic storytelling designed to elevate modern brands.",
  },
  {
    number: "02",
    title: "LIVE EXPERIENCES",
    text: "Capturing large-scale events, launches and immersive live productions with cinematic precision.",
  },
  {
    number: "03",
    title: "CREATIVE DIRECTION",
    text: "Narrative development, lighting design and visual direction crafted for impact.",
  },
  {
    number: "04",
    title: "POST & FINISHING",
    text: "Editing, color grading and finishing with a cinematic approach from start to final delivery.",
  },
];

export default function Services() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "180px 40px",
        background:
          "radial-gradient(circle at top left, rgba(210,74,22,0.12), transparent 35%), #020202",
        color: "#F9F4E6",
        borderTop: "1px solid rgba(249,244,230,0.04)",
      }}
    >
      {/* GLOW */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "rgba(210,74,22,0.05)",
          filter: "blur(180px)",
          top: "-250px",
          right: "-150px",
          pointerEvents: "none",
        }}
      />

      {/* HEADER */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto 120px auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            color: "#D24A16",
            letterSpacing: "3px",
            fontSize: "12px",
            marginBottom: "20px",
          }}
        >
          WHAT WE DO
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            fontSize: "clamp(42px, 6vw, 88px)",
            lineHeight: 1,
            margin: 0,
            maxWidth: "900px",
            fontWeight: 500,
            letterSpacing: "-2px",
          }}
        >
          Cinematic visual production crafted for modern brands.
        </motion.h2>
      </div>

      {/* SERVICES */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.12,
            }}
            viewport={{ once: true }}
            whileHover={{
              x: 12,
              y: -4,
            }}
            style={{
              position: "relative",
              overflow: "hidden",

              borderTop: "1px solid rgba(249,244,230,0.08)",
              paddingTop: "32px",

              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: "40px",

              cursor: "pointer",
            }}
          >
            {/* HOVER GLOW */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at left center, rgba(210,74,22,0.08), transparent 45%)",
                pointerEvents: "none",
              }}
            />

            {/* NUMBER */}
            <div
              style={{
                color: "#D24A16",
                fontSize: "14px",
                letterSpacing: "2px",
                opacity: 0.8,
                position: "relative",
                zIndex: 2,
              }}
            >
              {service.number}
            </div>

            {/* CONTENT */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
              }}
            >
              <motion.h3
                whileHover={{
                  color: "#D24A16",
                }}
                transition={{
                  duration: 0.25,
                }}
                style={{
                  margin: 0,
                  fontSize: "28px",
                  marginBottom: "14px",
                  fontWeight: 500,
                  letterSpacing: "-1px",
                }}
              >
                {service.title}
              </motion.h3>

              <p
                style={{
                  margin: 0,
                  maxWidth: "700px",
                  lineHeight: 1.7,
                  opacity: 0.7,
                  fontSize: "15px",
                }}
              >
                {service.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}