"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function StickyHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center px-5 py-3"
      style={{
        backgroundColor: "rgba(74,94,56,0.97)",
        backdropFilter: "blur(10px)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.35s ease",
      }}
    >
      <Image
        src="/images/brooks-cafe-logo.jpg"
        alt="Brooks Café & Diner"
        width={54}
        height={54}
        className="rounded-full object-cover shrink-0"
      />
      <span
        className="ml-3 text-white text-sm font-medium tracking-wide flex-1"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Brooks Café & Diner
      </span>
      <Link
        href="/bakery"
        className="text-xs font-semibold px-4 py-2 rounded-full"
        style={{ backgroundColor: "#c8a96e", color: "#1c2012" }}
      >
        Bakery
      </Link>
    </header>
  );
}
