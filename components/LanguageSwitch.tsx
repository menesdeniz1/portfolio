"use client";
import { usePathname } from "next/navigation";
export default function LanguageSwitch({ lang }: { lang: "en" | "tr" }) {
  const pathname = usePathname();
  const target =
    lang === "tr"
      ? pathname.replace(/^\/tr(?=\/|$)/, "") || "/"
      : "/tr" + (pathname === "/" ? "" : pathname);
  return (
    <a
      className="language-switch"
      href={target}
      hrefLang={lang === "tr" ? "en" : "tr"}
      aria-label={
        lang === "tr" ? "Read this page in English" : "Bu sayfayı Türkçe oku"
      }
    >
      {lang === "tr" ? "EN" : "TR"}
    </a>
  );
}
