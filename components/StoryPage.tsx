import Link from "next/link";
import { stories, slugs, type Slug } from "../content/projects";
import { homePath, type Locale } from "../lib/site";
import {
  VisionDiagram,
  ProductDiagram,
  CameraDiagram,
} from "../app/components/EngineeringDiagrams";
import { notFound } from "next/navigation";
export default function StoryPage({
  lang,
  slug,
}: {
  lang: Locale;
  slug: string;
}) {
  if (!slugs.includes(slug as Slug)) notFound();
  const s = stories[lang][slug as Slug],
    tr = lang === "tr";
  return (
    <div className="wrap">
      <header className="case-head">
        <Link href={homePath(lang) + "#work"} className="back-link">
          {tr ? "← Seçili çalışmalara dön" : "← Back to selected work"}
        </Link>
        <div className="eyebrow">
          {tr ? "MÜHENDİSLİK ÇALIŞMASI" : "ENGINEERING STORY"} /{" "}
          {slug === "keepmoney"
            ? "KEEPMONEY"
            : tr
              ? "UYGULAMA VE SİSTEMLER"
              : "APPLICATIONS & SYSTEMS"}
        </div>
        <h1>{s.title}</h1>
        <p>{s.intro}</p>
        <dl className="case-meta">
          {[
            [tr ? "BAĞLAM" : "CONTEXT", s.context],
            [tr ? "KAPSAM" : "SCOPE", s.scope],
            [tr ? "TEKNOLOJİ" : "TECHNOLOGY", s.technology],
            [tr ? "DURUM" : "STATUS", s.status],
          ].map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </header>
      <div className="case-body">
        <nav
          className="case-nav"
          aria-label={tr ? "Bu sayfada" : "On this page"}
        >
          {s.sections.map((section, i) => (
            <a key={section.id} href={"#" + section.id}>
              0{i + 1} / {section.title}
            </a>
          ))}
        </nav>
        <article className="case-story">
          {slug === "keepmoney" ? (
            <ProductDiagram lang={lang} />
          ) : slug === "industrial-vision" ? (
            <VisionDiagram lang={lang} />
          ) : (
            <CameraDiagram lang={lang} />
          )}
          {s.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
          <div className="case-links">
            {s.source && (
              <a className="text-link" href={s.source}>
                {tr ? "Kaynak kodu incele ↗" : "Explore the repository ↗"}
              </a>
            )}
            <Link className="text-link" href={homePath(lang) + "#work"}>
              {tr ? "Diğer çalışmalar →" : "More selected work →"}
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
