"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "140K+",
    label: "PEOPLE REACHED LIVE",
  },
  {
    value: "06",
    label: "COUNTRIES FILMED",
  },
  {
    value: "M+",
    label: "GENERATED THROUGH VISUAL CAMPAIGNS",
  },
  {
    value: "HIGH-END",
    label: "CINEMATIC PRODUCTIONS",
  },
];

export default function Impact() {
  return (
    <section
      id="impact"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "220px 40px",
        background: "#020202",
        color: "#F9F4E6",
      }}
    >
      {/* GLOW */}
      <div
        style={{
          position: "absolute",
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          background: "rgba(210,74,22,0.08)",
          filter: "blur(220px)",
          top: "-300px",
          right: "-250px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            color: "#D24A16",
            letterSpacing: "3px",
            fontSize: "12px",
            marginBottom: "30px",
          }}
        >
          IMPACT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(42px, 6vw, 92px)",
            lineHeight: 0.95,
            maxWidth: "900px",
            marginBottom: "140px",
            fontWeight: 500,
            letterSpacing: "-0.04em",
          }}
        >
          Stories crafted
          <br />
          to move people.
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "100px 60px",
          }}
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
              }}
              whileHover={{
                y: -6,
              }}
              style={{
                position: "relative",
              }}
            >
              {/* NUMBER GLOW */}
              <div
                style={{
                  position: "absolute",
                  width: "220px",
                  height: "220px",
                  background: "rgba(210,74,22,0.06)",
                  borderRadius: "50%",
                  filter: "blur(90px)",
                  left: "-40px",
                  top: "-40px",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  fontSize:
                    item.value === "HIGH-END"
                      ? "clamp(32px,5vw,60px)"
                      : "clamp(60px,9vw,120px)",

                  lineHeight: 0.9,
                  letterSpacing: "-0.06em",
                  marginBottom: "18px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {item.value}
              </div>

              <div
                style={{
                  color: "#D24A16",
                  fontSize: "12px",
                  letterSpacing: "3px",
                  lineHeight: 1.8,
                  maxWidth: "260px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}