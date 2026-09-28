import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://arcaneencode.example/", lastModified: new Date() },
    { url: "https://arcaneencode.example/privacy", lastModified: new Date() },
  ];
}
