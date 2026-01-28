import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://suyogpoudel.com.np",
      lastModified: new Date(),
    },
    {
      url: "https://suyogpoudel.com.np/about",
      lastModified: new Date(),
    },
    {
      url: "https://suyogpoudel.com.np/projects",
      lastModified: new Date(),
    },
    {
      url: "https://suyogpoudel.com.np/hire-me",
      lastModified: new Date(),
    },
  ];
}
