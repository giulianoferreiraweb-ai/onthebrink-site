"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import About from "../components/About";
import Services from "../components/Services";
import Impact from "../components/Impact";
import Work from "../components/Work";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
export default function Home() {
  // simple hook to detect mobile viewport
  function useMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      if (typeof window === "undefined") return;

      const mq = window.matchMedia("(max-width: 768px)");
      const handle = () => setIsMobile(mq.matches);

      // initialize
      handle();

      if (mq.addEventListener) mq.addEventListener("change", handle);
      else mq.addListener(handle);

      return () => {
        if (mq.removeEventListener) mq.removeEventListener("change", handle);
        else mq.removeListener(handle);
      };
    }, []);

    return isMobile;
  }

  const isMobile = useMobile();

  
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* HEADER FIXO */}
      <Header />

      {/* HERO */}
      <main
        id="home"
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          opacity: Math.max(1 - scrollY / 500, 0),
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        {/* VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/Trailer.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            zIndex: 1,
          }}
        />

        {/* TITLE */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
          }}
        >
          <Title />
        </div>
      </main>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* SERVICES */}
      <section id="services">
        <Services />
      </section>

      {/* IMPACT */}
      <section id="impact">
        <Impact />
      </section>

      {/* WORK */}
      <section
        id="work"
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: "-20vh",
        }}
      >
        <Work />
      </section>

      {/* CTA */}
      <section id="contact">
        <CTA />
<Footer />
      </section>
    </>
  );
}