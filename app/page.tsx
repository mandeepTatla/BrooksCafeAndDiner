import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./components/HeroSlider";
import StickyHeader from "./components/StickyHeader";

// ─── TODO: Replace these with your real contact details ───────────────────────
const PHONE_DISPLAY = "+91 77194 09835";
const PHONE_HREF = "tel:+917719409835";
const WHATSAPP_HREF =
  "https://wa.me/917719409835?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Brooks%20Cafe";
const INSTAGRAM_HREF = "https://www.instagram.com/brookscafeanddiner";
const MAPS_HREF =
  "https://maps.google.com/?q=Brooks+Cafe+%26+Diner+Opposite+Chitti+Ground+Batala+Punjab";
// ──────────────────────────────────────────────────────────────────────────────

// ── Inline SVG icons ──────────────────────────────────────────────────────────

function IconMap() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 shrink-0"
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 shrink-0"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.93 17.41z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 shrink-0"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 shrink-0"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}


// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <StickyHeader />

      <main>
        {/* ── Hero ── */}
        <section className="relative flex flex-col items-center justify-center text-center px-5 pt-16" style={{ minHeight: "100dvh" }}>
          <HeroSlider />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(28,32,18,0.72) 0%, rgba(28,32,18,0.48) 50%, rgba(28,32,18,0.82) 100%)",
            }}
          />

          {/* Hero content */}
          <div className="relative z-10 flex flex-col items-center gap-5 w-full max-w-sm mx-auto">
            <Image
              src="/images/brooks-cafe-logo.jpg"
              alt="Brooks Café & Diner logo"
              width={96}
              height={96}
              className="rounded-full object-cover"
              style={{ boxShadow: "0 0 0 2px rgba(200,169,110,0.5)" }}
              priority
            />
            <div>
              <h1
                className="text-5xl text-white leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Brooks Café
                <br />& Diner
              </h1>
              <p
                className="mt-2 text-sm font-medium tracking-[0.2em] uppercase"
                style={{ color: "#c8a96e" }}
              >
                Where Every Meal Feels Like Home
              </p>
            </div>
            <p className="text-white/60 text-xs tracking-widest uppercase">
              Bakery · Café · Restaurant in Batala
            </p>

          {/* CTA buttons */}
            <div className="flex flex-col gap-3 w-full mt-2">
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full font-semibold text-base py-4 rounded-xl"
                style={{ backgroundColor: "#c8a96e", color: "#1c2012" }}
              >
                <IconMap />
                Get Directions
              </a>
              <div className="flex gap-3">
                <a
                  href={PHONE_HREF}
                  className="flex-1 flex items-center justify-center gap-2 font-semibold text-base py-4 rounded-xl text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  <IconPhone />
                  Call
                </a>
                <a
                  href={INSTAGRAM_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 font-semibold text-base py-4 rounded-xl text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  <IconInstagram />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Scroll cue — pinned to bottom of hero section */}
          <div className="absolute bottom-7 left-0 right-0 flex flex-col items-center z-10" style={{ gap: "2px" }}>
            <div className="animate-bounce" style={{ color: "#c8a96e" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div className="animate-bounce" style={{ color: "rgba(200,169,110,0.4)", animationDelay: "0.15s" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="px-6 py-16 text-center" style={{ backgroundColor: "#f7f3ec" }}>
          <p
            className="text-xs tracking-[0.25em] uppercase font-semibold mb-4"
            style={{ color: "#c8a96e" }}
          >
            Our Story
          </p>
          <h2
            className="text-3xl leading-snug mb-5 max-w-xs mx-auto"
            style={{ fontFamily: "var(--font-playfair)", color: "#1c2012" }}
          >
            Good food, great coffee, real comfort.
          </h2>
          <p
            className="text-base leading-relaxed max-w-sm mx-auto"
            style={{ color: "rgba(28,32,18,0.65)" }}
          >
            We&rsquo;re a bakery, café and diner all in one — baking fresh every
            morning, brewing specialty coffees, and serving proper meals made with
            care. Come in, sit down, and feel at home.
          </p>

          <div className="flex justify-center gap-8 mt-10">
            {[
              { label: "Freshly Baked", sub: "Every Morning" },
              { label: "Specialty", sub: "Coffee" },
              { label: "Dine In", sub: "& Takeaway" },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="text-sm font-semibold"
                  style={{ fontFamily: "var(--font-playfair)", color: "#4a5e38" }}
                >
                  {item.label}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(28,32,18,0.45)" }}>
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Our Space ── */}
        <section className="px-6 py-16" style={{ backgroundColor: "#1c2012" }}>
          <p
            className="text-xs tracking-[0.25em] uppercase font-semibold mb-4 text-center"
            style={{ color: "#c8a96e" }}
          >
            Our Space
          </p>
          <h2
            className="text-3xl leading-snug mb-8 text-center max-w-xs mx-auto text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            A place to relax and enjoy.
          </h2>
          <div className="flex flex-col gap-3 max-w-sm mx-auto">
            <div className="relative w-full overflow-hidden rounded-2xl" style={{ height: "280px" }}>
              <Image
                src="/images/brooks-cafe-interior-overview.jpg"
                alt="Brooks Café dining area with warm lighting"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 640px"
              />
            </div>
            <div className="flex gap-3">
              <div className="relative flex-1 overflow-hidden rounded-2xl" style={{ height: "180px" }}>
                <Image
                  src="/images/brooks-cafe-interior-dining.jpg"
                  alt="Brooks Café interior with counter"
                  fill
                  className="object-cover object-center"
                  sizes="50vw"
                />
              </div>
              <div className="relative flex-1 overflow-hidden rounded-2xl" style={{ height: "180px" }}>
                <Image
                  src="/images/brooks-cafe-cozy-seating.jpg"
                  alt="Brooks Café cosy seating area"
                  fill
                  className="object-cover object-center"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Bakery Teaser ── */}
        <section className="px-5 py-14" style={{ backgroundColor: "#f7f3ec" }}>
          <p className="text-xs tracking-[0.25em] uppercase font-semibold mb-3 text-center" style={{ color: "#c8a96e" }}>
            Now Open
          </p>
          <h2 className="text-3xl text-center mb-8 leading-snug" style={{ fontFamily: "var(--font-playfair)", color: "#1c2012" }}>
            Brooks Bakery
          </h2>

          {/* Card with image + overlay CTA */}
          <Link href="/bakery" className="block relative overflow-hidden rounded-3xl max-w-sm mx-auto" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/images/bakery/brooks-bakery-table-spread.jpg"
              alt="Brooks Bakery — cakes, desserts and more"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, 480px"
              loading="lazy"
            />
            {/* Dark gradient */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,32,18,0.88) 0%, rgba(28,32,18,0.2) 60%)" }} />
            {/* Bottom text */}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
              <p className="text-white/70 text-xs mb-3">Kunafa Bomb · Tiramisu · Cheesecakes · Croissants</p>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-full"
                style={{ backgroundColor: "#c8a96e", color: "#1c2012" }}
              >
                See the Bakery Menu →
              </span>
            </div>
          </Link>
        </section>

        {/* ── Location & Hours ── */}
        <section id="location" style={{ backgroundColor: "#ede8df" }}>
          {/* Google Maps embed */}
          <div className="w-full" style={{ height: "280px" }}>
            <iframe
              src="https://maps.google.com/maps?q=Brooks+Cafe+%26+Diner+Batala+Punjab+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brooks Café & Diner on Google Maps"
            />
          </div>

          <div className="px-6 py-10 max-w-sm mx-auto">
            <p
              className="text-xs tracking-[0.25em] uppercase font-semibold mb-7"
              style={{ color: "#c8a96e" }}
            >
              Find Us
            </p>

            {/* Address */}
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 mb-6"
            >
              <span style={{ color: "#4a5e38" }} className="mt-0.5">
                <IconMap />
              </span>
              <div>
                <p className="font-semibold text-base" style={{ color: "#1c2012" }}>
                  Opposite Chitti Ground
                </p>
                <p className="text-sm" style={{ color: "rgba(28,32,18,0.55)" }}>
                  Batala, Punjab, India
                </p>
                <p className="text-xs mt-1 font-medium" style={{ color: "#4a5e38" }}>
                  Open in Maps →
                </p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-start gap-3 mb-6">
              <span style={{ color: "#4a5e38" }} className="mt-0.5">
                <IconClock />
              </span>
              <div>
                <p className="font-semibold text-base" style={{ color: "#1c2012" }}>
                  10:30 AM – 10:30 PM
                </p>
                <p className="text-sm" style={{ color: "rgba(28,32,18,0.55)" }}>
                  Open every day
                </p>
              </div>
            </div>

            {/* Phone */}
            <a href={PHONE_HREF} className="flex items-center gap-3 mb-8">
              <span style={{ color: "#4a5e38" }}>
                <IconPhone />
              </span>
              <p className="font-semibold text-base" style={{ color: "#1c2012" }}>
                {PHONE_DISPLAY}
              </p>
            </a>

          </div>
        </section>

        {/* ── Footer CTA ── */}
        <footer className="px-6 py-14 text-center" style={{ backgroundColor: "#2d3b22" }}>
          <Image
            src="/images/brooks-cafe-logo.jpg"
            alt="Brooks Café & Diner"
            width={64}
            height={64}
            className="rounded-full object-cover mx-auto mb-5"
            style={{ boxShadow: "0 0 0 2px rgba(200,169,110,0.35)" }}
            loading="lazy"
          />
          <h2
            className="text-3xl text-white mb-2 leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Come visit us today
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
            Opposite Chitti Ground, Batala, Punjab
          </p>

          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-semibold text-base py-4 rounded-xl"
              style={{ backgroundColor: "#c8a96e", color: "#1c2012" }}
            >
              <IconMap />
              Get Directions
            </a>
            <div className="flex gap-3">
              <a
                href={PHONE_HREF}
                className="flex-1 flex items-center justify-center gap-2 text-white font-semibold text-base py-4 rounded-xl"
                style={{ border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <IconPhone />
                Call
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 text-white font-semibold text-base py-4 rounded-xl"
                style={{ border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <IconWhatsApp />
                WhatsApp
              </a>
            </div>
          </div>

          <p className="mt-10 text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} Brooks Café & Diner. All rights reserved.
          </p>
          <p className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            Trading as HR Food Works
          </p>
        </footer>
      </main>
    </>
  );
}
