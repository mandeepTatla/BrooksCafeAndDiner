import Image from "next/image";

// Static fallback images shown when the Instagram token is not yet configured
const FALLBACK_IMAGES = [
  { src: "/images/brooks-cafe-interior-ambiance.jpg", alt: "Warm candlelit seating" },
  { src: "/images/brooks-cafe-barista-counter.jpg", alt: "Brooks café counter" },
  { src: "/images/brooks-cafe-dining-hall.jpg", alt: "Main dining hall" },
  { src: "/images/brooks-cafe-exterior-day.jpg", alt: "Brooks Café exterior" },
  { src: "/images/brooks-cafe-exterior-night.jpg", alt: "Brooks Café entrance at dusk" },
];

const INSTAGRAM_HREF = "https://www.instagram.com/brookscafeanddiner";

interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
}

async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=9&access_token=${token}`,
      {
        next: { revalidate: 3600 }, // refresh feed every hour
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.data as InstagramPost[]) ?? [];
  } catch {
    return [];
  }
}

// ── Fallback static gallery ──────────────────────────────────────────────────

function StaticGallery() {
  return (
    <section id="gallery" style={{ backgroundColor: "#f7f3ec" }} className="px-4 py-14">
      <div className="text-center mb-8">
        <p
          className="text-xs tracking-[0.25em] uppercase font-semibold mb-3"
          style={{ color: "#c8a96e" }}
        >
          The Vibe
        </p>
        <h2
          className="text-3xl mb-2"
          style={{ fontFamily: "var(--font-playfair)", color: "#1c2012" }}
        >
          Come see for yourself
        </h2>
      </div>

      {/* Wide top image */}
      <div className="max-w-lg mx-auto">
        <div
          className="relative overflow-hidden rounded-2xl mb-2"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src={FALLBACK_IMAGES[0].src}
            alt={FALLBACK_IMAGES[0].alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 512px"
          />
        </div>
        {/* 2-col grid */}
        <div className="grid grid-cols-2 gap-2">
          {FALLBACK_IMAGES.slice(1).map((img) => (
            <div
              key={img.src}
              className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: "1/1" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 256px"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <a
          href={INSTAGRAM_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-full"
          style={{ color: "#4a5e38", border: "1px solid #4a5e38" }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          Follow @brookscafeanddiner
        </a>
      </div>
    </section>
  );
}

// ── Live Instagram carousel ──────────────────────────────────────────────────

function PostCard({ post }: { post: InstagramPost }) {
  const imgSrc =
    post.media_type === "VIDEO" ? post.thumbnail_url ?? post.media_url : post.media_url;
  const shortCaption = post.caption
    ? post.caption.replace(/#\S+/g, "").trim().slice(0, 90)
    : null;

  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="snap-start shrink-0 overflow-hidden rounded-2xl block"
      style={{ width: "72vw", maxWidth: "280px", backgroundColor: "#ede8df" }}
    >
      <div className="relative" style={{ aspectRatio: "1/1" }}>
        <Image
          src={imgSrc}
          alt={post.caption?.slice(0, 60) ?? "Brooks Café Instagram post"}
          fill
          className="object-cover"
          sizes="280px"
          loading="lazy"
        />
        {/* Video badge */}
        {post.media_type === "VIDEO" && (
          <span
            className="absolute top-2 right-2 text-white text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            ▶ Reel
          </span>
        )}
        {/* Carousel badge */}
        {post.media_type === "CAROUSEL_ALBUM" && (
          <span
            className="absolute top-2 right-2 text-white text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            ⊞
          </span>
        )}
      </div>
      {shortCaption && (
        <p
          className="px-3 py-2.5 text-xs leading-relaxed line-clamp-2"
          style={{ color: "rgba(28,32,18,0.65)" }}
        >
          {shortCaption}
        </p>
      )}
    </a>
  );
}

// ── Main export (server component) ───────────────────────────────────────────

export default async function InstagramFeed() {
  const posts = await fetchInstagramPosts();

  // No token configured yet — show static gallery
  if (posts.length === 0) {
    return <StaticGallery />;
  }

  return (
    <section id="gallery" style={{ backgroundColor: "#f7f3ec" }} className="py-14">
      <div className="text-center mb-8 px-4">
        <p
          className="text-xs tracking-[0.25em] uppercase font-semibold mb-3"
          style={{ color: "#c8a96e" }}
        >
          Our Instagram
        </p>
        <h2
          className="text-3xl mb-2"
          style={{ fontFamily: "var(--font-playfair)", color: "#1c2012" }}
        >
          Follow our journey
        </h2>
        <a
          href={INSTAGRAM_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium"
          style={{ color: "#4a5e38" }}
        >
          @brookscafeanddiner
        </a>
      </div>

      {/* Horizontal scroll carousel — snaps one card at a time */}
      <div
        className="flex gap-3 overflow-x-auto pb-4"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        {/* "See more" end card */}
        <a
          href={INSTAGRAM_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="snap-start shrink-0 flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl"
          style={{
            width: "72vw",
            maxWidth: "280px",
            aspectRatio: "1/1",
            backgroundColor: "#4a5e38",
            color: "white",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 opacity-80"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span
            className="text-sm font-semibold text-center px-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            See all posts
          </span>
          <span className="text-xs opacity-60">@brookscafeanddiner</span>
        </a>
      </div>
    </section>
  );
}
