"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

export default function HeroSlider() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Fallback image shown while video loads */}
      <Image
        src="/images/brooks-cafe-interior-overview.jpg"
        alt="Brooks Café & Diner interior"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      {/* Brooks ad video — mobile optimised (2.9 MB), autoplay, muted, looping */}
      <video
        ref={videoRef}
        poster="/images/brooks-cafe-interior-overview.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
      >
        <source src="/videos/brooks-cafe-brand-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
