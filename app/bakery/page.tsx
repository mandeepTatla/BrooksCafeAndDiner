import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import StickyHeader from "../components/StickyHeader";

const SITE_URL = "https://brookscafediner.com";

export const metadata: Metadata = {
  title: "Best Bakery in Batala | Fresh Cakes & Desserts — Brooks Café & Diner",
  description:
    "Best bakery in Batala, Punjab. Order fresh cakes, custom cakes, Kunafa Bomb, Mango Tres Leches, Tiramisu, Biscoff Cheesecake, Croissants & more. Daily baked desserts at Brooks Café & Diner, opposite Chitti Ground, Batala.",
  keywords: [
    "bakery in Batala",
    "best bakery Batala",
    "cake shop Batala",
    "fresh cakes Batala",
    "custom cakes Batala Punjab",
    "desserts Batala",
    "Kunafa Batala",
    "Tiramisu Batala",
    "cheesecake Batala",
    "Brooks Café bakery",
    "order cake Batala",
    "bakery near me Batala",
  ],
  alternates: {
    canonical: `${SITE_URL}/bakery`,
  },
  openGraph: {
    title: "Brooks Bakery | Fresh Cakes & Desserts in Batala",
    description:
      "Freshly baked every morning — Kunafa Bomb, Mango Tres Leches, Tiramisu, Biscoff Cheesecake, Croissants & more. Brooks Café & Diner, Batala.",
    url: `${SITE_URL}/bakery`,
    siteName: "Brooks Café & Diner",
    images: [
      {
        url: "/images/bakery/brooks-bakery-table-spread.jpg",
        width: 1080,
        height: 1080,
        alt: "Brooks Bakery — fresh cakes and desserts in Batala",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brooks Bakery | Batala",
    description: "Fresh cakes, desserts & pastries baked daily. Kunafa Bomb, Tiramisu, Cheesecakes & more.",
    images: ["/images/bakery/brooks-bakery-table-spread.jpg"],
  },
};

// ── Menu items ────────────────────────────────────────────────────────────────

const FEATURED = [
  {
    src: "/images/bakery/brooks-bakery-kunafa-bomb-layers.jpg",
    name: "Kunafa Bomb",
    desc: "Crispy kunafa shell, cream cheese filling, topped with chocolate & pistachio.",
    tag: "Chef's Special",
  },
  {
    src: "/images/bakery/brooks-bakery-tres-leches-hero.jpg",
    name: "Mango Tres Leches",
    desc: "Light sponge soaked in three milks, fresh mango & whipped cream.",
    tag: "Must Try",
  },
];

const MENU_ITEMS = [
  { src: "/images/bakery/brooks-bakery-biscoff-cheesecake.jpg",    name: "Biscoff Cheesecake",       category: "Cakes" },
  { src: "/images/bakery/brooks-bakery-dark-chocolate-cake.jpg",   name: "Dark Chocolate Cake",      category: "Cakes" },
  { src: "/images/bakery/brooks-bakery-tiramisu-bar.jpg",          name: "Trio Pastry",              category: "Desserts" },
  { src: "/images/bakery/brooks-bakery-tiramisu-box.jpg",          name: "Tiramisu Box",             category: "Desserts" },
  { src: "/images/bakery/brooks-bakery-tres-leches.jpg",           name: "Tres Leches",              category: "Desserts" },
  { src: "/images/bakery/brooks-bakery-kunafa-bomb.jpg",           name: "Kunafa Bomb",              category: "Desserts" },
  { src: "/images/bakery/brooks-bakery-cheesecakes.jpg",           name: "Cheesecakes",              category: "Cakes" },
  { src: "/images/bakery/brooks-bakery-croissants-brownie.jpg",    name: "Croissants & Brownie",     category: "Baked" },
];

const bakerySchema = {
  "@context": "https://schema.org",
  "@type": "BakeryOrCoffeeShop",
  name: "Brooks Bakery at Brooks Café & Diner",
  description:
    "Freshly baked cakes, desserts and pastries every morning. Kunafa Bomb, Mango Tres Leches, Tiramisu, Biscoff Cheesecake, Croissants & more.",
  url: `${SITE_URL}/bakery`,
  telephone: "+917719409835",
  image: `${SITE_URL}/images/bakery/brooks-bakery-table-spread.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Opposite Chitti Ground, Improvement Trust Colony",
    addressLocality: "Batala",
    addressRegion: "Punjab",
    postalCode: "143505",
    addressCountry: "IN",
  },
  servesCuisine: ["Bakery", "Desserts", "Pastry", "Cakes"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "10:30",
      closes: "22:30",
    },
  ],
  hasMenuItem: [
    { "@type": "MenuItem", name: "Kunafa Bomb", description: "Crispy kunafa shell, cream cheese filling, topped with chocolate & pistachio." },
    { "@type": "MenuItem", name: "Mango Tres Leches", description: "Light sponge soaked in three milks, fresh mango & whipped cream." },
    { "@type": "MenuItem", name: "Biscoff Cheesecake" },
    { "@type": "MenuItem", name: "Dark Chocolate Cake" },
    { "@type": "MenuItem", name: "Tiramisu Box" },
    { "@type": "MenuItem", name: "Cheesecakes" },
    { "@type": "MenuItem", name: "Croissants & Brownie" },
  ],
  sameAs: ["https://www.instagram.com/brookscafeanddiner"],
};

export default function BakeryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bakerySchema) }}
      />
      <StickyHeader />

      <main style={{ backgroundColor: "#f7f3ec" }}>

        {/* ── Hero ── */}
        {/* Constrain width on desktop so the square image shows fully without cropping */}
        <section className="w-full md:max-w-2xl md:mx-auto">
          <Image
            src="/images/bakery/brooks-bakery-launch.jpg"
            alt="Brooks Café & Diner — Introducing our all new Bakery Menu"
            width={1080}
            height={1080}
            className="w-full h-auto block"
            priority
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </section>

        {/* ── Featured ── */}
        <section className="px-6 py-14" style={{ backgroundColor: "#1c2012" }}>
          <p className="text-xs tracking-[0.25em] uppercase font-semibold mb-3 text-center" style={{ color: "#c8a96e" }}>
            Signatures
          </p>
          <h2 className="text-3xl text-white text-center mb-10 leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
            You have to try these.
          </h2>

          <div className="flex flex-col gap-6 max-w-sm mx-auto">
            {FEATURED.map((item) => (
              <div key={item.name} className="overflow-hidden rounded-2xl" style={{ backgroundColor: "#2d3b22" }}>
                <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 480px"
                  />
                  <span
                    className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#c8a96e", color: "#1c2012" }}
                  >
                    {item.tag}
                  </span>
                </div>
                <div className="px-5 py-4">
                  <h3 className="text-xl text-white mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                    {item.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Full spread photo ── */}
        <section className="relative w-full" style={{ height: "320px" }}>
          <Image
            src="/images/bakery/brooks-bakery-table-spread.jpg"
            alt="Brooks Bakery full menu spread"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ background: "rgba(28,32,18,0.45)" }}
          >
            <p className="text-white text-center text-2xl leading-snug px-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Something sweet<br />for every mood.
            </p>
          </div>
        </section>

        {/* ── Menu Grid ── */}
        <section className="px-4 py-14">
          <p className="text-xs tracking-[0.25em] uppercase font-semibold mb-3 text-center" style={{ color: "#c8a96e" }}>
            The Menu
          </p>
          <h2 className="text-3xl text-center mb-8 leading-snug" style={{ fontFamily: "var(--font-playfair)", color: "#1c2012" }}>
            Explore our bakes.
          </h2>

          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
            {MENU_ITEMS.map((item) => (
              <div key={item.name + item.src} className="overflow-hidden rounded-2xl" style={{ backgroundColor: "#ede8df" }}>
                <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 50vw, 240px"
                    loading="lazy"
                  />
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-xs font-medium" style={{ color: "#c8a96e" }}>{item.category}</p>
                  <p className="text-sm font-semibold leading-snug mt-0.5" style={{ color: "#1c2012", fontFamily: "var(--font-playfair)" }}>
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 py-14 text-center" style={{ backgroundColor: "#2d3b22" }}>
          <Image
            src="/images/brooks-cafe-logo.jpg"
            alt="Brooks Café & Diner"
            width={60}
            height={60}
            className="rounded-full object-cover mx-auto mb-5"
            style={{ boxShadow: "0 0 0 2px rgba(200,169,110,0.35)" }}
          />
          <h2 className="text-3xl text-white mb-2 leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
            Order or visit us
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
            Opposite Chitti Ground, Batala, Punjab
          </p>
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 w-full font-semibold text-base py-4 rounded-xl text-white"
              style={{ border: "1px solid rgba(255,255,255,0.2)" }}
            >
              ← Back to Home
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
