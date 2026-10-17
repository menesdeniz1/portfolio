import type { Locale } from "../lib/site";
export type Story = {
  title: string;
  intro: string;
  context: string;
  scope: string;
  technology: string;
  status: string;
  sections: { id: string; title: string; paragraphs: string[] }[];
  source?: string;
};
export const slugs = [
  "industrial-vision",
  "keepmoney",
  "camera-to-device",
] as const;
export type Slug = (typeof slugs)[number];
export const stories: Record<Locale, Record<Slug, Story>> = {
  en: {
    "industrial-vision": {
      title: "The software around the inspection.",
      intro:
        "Camera-based inspection is more than a model. It is an application connecting images, operator decisions, recorded results and manufacturing interfaces.",
      context: "Professional work · Private source",
      scope: "End-to-end application development",
      technology: "C++ · Qt · OpenCV · Python",
      status: "High-level account of industrial experience",
      sections: [
        {
          id: "context",
          title: "Start with the working environment.",
          paragraphs: [
            "My industrial experience includes camera-based inspection software used at factory sites. The work spans imaging configuration, processing algorithms, operator interfaces and data recording.",
            "The challenge is not simply obtaining a detection. The application needs to turn incoming images into information an operator can use, while connecting to the surrounding production workflow.",
          ],
        },
        {
          id: "ownership",
          title: "Own the software. Respect the interfaces.",
          paragraphs: [
            "I developed the software across its application layers, including inspection algorithms and user-facing interfaces. Camera and lens configuration were also part of my work.",
            "External teams installed the physical platform and handled electrical communication work. I used the provided communication interfaces to integrate the inspection application with PLC data. End-to-end software responsibility does not mean claiming the entire hardware installation.",
          ],
        },
        {
          id: "pipeline",
          title: "Think beyond the happy path.",
          paragraphs: [
            "The implementation includes threaded image-processing workflows, work queues and error recording. These mechanisms help separate responsibilities and make processing problems visible.",
            "For example, a queue reaching its limit needs explicit handling; simply running an inference model does not answer what should happen to unfinished work. Recorded outcomes matter alongside detection output.",
          ],
        },
        {
          id: "application",
          title: "Make results usable.",
          paragraphs: [
            "Qt interfaces and persistent records are part of the system, not accessories to the model. The software connects processing with settings, operator feedback and recorded inspection information.",
            "This is where my computer-vision focus meets broader application engineering: designing the surrounding software so an algorithm becomes part of a usable workflow.",
          ],
        },
        {
          id: "boundaries",
          title: "What can be shared.",
          paragraphs: [
            "This account describes my responsibilities at a high level. Company code, configurations, operational data and internal screenshots are not published. The illustration is conceptual, not a real deployment diagram.",
            "No new throughput, accuracy, financial-impact or availability measurement is claimed. Deployment experience is my account of the work; the source code alone is not evidence of its business impact.",
          ],
        },
      ],
    },
    keepmoney: {
      title: "One application. More than one interface.",
      intro:
        "A price-tracking application built around shared product history, personal targets, and a common foundation for the web and Telegram.",
      context: "Independent project",
      scope: "Application design & development",
      technology: "Python · FastAPI · React · SQL",
      status: "Portfolio project · Not a live service",
      source: "https://github.com/menesdeniz1/keepmoney",
      sections: [
        {
          id: "problem",
          title: "A price is a reading. Tracking is a system.",
          paragraphs: [
            "A current price alone does not describe its history. A tracking application also needs to distinguish the product being observed, the retailer page providing a reading, and the person deciding what to watch.",
            "KeepMoney brings price history, personal targets and groups of watched products into a web interface and a Telegram bot. My work spans the interface, backend, data model and background workflows.",
          ],
        },
        {
          id: "model",
          title: "Shared observations. Personal decisions.",
          paragraphs: [
            "The model separates Product, Source and PriceReading from personal Watch and WatchSet records. Multiple retailer pages can describe one logical product; a user’s tracking target is a separate concern.",
            "A product does not belong to one person just because they follow its price. Observations can be shared while preferences remain personal. The trade-off: editing shared product information can affect more than one person.",
          ],
        },
        {
          id: "interfaces",
          title: "Two interfaces, common behavior.",
          paragraphs: [
            "The API routes and Telegram handlers call service modules. Price analysis is kept separate from the HTTP and bot interfaces, so behavior does not have to be defined independently for each channel.",
            "The interesting full-stack decision is not only adding a screen, but deciding where application behavior belongs.",
          ],
        },
        {
          id: "history",
          title: "Make the history mean something.",
          paragraphs: [
            "A day with many price readings should not automatically have more weight than a day with only a few.",
            "The analysis includes grouping readings into daily minimums before historical comparisons. That makes the unit of comparison a day, rather than a raw sample. It is a deliberate interpretation of the data, not a prediction of future prices.",
          ],
        },
        {
          id: "scope",
          title: "Scope, evidence and limits.",
          paragraphs: [
            "This project demonstrates a shared data model, multiple interfaces and background collection workflows. The repository contains implementation, tests and architecture notes for further inspection.",
            "It is not presented as a launched commercial service. Live retailer operation is not established by this portfolio; no user counts, savings or uptime metrics are claimed. Development was AI-assisted, with my design decisions and implementation direction.",
          ],
        },
      ],
    },
    "camera-to-device": {
      title: "From camera frames to device messages.",
      intro:
        "A university team capstone connecting object detection, a threaded camera pipeline and an Arduino display.",
      context: "University team project",
      scope: "Computer vision & application integration",
      technology: "Python · OpenCV · YOLO · Arduino",
      status: "Experimental project · Public source",
      source: "https://github.com/menesdeniz1/capstone-project",
      sections: [
        {
          id: "problem",
          title: "Give detections somewhere to go.",
          paragraphs: [
            "The project explores detecting M&M objects from camera input and sending information to a connected device. It links image processing with serial/Bluetooth communication rather than ending at an annotated image.",
            "This was a university team project. The published repository retains its team history; the work is not represented as exclusively solo.",
          ],
        },
        {
          id: "pipeline",
          title: "Separate capture, inference and display.",
          paragraphs: [
            "The local camera script separates capture, inference and display into threads and uses two bounded queues. Those boundaries make the flow of work explicit.",
            "A configured camera rate is a target, not a measured throughput result. Capture speed and model processing speed should not be confused.",
          ],
        },
        {
          id: "device",
          title: "A small, concrete hardware boundary.",
          paragraphs: [
            "The Arduino receiver accepts newline-delimited Bluetooth messages and displays them on an I2C LCD. This is the supported end point visible in the receiver code.",
            "The receiver does not implement servo sorting control. The project should therefore be understood as detection and communication experimentation, not a validated automatic sorting machine.",
          ],
        },
        {
          id: "learning",
          title: "What the project adds to my work.",
          paragraphs: [
            "It provides a public example of camera processing, concurrency and a device communication boundary in the same application.",
            "Historical scripts and models are preserved, but some variants have environment-specific assumptions. The repository explains the local entry point and configuration. No new hardware performance or accuracy claim is made here.",
          ],
        },
      ],
    },
  },
  tr: {
    "industrial-vision": {
      title: "İncelemeyi kullanılabilir kılan yazılım.",
      intro:
        "Kamera tabanlı inceleme, bir modelden fazlası. Görüntüleri, operatör kararlarını, kayıtları ve üretim arayüzlerini birleştiren bir uygulama.",
      context: "Profesyonel çalışma · Kapalı kaynak",
      scope: "Uçtan uca uygulama geliştirme",
      technology: "C++ · Qt · OpenCV · Python",
      status: "Endüstriyel deneyimin üst düzey özeti",
      sections: [
        {
          id: "context",
          title: "Önce çalışma ortamını anlamak.",
          paragraphs: [
            "Endüstriyel deneyimim, fabrika sahalarında kullanılan kamera tabanlı inceleme yazılımlarını kapsıyor. Görüntü ayarları, işleme algoritmaları, operatör arayüzleri ve veri kaydı üzerinde çalıştım.",
            "Mesele yalnızca bir nesneyi veya hatayı algılamak değil. Gelen görüntüyü, üretim akışına bağlanan ve operatörün kullanabileceği bilgiye dönüştürmek gerekiyor.",
          ],
        },
        {
          id: "ownership",
          title: "Yazılımın bütününü üstlenmek.",
          paragraphs: [
            "İnceleme algoritmaları ve kullanıcı arayüzleri dâhil uygulamanın yazılım katmanlarını geliştirdim. Kamera ve lens ayarları da çalışmalarımın bir parçasıydı.",
            "Fiziksel platformun kurulumu ve elektrik haberleşmesi dış ekipler tarafından yapıldı. Sağlanan haberleşme arayüzlerini kullanarak uygulamayı PLC verileriyle entegre ettim. Yazılımın uçtan uca sorumluluğu, tüm donanım kurulumunu sahiplenmek anlamına gelmiyor.",
          ],
        },
        {
          id: "pipeline",
          title: "Yalnızca sorunsuz akışı düşünmemek.",
          paragraphs: [
            "Uygulama; çok iş parçacıklı görüntü işleme akışları, iş kuyrukları ve hata kaydı içeriyor. Bu mekanizmalar sorumlulukları ayırmaya ve işleme sorunlarını görünür kılmaya yardımcı oluyor.",
            "Örneğin bir kuyruk sınırına ulaştığında ne yapılacağı açıkça ele alınmalı. Modeli çalıştırmak, tamamlanamayan işin nasıl yönetileceğini tek başına çözmüyor. Algılama çıktısı kadar sonucun kaydı da önemli.",
          ],
        },
        {
          id: "application",
          title: "Sonucu kullanılabilir kılmak.",
          paragraphs: [
            "Qt arayüzleri ve kalıcı kayıtlar, modelin yanına eklenmiş süsler değil; sistemin parçaları. Yazılım; işlemeyi, ayarları, operatör geri bildirimini ve inceleme kayıtlarını birleştiriyor.",
            "Bilgisayarlı görü odağım burada uygulama mühendisliğiyle buluşuyor: algoritmanın çevresindeki yazılımı, kullanılabilir bir iş akışı oluşturacak şekilde geliştirmek.",
          ],
        },
        {
          id: "boundaries",
          title: "Paylaşım sınırları.",
          paragraphs: [
            "Bu anlatım sorumluluklarımı üst düzeyde özetliyor. Şirket kodları, ayarlar, operasyonel veriler ve iç ekran görüntüleri paylaşılmıyor. Çizim, gerçek bir kurulum şeması değil; kavramsal bir açıklama.",
            "Yeni hız, doğruluk, finansal etki veya kesintisiz çalışma ölçümü iddia edilmiyor. Saha kullanımı, deneyimime ilişkin beyanımdır; kod tek başına iş etkisinin kanıtı değildir.",
          ],
        },
      ],
    },
    keepmoney: {
      title: "Tek uygulama. Birden fazla arayüz.",
      intro:
        "Ortak ürün geçmişi, kişisel hedefler ve web ile Telegram için ortak bir temel üzerine kurulu fiyat takip uygulaması.",
      context: "Bağımsız proje",
      scope: "Uygulama tasarımı ve geliştirme",
      technology: "Python · FastAPI · React · SQL",
      status: "Portföy projesi · Canlı servis değil",
      source: "https://github.com/menesdeniz1/keepmoney",
      sections: [
        {
          id: "problem",
          title: "Fiyat bir okuma. Takip ise bir sistem.",
          paragraphs: [
            "Anlık fiyat, ürünün geçmişini tek başına anlatmaz. Takip uygulamasında ürünü, fiyatın okunduğu mağaza sayfasını ve takip tercihini belirleyen kullanıcıyı birbirinden ayırmak gerekir.",
            "KeepMoney; fiyat geçmişini, kişisel hedefleri ve ürün gruplarını web arayüzü ile Telegram botunda bir araya getiriyor. Çalışmam arayüzü, backend’i, veri modelini ve arka plan akışlarını kapsıyor.",
          ],
        },
        {
          id: "model",
          title: "Ortak gözlemler. Kişisel kararlar.",
          paragraphs: [
            "Veri modeli; Product, Source ve PriceReading kayıtlarını kişisel Watch ve WatchSet kayıtlarından ayırıyor. Birden fazla mağaza sayfası aynı mantıksal ürünü temsil edebilir; kullanıcının takip hedefi ayrı bir konu.",
            "Bir ürün, fiyatını takip ettiği için tek bir kullanıcıya ait olmaz. Gözlemler paylaşılırken tercihler kişisel kalabilir. Bunun bedeli, ortak ürün bilgisindeki bir değişikliğin birden fazla kullanıcıyı etkileyebilmesi.",
          ],
        },
        {
          id: "interfaces",
          title: "İki arayüz, ortak davranış.",
          paragraphs: [
            "API rotaları ve Telegram işleyicileri servis modüllerini çağırıyor. Fiyat analizi HTTP ve bot arayüzlerinden ayrı tutuluyor; uygulama davranışını her kanalda yeniden tanımlamak gerekmiyor.",
            "Buradaki full-stack kararı yalnızca bir ekran daha eklemek değil, uygulama davranışının nerede yaşaması gerektiğini belirlemek.",
          ],
        },
        {
          id: "history",
          title: "Geçmiş veriye tutarlı bir anlam vermek.",
          paragraphs: [
            "Çok sayıda fiyat okunan bir gün, az okuma yapılan bir günden otomatik olarak daha ağır basmamalı.",
            "Analizde, tarihsel karşılaştırmalardan önce okumalar günlük minimumlara gruplanıyor. Böylece karşılaştırma birimi ham örnek değil, gün oluyor. Bu, veriye ilişkin bir tasarım tercihi; gelecekteki fiyatın tahmini değil.",
          ],
        },
        {
          id: "scope",
          title: "Kapsam, kanıt ve sınırlar.",
          paragraphs: [
            "Proje; ortak veri modelini, birden fazla arayüzü ve arka plan veri toplama akışlarını gösteriyor. Repoda uygulama, testler ve mimari karar notları incelenebilir.",
            "Ticari olarak yayına alınmış bir servis olarak sunulmuyor. Bu portföy canlı mağaza entegrasyonlarının çalıştığını kanıtlamıyor; kullanıcı sayısı, tasarruf veya uptime iddiası yok. Tasarım kararları ve geliştirme yönlendirmesi bana ait olmak üzere AI destekli geliştirme kullanıldı.",
          ],
        },
      ],
    },
    "camera-to-device": {
      title: "Kamera görüntüsünden cihaz mesajına.",
      intro:
        "Nesne algılamayı, çok iş parçacıklı kamera akışını ve Arduino ekranını bir araya getiren üniversite ekip projesi.",
      context: "Üniversite ekip projesi",
      scope: "Bilgisayarlı görü ve uygulama entegrasyonu",
      technology: "Python · OpenCV · YOLO · Arduino",
      status: "Deneysel proje · Açık kaynak",
      sections: [
        {
          id: "problem",
          title: "Algılama çıktısını bir cihaza taşımak.",
          paragraphs: [
            "Proje, kamera görüntüsünden M&M nesnelerinin algılanmasını ve bağlı bir cihaza bilgi gönderilmesini inceliyor. İşaretlenmiş bir görüntüde durmak yerine görüntü işlemeyi seri/Bluetooth haberleşmesine bağlıyor.",
            "Bu bir üniversite ekip projesiydi. Yayınlanan repo ekip geçmişini koruyor; çalışma yalnızca benim yaptığım bir proje olarak sunulmuyor.",
          ],
        },
        {
          id: "pipeline",
          title: "Görüntü alma, çıkarım ve gösterimi ayırmak.",
          paragraphs: [
            "Yerel kamera betiğinde görüntü alma, model çıkarımı ve gösterim ayrı iş parçacıklarında çalışıyor; iki sınırlı kuyruk kullanılıyor. Bu sınırlar işin akışını açık hâle getiriyor.",
            "Ayarlanmış kamera hızı bir hedeftir, ölçülmüş işleme hızı değildir. Kamera FPS’i ile modelin işleme hızı birbirine karıştırılmamalı.",
          ],
        },
        {
          id: "device",
          title: "Küçük ve somut bir donanım bağlantısı.",
          paragraphs: [
            "Arduino alıcısı, satır sonuyla ayrılmış Bluetooth mesajlarını alıp I2C LCD’de gösteriyor. Alıcı kodunda görülen uç nokta bu.",
            "Alıcı servo ile ayırma kontrolü uygulamıyor. Bu nedenle proje, doğrulanmış otomatik ayırma makinesi olarak değil; algılama ve haberleşme denemesi olarak değerlendirilmeli.",
          ],
        },
        {
          id: "learning",
          title: "Bu çalışma neyi gösteriyor?",
          paragraphs: [
            "Kamera işleme, eşzamanlılık ve cihaz haberleşmesini aynı uygulamada incelemek için açık bir örnek sunuyor.",
            "Geçmiş betikler ve modeller korunuyor; bazı varyantlar ortama özel varsayımlar içeriyor. Yerel giriş noktası ve yapılandırma repoda açıklanıyor. Yeni donanım performansı veya doğruluk iddiası yok.",
          ],
        },
      ],
      source: "https://github.com/menesdeniz1/capstone-project",
    },
  },
};
