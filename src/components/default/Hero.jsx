"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import heroBg from "@/assets/default/img/hero-bg.jpg";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Designer",
        "Developer",
        "Freelancer",
        "Photographer",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <Image
        src={heroBg}
        alt="Hero Background"
        fill
        priority
      />

      <div
        className="container"
        data-aos="zoom-out"
        data-aos-delay="100"
      >
        <h2>Emily Jones</h2>

        <p>
          I'm <span ref={typedRef}></span>
        </p>

        <div className="social-links">
          <a href="#"><i className="bi bi-twitter-x"></i></a>
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
}