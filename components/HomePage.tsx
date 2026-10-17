import Link from "next/link";
import { homeCopy } from "../content/home";
import { routePath, type Locale } from "../lib/site";
import {
  VisionDiagram,
  ProductDiagram,
  CameraDiagram,
} from "../app/components/EngineeringDiagrams";
export default function HomePage({ lang }: { lang: Locale }) {
  const c = homeCopy[lang],
    tr = lang === "tr",
    work = (s: string) => routePath(lang, "/work/" + s);
  return (
    <>
      <section className="wrap intro">
        <div className="eyebrow">
          <span className="signal" />
          {c.eyebrow}
        </div>
        <h1>
          {c.headline} <br />
          <em>{c.emphasis}</em>
        </h1>
        <div className="intro-bottom">
          <p>{c.intro}</p>
          <a className="text-link" href="#work">
            {c.explore}
          </a>
        </div>
        <div className="intro-rule">
          <span>{c.selected}</span>
          <span>01 — 03</span>
        </div>
      </section>
      <section
        className="wrap work"
        id="work"
        aria-label={tr ? "Seçili çalışmalar" : "Selected work"}
      >
        <article className="feature">
          <div className="feature-copy">
            <div className="eyebrow">{c.professional}</div>
            <h2>{c.industrialTitle}</h2>
            <p>{c.industrialText}</p>
            <div className="tags">
              <span>{tr ? "Bilgisayarlı görü" : "Computer vision"}</span>
              <span>C++ / Qt</span>
              <span>
                {tr ? "Donanım entegrasyonu" : "Hardware integration"}
              </span>
            </div>
            <Link className="text-link" href={work("industrial-vision")}>
              {c.industrialLink}
            </Link>
            <span className="context">{c.privateLabel}</span>
          </div>
          <VisionDiagram lang={lang} />
        </article>
        <div className="project-pair">
          <article className="project">
            <div className="project-art">
              <ProductDiagram lang={lang} />
            </div>
            <div className="project-copy">
              <div className="eyebrow">{c.independent}</div>
              <h2>
                <Link href={work("keepmoney")}>
                  KeepMoney <span aria-hidden="true">↗</span>
                </Link>
              </h2>
              <p>{c.moneyText}</p>
              <div className="tags">
                <span>Python / FastAPI</span>
                <span>React</span>
                <span>SQL</span>
              </div>
              <Link className="text-link" href={work("keepmoney")}>
                {c.story}
              </Link>
            </div>
          </article>
          <article className="project">
            <CameraDiagram lang={lang} />
            <div className="project-copy">
              <div className="eyebrow">{c.team}</div>
              <h2>
                <Link href={work("camera-to-device")}>
                  {c.cameraTitle}
                  <span aria-hidden="true">↗</span>
                </Link>
              </h2>
              <p>{c.cameraText}</p>
              <div className="tags">
                <span>Python / YOLO</span>
                <span>{tr ? "Eşzamanlılık" : "Concurrency"}</span>
                <span>Arduino</span>
              </div>
              <Link className="text-link" href={work("camera-to-device")}>
                {c.story}
              </Link>
            </div>
          </article>
        </div>
      </section>
      <section className="wrap field-note">
        <div>
          <div className="eyebrow">{c.beyond}</div>
          <h2>{c.beyondTitle}</h2>
        </div>
        <div>
          <p className="large-copy">{c.beyondLead}</p>
          <p>{c.beyondText}</p>
          <p>{c.beyondMore}</p>
        </div>
      </section>
      <section className="wrap explorations">
        <div className="section-top">
          <h2>{c.moreTitle}</h2>
          <span className="eyebrow">{c.moreLabel}</span>
        </div>
        <div className="work-list">
          {c.others.map(([name, description, kind, repo], i) => (
            <a href={"https://github.com/menesdeniz1/" + repo} key={repo}>
              <span className="row-number">0{i + 1}</span>
              <h3>{name}</h3>
              <p>{description}</p>
              <span className="row-kind">{kind}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
      <section className="wrap about" id="about">
        <div>
          <div className="eyebrow">{c.aboutLabel}</div>
          <h2>
            {c.aboutTitle} <br />
            <em>{c.aboutEmphasis}</em>
          </h2>
          <div className="education">
            <div className="eyebrow">{c.education}</div>
            <strong>{c.university}</strong>
            <p>{c.degree}</p>
            <strong>{c.school}</strong>
            <p>{c.schoolDetail}</p>
          </div>
        </div>
        <div>
          {c.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <Link className="text-link" href={routePath(lang, "/resume")}>
            {c.resume}
          </Link>
        </div>
      </section>
      <section className="contact-band">
        <div className="wrap contact">
          <div className="eyebrow">{c.contactLabel}</div>
          <h2>{c.contactTitle}</h2>
          <a href="mailto:mucahidenesdeniz@gmail.com">
            mucahidenesdeniz@gmail.com ↗
          </a>
        </div>
      </section>
    </>
  );
}
