import { MetadataRoute } from "next";

const SITE_URL = "https://brooks-cafe-and-diner.vercel.app"; // TODO: update when custom domain is ready

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
