import type { MetadataRoute } from "next";
import { siteUrl, canIndex } from "../lib/site";
import { slugs } from "../content/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!canIndex || !siteUrl) return [];
  const paths = ["", "/resume", ...slugs.map((s) => "/work/" + s)];
  return paths.flatMap((path) =>
    ["en", "tr"].map((lang) => ({
      url: siteUrl + (lang === "tr" ? "/tr" : "") + path,
      alternates: {
        languages: { en: siteUrl + path, tr: siteUrl + "/tr" + path },
      },
    })),
  );
}
