"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Work() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [heroHovered, setHeroHovered] = useState(false);

  const projects = [
    {
      image: "Film2.jpg",
      title: "LIVE EXPERIENCES",
      subtitle: "140K+ PEOPLE REACHED",
    },
    {
      image: "Film3.jpg",
      title: "BRANDED FILMS",
      subtitle: "CINEMATIC CAMPAIGNS",
    },
    {
      image: "Film1.jpg",
      title: "DOCUMENTARY",
      subtitle: "ON THE BRINK",
    },
  ];

  return (
    <motion.section
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        background: "#020202",
        padding: "180px 40px",
        color: "#F9F4E6",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* GLOW */}
      <div
        style={{
          position: "absolute",
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          background: "rgba(210,74,22,0.05)",
          filter: "blur(220px)",
          bottom: "-400px",
          left: "-300px",
          pointerEvents: "none",
        }}
      />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "1200px",
          margin: "0 auto 80px auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontSize: "12px",
            letterSpacing: "3px",
            color: "#D24A16",
            marginBottom: "24px",
          }}
        >
          SELECTED WORK
        </h2>

        <p
          style={{
            fontSize: "clamp(34px, 5vw, 72px)",
            lineHeight: 0.95,
            maxWidth: "900px",
            margin: 0,
            fontWeight: 500,
          }}
        >
          A collection of cinematic productions,
          <br />
          live experiences and visual stories.
        </p>
      </motion.div>

      {/* FEATURED */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{
          maxWidth: "1200px",
          margin: "0 auto 32px auto",
          height: "80vh",
          minHeight: "650px",
          borderRadius: "28px",
          overflow: "hidden",
          position: "relative",
          cursor: "pointer",
        }}
        onMouseEnter={() => setHeroHovered(true)}
        onMouseLeave={() => setHeroHovered(false)}
      >
        <img
          src="/work/Film1.jpg"
          alt="On The Brink"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "all .9s ease",
            transform: heroHovered ? "scale(1.06)" : "scale(1)",
            filter: heroHovered
              ? "brightness(.60)"
              : "brightness(.95)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,.90), rgba(0,0,0,.35) 50%, transparent)",
          }}
        />

        {/* TOP BADGE */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            zIndex: 2,
          }}
        >
          <div
            style={{
              border: "1px solid rgba(255,255,255,.15)",
              backdropFilter: "blur(20px)",
              background: "rgba(255,255,255,.04)",
              padding: "10px 14px",
              borderRadius: "999px",
              fontSize: "11px",
              letterSpacing: "2px",
            }}
          >
            DOCUMENTARY SERIES • 2025
          </div>
        </div>

        {/* CONTENT */}
        <div
          style={{
            position: "absolute",
            left: "60px",
            bottom: "60px",
            zIndex: 2,
            transition: ".35s ease",
            transform: heroHovered
              ? "translateY(-8px)"
              : "translateY(0px)",
          }}
        >
          <p
            style={{
              color: "#D24A16",
              letterSpacing: "3px",
              fontSize: "12px",
              marginBottom: "12px",
            }}
          >
            FEATURED PROJECT
          </p>

          <h3
            style={{
              margin: 0,
              fontSize: "clamp(56px, 7vw, 120px)",
              lineHeight: 0.9,
            }}
          >
            ON THE BRINK
          </h3>
        </div>

        {/* CTA */}
        <div
          style={{
            position: "absolute",
            right: "60px",
            bottom: "60px",
            color: "#F9F4E6",
            letterSpacing: "2px",
            fontSize: "12px",
            opacity: heroHovered ? 1 : 0,
            transform: heroHovered
              ? "translateY(0px)"
              : "translateY(10px)",
            transition: "all .35s ease",
          }}
        >
          VIEW PROJECT →
        </div>
      </motion.div>

      {/* GRID */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "24px",
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: i * 0.12,
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              height: "340px",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <img
              src={`/work/${project.image}`}
              alt={project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "all .7s ease",
                transform:
                  hovered === i
                    ? "scale(1.08)"
                    : "scale(1)",
                filter:
                  hovered === i
                    ? "brightness(.45)"
                    : "brightness(.95)",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,.82), transparent 60%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: "24px",
                bottom: "24px",
                transform:
                  hovered === i
                    ? "translateY(-6px)"
                    : "translateY(0px)",
                transition: ".3s ease",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#D24A16",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  marginBottom: "8px",
                }}
              >
                {project.title}
              </p>

              <h4
                style={{
                  margin: 0,
                  fontSize: "22px",
                  lineHeight: 1.2,
                }}
              >
                {project.subtitle}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}