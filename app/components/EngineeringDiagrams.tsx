export function VisionDiagram({ lang = "en" }: { lang?: "en" | "tr" }) {
  const tr = lang === "tr";
  return (
    <figure className="vision-diagram">
      <svg
        viewBox="0 0 600 430"
        role="img"
        aria-labelledby="vision-title vision-desc"
      >
        <title id="vision-title">
          {tr ? "Görüntüden uygulamaya" : "From image to application"}
        </title>
        <desc id="vision-desc">
          {tr
            ? "Görüntü bölgesi, işleme adımları ve operatör arayüzünün kavramsal çizimi. Gerçek inceleme çıktısı değildir."
            : "Abstract image region, processing stages and operator interface. Not a real inspection output."}
        </desc>
        <defs>
          <pattern
            id="grid"
            width="25"
            height="25"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M25 0H0V25"
              fill="none"
              stroke="#ccd7d2"
              strokeWidth=".7"
            />
          </pattern>
        </defs>
        <rect width="600" height="430" fill="#e9eee9" />
        <rect width="600" height="430" fill="url(#grid)" />
        <text x="32" y="35" className="svg-label">
          {tr
            ? "ŞEKİL 01 / GÖRÜNTÜ → UYGULAMA"
            : "FIG. 01 / IMAGE → APPLICATION"}
        </text>
        <g transform="translate(75 82) rotate(-8 220 100)">
          <rect
            width="405"
            height="190"
            rx="3"
            fill="#cbd6c9"
            stroke="#8fa58f"
          />
          <path d="M0 38H405M0 76H405M0 114H405M0 152H405" stroke="#b3c2b0" />
          <path d="M80 0v190M230 0v190M350 0v190" stroke="#b8c7b6" />
          <path
            d="m213 64 17 16-12 19 22 17-8 16"
            fill="none"
            stroke="#75816c"
            strokeWidth="4"
          />
          <rect
            x="193"
            y="48"
            width="68"
            height="98"
            fill="none"
            stroke="#245c50"
            strokeWidth="2"
          />
          <path
            d="M186 48h-9v12M267 48h9v12M186 146h-9v-12M267 146h9v-12"
            fill="none"
            stroke="#245c50"
            strokeWidth="2"
          />
        </g>
        <path
          d="M307 249v39h155v24"
          fill="none"
          stroke="#245c50"
          strokeDasharray="4 5"
        />
        <rect
          x="342"
          y="312"
          width="225"
          height="79"
          rx="4"
          fill="#f7f8f3"
          stroke="#a5b8ac"
        />
        <circle cx="361" cy="333" r="4" fill="#245c50" />
        <text x="374" y="337" className="svg-label">
          {tr ? "OPERATÖR ARAYÜZÜ" : "OPERATOR INTERFACE"}
        </text>
        <path d="M360 353h67M360 365h112" stroke="#a5b8ac" strokeWidth="3" />
        <text x="32" y="332" className="svg-label">
          {tr ? "GÖRÜNTÜ AL" : "CAPTURE"}
        </text>
        <text x="32" y="354" className="svg-label">
          {tr ? "İŞLE" : "PROCESS"}
        </text>
        <text x="32" y="376" className="svg-label">
          {tr ? "KAYDET + GÖSTER" : "RECORD + PRESENT"}
        </text>
      </svg>
      <figcaption>
        {tr
          ? "Kavramsal çizim · gerçek inceleme çıktısı değil"
          : "Conceptual illustration · not a live inspection result"}
      </figcaption>
    </figure>
  );
}
export function ProductDiagram({ lang = "en" }: { lang?: "en" | "tr" }) {
  const tr = lang === "tr";
  return (
    <figure
      className="product-diagram"
      aria-label={
        tr
          ? "Kavramsal veri modeli: ortak ürünler, kaynaklar ve fiyat geçmişi; ayrı kişisel takipler."
          : "Conceptual data model: shared products, sources and price history, with separate personal watches."
      }
    >
      <div className="diagram-label">
        {tr
          ? "ŞEKİL 02 / ORTAK VERİ, KİŞİSEL TAKİP"
          : "FIG. 02 / SHARED DATA, PERSONAL CONTEXT"}
      </div>
      <div className="model-path">
        <div className="model-node small-node">Web</div>
        <div className="model-node small-node">Telegram</div>
      </div>
      <div className="model-line" />
      <div className="model-node primary-node">
        <span className="node-icon" aria-hidden="true">
          ▧
        </span>
        <div>
          {tr ? "Ürün" : "Product"}
          <span>{tr ? "Ortak kimlik" : "Shared identity"}</span>
        </div>
      </div>
      <div className="model-branches">
        <div className="model-node">
          {tr ? "Kaynaklar" : "Sources"}
          <span>{tr ? "Fiyat okumaları" : "Price readings"}</span>
        </div>
        <div className="model-node">
          {tr ? "Takipler" : "Watches"}
          <span>{tr ? "Kişisel hedefler" : "Personal targets"}</span>
        </div>
      </div>
      <figcaption>
        {tr
          ? "Veri modeli çizimi; uygulama ekran görüntüsü değil"
          : "Data-model illustration, not an application screenshot"}
      </figcaption>
    </figure>
  );
}

export function CameraDiagram({ lang = "en" }: { lang?: "en" | "tr" }) {
  const tr = lang === "tr";
  return (
    <div
      className="camera-art"
      role="img"
      aria-label={
        tr
          ? "Kavramsal kamera, algılama ve Arduino ekranı akışı. Canlı gösterim değildir."
          : "Conceptual camera, detection and Arduino display pipeline. Not a live demonstration."
      }
    >
      <div className="camera-stage">
        <span className="diagram-label">
          {tr ? "KAMERA GÖRÜNTÜSÜ / KAVRAMSAL" : "CAMERA FRAME / CONCEPT"}
        </span>
        <div className="candies">
          <i />
          <i />
          <i />
          <i />
          <div className="detection-box">
            <span>{tr ? "nesne" : "object"}</span>
          </div>
        </div>
      </div>
      <div className="pipeline-strip">
        <span>{tr ? "Görüntü al" : "Capture"}</span>
        <b>→</b>
        <span>{tr ? "Algıla" : "Detect"}</span>
        <b>→</b>
        <span>{tr ? "Göster" : "Display"}</span>
      </div>
    </div>
  );
}
