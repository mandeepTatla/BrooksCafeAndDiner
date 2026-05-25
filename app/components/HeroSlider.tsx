"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

// Mobile: 2.9 MB H.264 — Desktop: 27 MB HEVC (H.265) for crisp quality
const MOBILE_SRC = "/videos/brooks-cafe-brand-video.mp4";
const DESKTOP_SRC = "/videos/brooks-cafe-brand-video-hd.mp4";

export default function HeroSlider() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Pick the right quality before the browser starts loading
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    video.src = isDesktop ? DESKTOP_SRC : MOBILE_SRC;
    video.load();
    video.play().catch(() => {});
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
      {/* src is set dynamically in useEffect based on screen size */}
      <video
        ref={videoRef}
        poster="/images/brooks-cafe-interior-overview.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
}
