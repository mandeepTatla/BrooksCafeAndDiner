import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// ─── TODO: Replace with your real domain once purchased ───────────────────────
const SITE_URL = "https://brookscafediner.com";
// ──────────────────────────────────────────────────────────────────────────────

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // ── Primary SEO ─────────────────────────────────────────────────────────────
  title: {
    default: "Brooks Café & Diner | Best Cafe, Bakery & Restaurant in Batala",
    template: "%s | Brooks Café & Diner, Batala",
  },
  description:
    "Brooks Café & Diner — Batala's best cafe, bakery & restaurant. Specialty coffee, pizza, fresh pastries, cakes & desserts. Private hall for birthday parties & anniversary celebrations. Opposite Chitti Ground, Batala, Punjab.",

  // ── Keywords (supports content relevance signals) ────────────────────────────
  keywords: [
    // Brand
    "Brooks Cafe Batala",
    "Brooks Cafe and Diner",
    "Brooks Diner Batala",
    // Top search terms (from real search data)
    "restaurants in Batala",
    "restaurants near me Batala",
    "restaurant Batala",
    "best restaurants in Batala",
    "Batala restaurant",
    "restaurants Batala",
    // Cafe
    "cafe in Batala",
    "best cafe in Batala",
    "Batala cafe",
    "coffee in Batala",
    "coffee shop Batala",
    // Bakery
    "best bakery in Batala",
    "bakery in Batala",
    "cake shop Batala",
    "cakes in Batala",
    "pastry shop Batala",
    // Pizza & food
    "pizza in Batala",
    "pizza Batala",
    "continental food Batala",
    "breakfast cafe Batala",
    // Occasions & party hall
    "birthday party hall Batala",
    "birthday hall Batala",
    "party hall Batala",
    "anniversary party hall Batala",
    "birthday party restaurant Batala",
    "birthday celebration Batala",
    "anniversary dinner Batala",
    "private party venue Batala",
    "family restaurant Batala",
    "family dinner Batala",
    // Desserts
    "dessert cafe Batala",
    "best desserts in Batala",
    // Location
    "cafe Batala Punjab",
    "restaurant Batala Punjab",
    "Chitti Ground Batala",
    "Improvement Trust Colony Batala",
  ],

  // ── Canonical ────────────────────────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ── Open Graph (WhatsApp, Facebook previews) ─────────────────────────────────
  openGraph: {
    title: "Brooks Café & Diner | Best Cafe, Bakery & Restaurant in Batala",
    description:
      "Batala's best cafe, bakery & family restaurant. Fresh pastries, specialty coffee, great food & desserts. Opposite Chitti Ground, Batala, Punjab.",
    url: SITE_URL,
    siteName: "Brooks Café & Diner",
    images: [
      {
        url: "/images/dining-hall.jpeg",
        width: 1200,
        height: 630,
        alt: "Brooks Café & Diner — Batala's best cafe and family restaurant",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ── Twitter / X card ────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Brooks Café & Diner | Batala",
    description:
      "Best cafe, bakery & family restaurant in Batala, Punjab. Great food, coffee & desserts.",
    images: ["/images/dining-hall.jpeg"],
  },

  // ── Crawling ─────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  // ── Authorship ───────────────────────────────────────────────────────────────
  authors: [{ name: "Brooks Café & Diner" }],
  category: "restaurant",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4a5e38",
};

// ── JSON-LD Structured Data (Google Rich Results + Local SEO) ─────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "Bakery", "CafeOrCoffeeShop"],
  name: "Brooks Café & Diner",
  alternateName: ["Brooks Cafe Batala", "Brooks Cafe and Diner"],
  description:
    "Batala's best restaurant, cafe & bakery. Specialty coffee, fresh pastries, cakes, pizza, continental food & desserts. Private hall for birthday parties & anniversary celebrations. Where every meal feels like home.",
  url: SITE_URL,
  telephone: "+917719409835",
  priceRange: "₹₹",
  image: `${SITE_URL}/images/dining-hall.jpeg`,
  logo: `${SITE_URL}/images/logo.jpeg`,

  address: {
    "@type": "PostalAddress",
    streetAddress: "Opposite Chitti Ground, Improvement Trust Colony",
    addressLocality: "Batala",
    addressRegion: "Punjab",
    postalCode: "143505",
    addressCountry: "IN",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.8192,
    longitude: 75.2027,
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "10:30",
      closes: "22:30",
    },
  ],

  servesCuisine: [
    "Bakery", "Cafe", "Continental", "Indian",
    "Desserts", "Coffee", "Pastry", "Pizza",
  ],

  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Private Party Hall", value: true },
    { "@type": "LocationFeatureSpecification", name: "Birthday Party Venue", value: true },
    { "@type": "LocationFeatureSpecification", name: "Anniversary Celebrations", value: true },
    { "@type": "LocationFeatureSpecification", name: "Dine In", value: true },
  ],

  hasMenu: `${SITE_URL}/menu/brooks-food-menu.pdf`,

  sameAs: [
    "https://www.instagram.com/brookscafeanddiner",
  ],

  potentialAction: {
    "@type": "ReserveAction",
    target: "tel:+917719409835",
    name: "Reserve a table",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
