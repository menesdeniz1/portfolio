import Link from "next/link";
import PrintButton from "./PrintButton";
import { homePath, type Locale } from "../lib/site";
export default function ResumePage({ lang }: { lang: Locale }) {
  const tr = lang === "tr";
  const jobs = tr
    ? [
        [
          "Endüstriyel yazılım geliştirme",
          "Kastamonu Entegre",
          "Kamera tabanlı inceleme yazılımları; görüntü ayarları, işleme algoritmaları, Qt operatör arayüzleri, veri kaydı ve PLC haberleşme arayüzleriyle entegrasyon.",
        ],
        [
          "Uzun dönem staj",
          "TalenTree · 2024–2025",
          "Proje ekiplerinin koordinasyonu ve Scrum Master sorumlulukları.",
        ],
        [
          "Mobil uygulama stajı",
          "Harpeon · 2023",
          "React Native ve Expo ile mobil uygulama özellikleri ve harici API entegrasyonu.",
        ],
      ]
    : [
        [
          "Industrial software development",
          "Kastamonu Entegre",
          "Camera-based inspection applications: imaging configuration, processing algorithms, Qt operator interfaces, data recording and integration with PLC communication interfaces.",
        ],
        [
          "Long-term internship",
          "TalenTree · 2024–2025",
          "Project-team coordination and Scrum Master responsibilities.",
        ],
        [
          "Mobile application internship",
          "Harpeon · 2023",
          "Mobile application features with React Native and Expo, including external API integration.",
        ],
      ];
  return (
    <article className="wrap resume-page">
      <div className="resume-tools">
        <Link href={homePath(lang)}>{tr ? "← Ana sayfa" : "← Home"}</Link>
        <PrintButton tr={tr} />
      </div>
      <header>
        <div className="eyebrow">{tr ? "ÖZGEÇMİŞ" : "RÉSUMÉ"}</div>
        <h1>Mücahid Enes Deniz</h1>
        <p className="large-copy">
          {tr
            ? "Yazılım Mühendisi · Bilgisayarlı Görü"
            : "Software Engineer · Computer Vision"}
        </p>
        <p>
          <a href="mailto:mucahidenesdeniz@gmail.com">
            mucahidenesdeniz@gmail.com
          </a>{" "}
          · <a href="https://github.com/menesdeniz1">github.com/menesdeniz1</a>{" "}
          · <a href="https://linkedin.com/in/menesdeniz1">LinkedIn</a>
        </p>
      </header>
      <section>
        <h2>{tr ? "Profil" : "Profile"}</h2>
        <p>
          {tr
            ? "Bilgisayarlı görü odağıyla uçtan uca uygulamalar geliştiren yazılım mühendisi. Endüstriyel inceleme, kullanıcı arayüzleri, veri işleme ve donanım entegrasyonu deneyimi; bağımsız web uygulamaları ve sistem programlama çalışmaları."
            : "Software engineer focused on computer vision and complete applications. Experience across industrial inspection, user interfaces, data processing and hardware integration, complemented by independent web applications and systems programming projects."}
        </p>
      </section>
      <section>
        <h2>{tr ? "Deneyim" : "Experience"}</h2>
        {jobs.map(([role, company, description]) => (
          <div className="resume-entry" key={company}>
            <h3>{role}</h3>
            <span className="resume-company">{company}</span>
            <p>{description}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>{tr ? "Seçili çalışmalar" : "Selected work"}</h2>
        <div className="resume-entry">
          <h3>KeepMoney</h3>
          <p>
            {tr
              ? "FastAPI ve React tabanlı fiyat takip uygulaması. Ortak ürün geçmişi, kişisel takip tercihleri, web ve Telegram arayüzleri ile arka plan iş akışları. Canlı ticari servis olarak sunulmuyor."
              : "FastAPI and React price-tracking application with shared product history, personal preferences, web and Telegram interfaces, and background workflows. Not presented as a live commercial service."}
          </p>
        </div>
        <div className="resume-entry">
          <h3>
            {tr
              ? "Kamera ve Arduino entegrasyonu"
              : "Camera and Arduino integration"}
          </h3>
          <p>
            {tr
              ? "Üniversite ekip projesi: YOLO algılama, çok iş parçacıklı kamera akışı ve Arduino LCD’ye seri/Bluetooth mesajları."
              : "University team project: YOLO detection, threaded camera processing and serial/Bluetooth messages to an Arduino LCD."}
          </p>
        </div>
        <div className="resume-entry">
          <h3>KeepAwake</h3>
          <p>
            {tr
              ? "Uyku engelleme ve zamanlama için masaüstü yardımcı uygulaması."
              : "Desktop utility for sleep prevention and scheduling."}
          </p>
        </div>
      </section>
      <section>
        <h2>{tr ? "Teknik alanlar" : "Technical areas"}</h2>
        <p>
          C++ · Python · TypeScript / React · Qt · FastAPI · OpenCV · YOLO · SQL
          · Git · Docker
        </p>
      </section>
      <section>
        <h2>{tr ? "Eğitim" : "Education"}</h2>
        <h3>{tr ? "Bahçeşehir Üniversitesi" : "Bahçeşehir University"}</h3>
        <p>
          {tr
            ? "Bilgisayar Mühendisliği Lisans · Tam burslu · 2020–2025"
            : "B.Sc. Computer Engineering · Full scholarship · 2020–2025"}
        </p>
        <h3>Bornova Anadolu Lisesi</h3>
        <p>2016–2020</p>
      </section>
      <section>
        <h2>{tr ? "İlgi alanları" : "Interests"}</h2>
        <p>
          {tr
            ? "Oyun ve espor, satranç, salsa, koşu ve tekvando."
            : "Gaming and esports, chess, salsa, running and taekwondo."}
        </p>
      </section>
    </article>
  );
}
