import Link from "next/link";
import LanguageSwitch from "./LanguageSwitch";
import { homePath, routePath, type Locale } from "../lib/site";
export default function SiteShell({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Locale;
}) {
  const tr = lang === "tr",
    home = homePath(lang);
  return (
    <html lang={lang}>
      <body>
        <a className="skip" href="#main">
          {tr ? "İçeriğe geç" : "Skip to content"}
        </a>
        <header className="wrap header">
          <Link
            className="identity"
            href={home}
            aria-label={tr ? "Mücahid Enes Deniz, ana sayfa" : "Mücahid Enes Deniz, home"}
          >
            <span className="monogram" aria-hidden="true">
              med.
            </span>
            <span>
              Mücahid Enes Deniz
              <small>{tr ? "Yazılım mühendisi" : "Software engineer"}</small>
            </span>
          </Link>
          <nav aria-label={tr ? "Ana gezinme" : "Main navigation"}>
            <Link href={home + "#work"}>{tr ? "Çalışmalar" : "Work"}</Link>
            <Link href={home + "#about"}>{tr ? "Hakkımda" : "About"}</Link>
            <Link href={routePath(lang, "/resume")}>
              {tr ? "Özgeçmiş" : "Résumé"}
            </Link>
            <LanguageSwitch lang={lang} />
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer className="wrap footer">
          <span>Mücahid Enes Deniz</span>
          <span>
            {tr
              ? "Özenle tasarlandı. Sade tutuldu."
              : "Built with intention. Kept simple."}
          </span>
          <a href="https://github.com/menesdeniz1">GitHub ↗</a>
        </footer>
      </body>
    </html>
  );
}
