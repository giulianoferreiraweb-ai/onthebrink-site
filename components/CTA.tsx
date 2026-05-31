"use client";

export default function CTA() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#020202",
        overflow: "hidden",
        padding: "120px 40px",
      }}
    >
      {/* ORANGE GLOW */}
      <div
        style={{
          position: "absolute",
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          background: "rgba(210,74,22,0.08)",
          filter: "blur(220px)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            color: "#D24A16",
            fontSize: "12px",
            letterSpacing: "4px",
            marginBottom: "32px",
          }}
        >
          START A CONVERSATION
        </div>

        <h2
          style={{
            color: "#F9F4E6",
            fontSize: "clamp(48px, 8vw, 120px)",
            lineHeight: 0.9,
            margin: 0,
            marginBottom: "40px",
            letterSpacing: "-0.04em",
          }}
        >
          LET'S CREATE
          <br />
          SOMETHING
          <br />
          UNFORGETTABLE.
        </h2>

        <p
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            color: "rgba(249,244,230,0.7)",
            fontSize: "18px",
            lineHeight: 1.8,
          }}
        >
          From live experiences to cinematic campaigns,
          we create visual stories designed to move people.
        </p>

        <div
          style={{
            marginTop: "60px",
          }}
        >
          <a
            href="https://wa.me/5512997474824"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "18px 36px",
              borderRadius: "999px",
              border: "1px solid #D24A16",
              color: "#F9F4E6",
              textDecoration: "none",
              fontSize: "14px",
              letterSpacing: "1px",
              transition: "all .3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#D24A16";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            START A PROJECT
          </a>
        </div>
      </div>
    </section>
  );
}