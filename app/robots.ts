import type { MetadataRoute } from "next";
import { siteUrl, canIndex } from "../lib/site";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(canIndex ? { allow: "/" } : { disallow: "/" }),
    },
    ...(canIndex ? { sitemap: siteUrl + "/sitemap.xml" } : {}),
  };
}
