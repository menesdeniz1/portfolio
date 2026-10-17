import type { Metadata } from "next";
export type Locale = "en" | "tr";
export const homePath = (lang: Locale) => (lang === "tr" ? "/tr" : "/");
export const routePath = (lang: Locale, path: string) =>
  (lang === "tr" ? "/tr" : "") + path;
export const siteUrl = process.env.SITE_URL?.replace(/\/$/, "");
export const canIndex = !!siteUrl && process.env.SITE_PUBLISH === "true";
export function pageMetadata(
  lang: Locale,
  path = "",
  title?: string,
): Metadata {
  const description =
    lang === "tr"
      ? "Mücahid Enes Deniz. Bilgisayarlı görü, uçtan uca yazılım geliştirme ve seçili mühendislik çalışmaları."
      : "Mücahid Enes Deniz. Computer vision, complete applications and selected engineering work.";
  const url = routePath(lang, path) || "/";
  return {
    title: title || "Mücahid Enes Deniz — Software & Computer Vision",
    description,
    icons: { icon: "/icon.svg" },
    robots: { index: canIndex, follow: canIndex },
    ...(siteUrl
      ? {
          metadataBase: new URL(siteUrl),
          alternates: {
            canonical: url,
            languages: { en: path || "/", tr: "/tr" + path },
          },
          openGraph: {
            title: title || "Mücahid Enes Deniz",
            description,
            url,
            siteName: "Mücahid Enes Deniz",
            locale: lang === "tr" ? "tr_TR" : "en_US",
            type: "website",
            images: [{ url: "/social-card.png", width: 1200, height: 630 }],
          },
        }
      : {}),
  };
}
