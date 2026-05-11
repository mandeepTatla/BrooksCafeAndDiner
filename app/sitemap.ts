import { MetadataRoute } from "next";

const SITE_URL = "https://brooks-cafe-and-diner.vercel.app"; // TODO: update when custom domain is ready

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/menu/brooks-food-menu.pdf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
