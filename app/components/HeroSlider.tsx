"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/images/dining-hall.jpeg", alt: "Brooks Café & Diner dining hall" },
  { src: "/images/interior-ambiance.jpeg", alt: "Brooks Café interior ambiance" },
  { src: "/images/counter.jpeg", alt: "Brooks Café counter" },
  { src: "/images/exterior-day.jpeg", alt: "Brooks Café exterior" },
  { src: "/images/exterior-night.jpeg", alt: "Brooks Café at night" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    // Fills the hero section (parent must be relative)
    <div className="absolute inset-0">
      {SLIDES.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          className="object-cover object-center"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
          priority={i === 0}
          sizes="100vw"
        />
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`View photo ${i + 1}`}
            style={{
              width: i === current ? "20px" : "8px",
              height: "8px",
              borderRadius: "9999px",
              backgroundColor: i === current ? "#c8a96e" : "rgba(255,255,255,0.45)",
              transition: "all 0.3s ease",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
