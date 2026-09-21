import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import logo from "@/assets/logo-site-optimized.webp"

import heroArtwork from "@/assets/illustrations/main-hero-optimized.webp"

import phoneIcon from "@/assets/icons/phone.png"

import mailIcon from "@/assets/icons/mail.png"

import branchPosition1 from "@/assets/illustrations/branch-sprig-01-optimized.webp"
import aboutSummaryBranch from "@/assets/illustrations/about-summary-branch-optimized.webp"

import contactBranch from "@/assets/illustrations/footer-branch.png"

import staffHeaderArtwork from "@/assets/illustrations/staff-section-header.png"

import staffBranchArtwork from "@/assets/illustrations/staff-card-branch.png"

import brandNameArtwork from "@/assets/illustrations/logo-text-95.webp"

import standardArtwork from "@/assets/illustrations/plan-standard.png"

import comfortArtwork from "@/assets/illustrations/plan-comfort-optimized.webp"

import premiumArtwork from "@/assets/illustrations/plan-premium-optimized.webp"

import phoneArtwork from "@/assets/illustrations/settlement-phone.png"

import documentsArtwork from "@/assets/illustrations/settlement-documents.png"

import homeArtwork from "@/assets/illustrations/settlement-home.png"

import documentsTile from "@/assets/illustrations/info-documents-optimized.webp"

import reviewsTile from "@/assets/illustrations/info-reviews.png"

import questionsTile from "@/assets/illustrations/info-questions.png"

import staffPhoto from "@/assets/staff-caregiver-male.png"
import tamaraBizyaevaPhoto from "@/assets/staff-bizyaeva-tamara-landscape.png"

import roomTvCornerPhoto from "@/assets/gallery/room-tv-corner.webp"

import bookshelfPhoto from "@/assets/gallery/bookshelf.webp"

import twinRoomPhoto from "@/assets/gallery/twin-room.webp"

import singleRoomPhoto from "@/assets/gallery/room-single-bed.webp"

import receptionPhoto from "@/assets/gallery/reception.webp"

import mainGalleryPhoto from "@/assets/gallery/dom-prestarelyh-main.webp"

const primaryPhone = "8 (8512) 48-19-18"
const primaryPhoneHref = "tel:+78512481918"
const secondaryPhone = "8 (927) 501-25-91"
const secondaryPhoneHref = "tel:+79275012591"
const messengerPhone = "+7 (917) 081-13-27"
const telegramUrl = "https://t.me/+79170811327"
const maxUrl = "https://max.ru/+79170811327"
const contactEmail = "nko.pozitiv@bk.ru"
const organizationName = "АНО «Позитив»"

const navigation = [
  { label: "Главная", href: "#главная" },

  { label: "О нас", href: "#о-нас" },

  { label: "Цены", href: "/prices" },

  { label: "Отзывы", href: "/reviews" },

  { label: "Контакты", href: "#контакты" },
]

const advantages = [
  {
    title: "Заботливый персонал 24/7",

    description: "Всегда рядом и готов помочь",

    icon: "heart",
  },

  {
    title: "Насыщенная жизнь",

    description: "Общение, занятия и добрые события каждый день",

    icon: "activity",
  },

  {
    title: "Уют и безопасность",

    description: "Комфортные условия для жизни",

    icon: "home",
  },
]

const settlementSteps = [
  {
    number: "01",

    title: "Заявка-консультация",

    description: "Ответим на вопросы и подберём подходящие условия.",

    artwork: phoneArtwork,
  },

  {
    number: "02",

    title: "Знакомство",

    description: "Проведём экскурсию и поможем с документами.",

    artwork: documentsArtwork,
  },

  {
    number: "03",

    title: "Комфортное заселение",

    description: "Поможем спокойно освоиться в новом уютном доме.",

    artwork: homeArtwork,
  },
]

const prices = [
  {
    name: "Стандарт",

    description: "Уютная комната и базовый уход",

    price: "от XX XXX ₽",

    artwork: standardArtwork,
  },

  {
    name: "Комфорт",

    description: "Расширенный уход и дополнительные услуги",

    price: "от XX XXX ₽",

    artwork: comfortArtwork,

    featured: true,
  },

  {
    name: "Премиум",

    description: "Повышенный комфорт и больше личного внимания",

    price: "от XX XXX ₽",

    artwork: premiumArtwork,
  },
]

const priceList = prices.map((item) => ({
  ...item,
  period: "в день",
  note: "Точную стоимость и подходящие условия уточните во время консультации.",
}))

const informationTiles = [
  {
    id: "документы",

    title: "Документы",

    description: "Официальная информация",

    link: "Смотреть",

    href: "#контакты",

    artwork: documentsTile,
  },

  {
    id: "отзывы",

    title: "Отзывы семей",

    description: "Истории тех, кто доверил нам заботу",

    link: "Читать",

    href: "/reviews",

    artwork: reviewsTile,
  },

  {
    id: "контакты-быстро",

    title: "Контакты",

    description: "Позвоните — мы поможем определиться.",

    link: "Позвонить",

    href: primaryPhoneHref,

    artwork: questionsTile,
  },
]

const documentItems = [
  {
    title: "Свидетельство о постановке на учёт",
    description: "Федеральная налоговая служба · 13 августа 2024 года",
    pages: [
      {
        fileName: "svidetelstvo-o-postanovke-na-uchet.pdf",
        src: "/documents/registration/tax-registration-certificate.pdf",
      },
    ],
  },
  {
    title: "Лист записи ЕГРЮЛ",
    description: "Создание ООО «Позитив-Благоденствие» · 13 августа 2024 года",
    pages: [1, 2, 3, 4, 5].map((page) => ({
      fileName: `list-zapisi-egryul-stranica-${String(page).padStart(2, "0")}.pdf`,
      src: `/documents/registration/egrul/page-${String(page).padStart(2, "0")}.pdf`,
    })),
  },
  {
    title: "Устав ООО «Позитив-Благоденствие»",
    description: "Утверждён протоколом общего собрания учредителей от 8 августа 2024 года",
    pages: ["01-cover", "02", "03", "04", "05", "06", "07", "08", "09", "10"].map((page, index) => ({
      fileName: `ustav-stranica-${String(index + 1).padStart(2, "0")}.pdf`,
      src: `/documents/registration/charter/page-${page}.pdf`,
    })),
  },
  {
    title: "Комплексное меню на неделю",
    description: "Меню на 1–6 день",
    pages: [1, 2, 3].map((page) => ({
      fileName: `kompleksnoe-menyu-stranica-${String(page).padStart(2, "0")}.pdf`,
      src: `/documents/care/weekly-menu/page-${String(page).padStart(2, "0")}.pdf`,
    })),
  },
  {
    title: "Перечень социальных услуг",
    description: "Приложение к договору",
    pages: [6, 7, 8].map((page) => ({
      fileName: `perechen-socialnyh-uslug-stranica-${String(page).padStart(2, "0")}.pdf`,
      src: `/documents/services/social-services-list/page-${String(page).padStart(2, "0")}.pdf`,
    })),
  },
]

const familyReviews = [
  {
    name: "Елена",

    relation: "дочь постояльца",

    date: "Август 2026",

    order: 6,

    rating: 5,

    text: "Спокойная атмосфера, внимательное отношение и регулярная связь с семьёй. Видно, что сотрудники знают привычки каждого человека.",

    traits: ["Внимательность", "Связь с семьёй"],
  },

  {
    name: "Александр",

    relation: "сын постоялицы",

    date: "Июль 2026",

    order: 5,

    rating: 5,

    text: "Особенно ценим доброжелательность команды и аккуратный уход. В комнатах уютно, а обо всех важных изменениях сообщают вовремя.",

    traits: ["Уход", "Домашний уют"],
  },

  {
    name: "Марина",

    relation: "внучка постояльца",

    date: "Июнь 2026",

    order: 4,

    rating: 5,

    text: "Дедушка быстро освоился и стал спокойнее. Нравится, что здесь есть понятный распорядок, общение и бережное внимание каждый день.",

    traits: ["Адаптация", "Общение"],
  },

  {
    name: "Ольга",

    relation: "дочь постоялицы",

    date: "Май 2026",

    order: 3,

    rating: 4,

    text: "Для нашей семьи важнее всего были безопасность и человеческое отношение. Здесь к просьбам прислушиваются и спокойно отвечают на вопросы.",

    traits: ["Безопасность", "Отзывчивость"],
  },

  {
    name: "Сергей",

    relation: "сын постояльца",

    date: "Апрель 2026",

    order: 2,

    rating: 5,

    text: "Порадовали чистота, питание и внимательный персонал. Можно быть на связи и понимать, как проходит день близкого человека.",

    traits: ["Чистота", "Питание"],
  },

  {
    name: "Наталья",

    relation: "племянница постоялицы",

    date: "Март 2026",

    order: 1,

    rating: 5,

    text: "Тёплое, спокойное место без ощущения больницы. Сотрудники помогают деликатно, а в общении чувствуется искренняя забота.",

    traits: ["Тёплая атмосфера", "Деликатность"],
  },
]

const staffMembers = [
  { name: "Бизяева Тамара Анатольевна", role: "Генеральный директор", photo: tamaraBizyaevaPhoto },

  { name: "Иван Иванов", role: "Специалист по уходу" },

  { name: "Иван Иванов", role: "Координатор заботы" },
]

const galleryItems = [
  { title: "Здание пансионата", src: mainGalleryPhoto },

  { title: "Стойка администратора", src: receptionPhoto, objectPosition: "center top" },

  { title: "Комната", src: roomTvCornerPhoto },

  { title: "Комната", src: bookshelfPhoto },

  { title: "Комната", src: twinRoomPhoto },

  { title: "Комната", src: singleRoomPhoto },
]

function getGalleryPosition(itemIndex: number, activeIndex: number) {
  let offset =
    (itemIndex - activeIndex + galleryItems.length) % galleryItems.length

  if (
    offset > galleryItems.length / 2 ||
    (offset === galleryItems.length / 2 && itemIndex < activeIndex)
  ) {
    offset -= galleryItems.length
  }

  if (offset === -2) return "is-far-left"

  if (offset === -1) return "is-left"

  if (offset === 0) return "is-active"

  if (offset === 1) return "is-right"

  if (offset === 2) return "is-far-right"

  return offset < 0 ? "is-hidden-left" : "is-hidden-right"
}

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")

            observer.unobserve(entry.target)
          }
        })
      },

      { threshold: 0.08, rootMargin: "0px 0px -40px" },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  )
}

function SocialIcon({ name }: { name: "telegram" | "max" | "vk" }) {
  return <img className="social-logo" src={`/social/${name}.png`} alt="" />
}

type SocialLinksProps = {
  className: string
  showLabels?: boolean
}

function SocialLinks({ className, showLabels = false }: SocialLinksProps) {
  const networks = [
    { name: "telegram" as const, label: "Telegram", href: telegramUrl, ariaLabel: `Telegram: ${messengerPhone}` },
    { name: "max" as const, label: "MAX", href: maxUrl, ariaLabel: `MAX: ${messengerPhone}` },
    { name: "vk" as const, label: "ВКонтакте", href: "https://vk.com/", ariaLabel: "ВКонтакте" },
  ]

  return (
    <div className={`social-cluster ${className}`} aria-label="Социальные сети">
      {networks.map((network) => (
        <a key={network.name} href={network.href} target="_blank" rel="noreferrer" aria-label={network.ariaLabel}>
          <SocialIcon name={network.name} />
          {showLabels ? ` ${network.label}` : null}
        </a>
      ))}
    </div>
  )
}

function HeaderPhoneBlock() {
  return <div className="header-contact-block">
    <a className="header-phone" href={primaryPhoneHref}>
      <img className="phone-icon" src={phoneIcon} alt="" aria-hidden="true" />
      {primaryPhone}
    </a>
    <a className="header-phone header-phone-secondary" href={secondaryPhoneHref}>
      <img className="phone-icon" src={phoneIcon} alt="" aria-hidden="true" />
      {secondaryPhone}
    </a>
    <a className="header-address" href="https://yandex.ru/maps/?text=Москва%2C%20ул.%20Добра%2C%20д.%2015" target="_blank" rel="noreferrer">г. Москва, ул. Добра, д. 15</a>
  </div>
}

function MobilePhoneLinks() {
  return <div className="mobile-phone-links">
    <a className="mobile-nav-phone" href={primaryPhoneHref}><img className="phone-icon" src={phoneIcon} alt="" aria-hidden="true" /> {primaryPhone}</a>
    <a className="mobile-nav-phone" href={secondaryPhoneHref}><img className="phone-icon" src={phoneIcon} alt="" aria-hidden="true" /> {secondaryPhone}</a>
    <a className="mobile-nav-email" href={`mailto:${contactEmail}`}><img className="mail-icon" src={mailIcon} alt="" aria-hidden="true" /> {contactEmail}</a>
  </div>
}

function AdvantageIcon({ name }: { name: string }) {
  if (name === "activity") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="22" r="8" />
        <path d="M32 7v5M32 32v5M17 22h5M42 22h5M21 11l4 4M43 11l-4 4" />
        <path d="M13 51c8-11 16-13 23-7 5-6 10-7 15-4" />
        <path d="M19 51c6-3 12-3 18 0 5 2 10 1 14-2" />
      </svg>
    )
  }

  if (name === "home") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="m10 29 22-18 22 18v24H10V29Z" />
        <path d="M24 53V36h16v17M26 27c3-4 9-4 12 0 3 5-6 11-6 11s-9-6-6-11Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 35c-5-3-10 0-10 5 0 7 11 13 21 13h8c9 0 19-6 19-13 0-5-5-8-10-5l-8 5" />
      <path d="M32 35S18 27 18 17c0-7 9-10 14-3 5-7 14-4 14 3 0 10-14 18-14 18Z" />
      <path d="m20 35 8 5M44 35l-8 5" />
    </svg>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-heading reveal">
      <span className="heading-leaf" aria-hidden="true" />
      <h2>{children}</h2>
      <span className="heading-leaf heading-leaf-right" aria-hidden="true" />
    </div>
  )
}

function MobileActionBar() {
  const [mapPromptOpen, setMapPromptOpen] = useState(false)
  const mapUrl = "https://yandex.ru/maps/?text=Москва%2C%20ул.%20Добра%2C%20д.%2015"
  return createPortal(<>
    <nav className="mobile-action-bar" aria-label="Быстрые действия">
      <a href={primaryPhoneHref}>Позвонить</a>
      <a href="/#контакты">Контакты</a>
      <button type="button" onClick={() => setMapPromptOpen(true)}>На карте</button>
    </nav>
    {mapPromptOpen && <div className="map-prompt" role="presentation" onMouseDown={() => setMapPromptOpen(false)}>
      <section role="dialog" aria-modal="true" aria-label="Открыть карту" onMouseDown={(event) => event.stopPropagation()}>
        <p className="eyebrow">Маршрут</p><h2>Открыть карту?</h2><p>Откроем адрес дома в приложении или браузере.</p>
        <div><button type="button" onClick={() => setMapPromptOpen(false)}>Отмена</button><a href={mapUrl} target="_blank" rel="noreferrer">Открыть карту</a></div>
      </section>
    </div>}
  </>, document.body)
}

function SiteHeader({ page }: { page: "home" | "reviews" | "prices" | "privacy" }) {
  const isInnerPage = page !== "home"
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    const closeWhenOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false)
    }
    const closeWhenScrolling = () => setMenuOpen(false)

    document.addEventListener("pointerdown", closeWhenOutside, true)
    window.addEventListener("scroll", closeWhenScrolling, { passive: true })
    return () => {
      document.removeEventListener("pointerdown", closeWhenOutside, true)
      window.removeEventListener("scroll", closeWhenScrolling)
    }
  }, [menuOpen])

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-left">
        <a
          className="brand"
          href={isInnerPage ? "/#главная" : "#главная"}
          aria-label="АНО Позитив — на главную"
        >
          <img className="brand-mark" src={logo} alt="" aria-hidden="true" />
          <img className="brand-name" src={brandNameArtwork} alt="Позитив-Благоденствие — дом для пожилых людей АНО Позитив" />
          <img className="brand-mobile-logo" src={logo} alt="" aria-hidden="true" />
        </a>
      </div>

      <nav className="desktop-nav" aria-label="Основная навигация">
        {navigation.map((item) => (
          <a
            className={item.href === `/${page}` ? "is-current" : ""}
            key={item.label}
            href={isInnerPage && item.href.startsWith("#") ? "/" + item.href : item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-contacts">
        <HeaderPhoneBlock />
        <SocialLinks className="header-socials" />
        <a className="header-cta" href={primaryPhoneHref}>
          Позвонить <span className="button-arrow"><ArrowIcon /></span>
        </a>
      </div>

      <button
        className={`menu-toggle${menuOpen ? " is-open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span /><span />
      </button>

      <nav className={`mobile-nav${menuOpen ? " is-open" : ""}`} aria-label="Мобильная навигация" aria-hidden={!menuOpen}>
          {navigation.map((item) => (
            <a
              key={item.label}
              href={isInnerPage && item.href.startsWith("#") ? "/" + item.href : item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <MobilePhoneLinks />
          <a className="mobile-nav-address" href="https://yandex.ru/maps/?text=Москва%2C%20ул.%20Добра%2C%20д.%2015" target="_blank" rel="noreferrer">г. Москва, ул. Добра, д. 15</a>
          <SocialLinks className="about-contact-socials mobile-menu-socials" />
          <a className="mobile-nav-cta" href={primaryPhoneHref} onClick={() => setMenuOpen(false)}>Позвонить</a>
      </nav>
      <MobileActionBar />
    </header>
  )
}

function PrivacyPage() {
  return (
    <div className="site-shell privacy-page">
      <SiteHeader page="privacy" />
      <main className="privacy-main">
        <section className="privacy-hero reveal">
          <p className="eyebrow">Правовая информация</p>
          <h1>Политика в отношении обработки персональных данных</h1>
          <p>
            Редакция от <strong>20.09.2026</strong>. Документ описывает,
            как сайт «АНО Позитив» обрабатывает информацию посетителей.
          </p>
        </section>

        <article className="privacy-document">
          <section className="privacy-section reveal">
            <h2>1. Общие положения и сведения об операторе</h2>
            <p>Настоящая Политика определяет порядок обработки и защиты информации при использовании сайта <strong>domprestarelyh24.ru</strong> (далее — Сайт). Владельцем Сайта и оператором персональных данных является автономная некоммерческая организация «Позитив» (далее — Оператор).</p>
            <p>Политика разработана с учётом Конституции Российской Федерации, Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и иных применимых нормативных правовых актов Российской Федерации.</p>
            <dl className="privacy-details">
              <div><dt>Полное наименование</dt><dd>Автономная некоммерческая организация «Позитив»</dd></div>
              <div><dt>Сокращённое наименование</dt><dd>АНО «Позитив»</dd></div>
              <div><dt>Контакт для обращений</dt><dd>{contactEmail}, {primaryPhone}, {secondaryPhone}</dd></div>
            </dl>
          </section>

          <section className="privacy-section reveal">
            <h2>2. Назначение сайта и отсутствие форм сбора данных</h2>
            <p>Сайт носит информационный характер: он знакомит посетителей с деятельностью АНО «Позитив», условиями проживания, услугами, сотрудниками, фотографиями, отзывами, документами и контактами.</p>
            <p>На Сайте отсутствуют регистрация, личные кабинеты, онлайн-заказы, онлайн-оплата, формы обратной связи, заявки, подписки и поля для ввода имени, телефона, e-mail, документов, сведений о здоровье или иных персональных данных. Посетитель обращается в организацию самостоятельно по указанным телефонам либо через выбранный им сторонний мессенджер.</p>
          </section>

          <section className="privacy-section reveal">
            <h2>3. Техническая информация при посещении сайта</h2>
            <p>Интернет-сервер, хостинг-провайдер и техническая инфраструктура могут автоматически получать сведения, необходимые для установления соединения, безопасности и корректной работы Сайта.</p>
            <ul><li>IP-адрес, дата и время обращения, адрес запрашиваемой страницы;</li><li>тип и версия браузера, устройство и операционная система;</li><li>сведения о технических ошибках и иную информацию, автоматически передаваемую браузером.</li></ul>
            <p>Такая информация используется только для работоспособности, безопасности, выявления ошибок и предотвращения злоупотреблений. Она не используется для принятия решений, порождающих юридические последствия для посетителя.</p>
          </section>

          <section className="privacy-section reveal">
            <h2>4. Правовые основания и цели обработки</h2>
            <p>Обработка осуществляется при наличии оснований, предусмотренных законодательством Российской Федерации: в том числе для исполнения обязанностей Оператора, защиты законных интересов, обеспечения безопасности и работоспособности Сайта, а также на основании согласия — когда оно требуется законом.</p>
          </section>

          <section className="privacy-section reveal">
            <h2>5. Сведения о сотрудниках и отзывы</h2>
            <p>На Сайте могут размещаться сведения о сотрудниках: имя, должность, профессиональная информация и фотография. Такие сведения публикуются только при наличии законного основания. Если данные разрешены для распространения неопределённому кругу лиц, Оператор соблюдает требования статьи 10.1 Федерального закона № 152-ФЗ.</p>
            <p>Отзывы размещаются в обезличенном виде. Оператор стремится не публиковать в них фамилии, контакты, фотографии, диагнозы, сведения о здоровье и другие данные, позволяющие определить человека. Публикация отзыва с идентифицирующими данными возможна только при наличии соответствующего основания.</p>
          </section>

          <section className="privacy-section reveal">
            <h2>6. Cookie и сторонние ресурсы</h2>
            <p>Сайт может использовать технические cookie, необходимые для корректного отображения, сохранения технических настроек и безопасности. На дату этой редакции на Сайте не подключены рекламные cookie, рекламные пиксели и системы поведенческого профилирования.</p>
            <p>На Сайте размещены ссылки на Telegram, MAX и ВКонтакте, а также встроенная интерактивная карта OpenStreetMap. При переходе по ссылке или отображении встроенного элемента соответствующий сторонний сервис может обрабатывать техническую информацию в соответствии со своими правилами. Оператор не определяет порядок обработки данных такими сервисами.</p>
            <p>Посетитель может ограничить cookie в настройках браузера; это может повлиять на работу отдельных функций сайта. При подключении аналитики, рекламных технологий или других сервисов этот раздел будет обновлён до начала их использования.</p>
          </section>

          <section className="privacy-section reveal">
            <h2>7. Специальные категории и биометрические данные</h2>
            <p>Сайт не предназначен для сбора сведений о здоровье, диагнозах, инвалидности, лечении или другой медицинской информации. Обсуждение индивидуальной ситуации и условий ухода происходит при самостоятельном обращении посетителя по телефону или через выбранный канал связи.</p>
            <p>Сайт не выполняет автоматическую идентификацию посетителей по лицу, голосу или иным биометрическим характеристикам. Обычные фотографии на Сайте не используются для биометрической идентификации.</p>
          </section>

          <section className="privacy-section reveal">
            <h2>8. Передача, хранение и защита информации</h2>
            <p>Оператор не продаёт персональные данные и не предоставляет их третьим лицам в рекламных целях. Техническая информация может обрабатываться хостинг-провайдером и другими организациями, обеспечивающими работу инфраструктуры, только в объёме, необходимом для оказания технических услуг. Передача государственным органам возможна в случаях, установленных законом.</p>
            <p>Техническая информация хранится в течение срока, необходимого для работы и безопасности Сайта, либо срока, установленного законодательством. Оператор принимает правовые, организационные и технические меры защиты от неправомерного доступа, изменения, копирования, распространения, блокирования и уничтожения информации.</p>
          </section>

          <section className="privacy-section reveal">
            <h2>9. Права субъектов персональных данных</h2>
            <p>В случаях, предусмотренных законодательством, субъект персональных данных вправе получать сведения об обработке данных, требовать уточнения, блокирования, уничтожения или прекращения обработки, отзывать согласие и защищать свои права и законные интересы иными способами.</p>
            <p>Для обращения по вопросам обработки персональных данных используйте: {contactEmail}, {primaryPhone}, {secondaryPhone}.</p>
          </section>

          <section className="privacy-section reveal">
            <h2>10. Изменение политики</h2>
            <p>Оператор вправе изменять Политику при изменении законодательства, функциональности Сайта, технических решений или порядка обработки информации. Новая редакция вступает в силу с момента публикации на Сайте, если в ней не указан иной срок.</p>
            <p>Актуальная редакция доступна по адресу <strong>domprestarelyh24.ru/privacy</strong>. Продолжение использования Сайта означает ознакомление пользователя с настоящей Политикой. Политика не заменяет договоры, правила проживания и иные документы АНО «Позитив».</p>
          </section>
        </article>
      </main>
      <footer>
        <img src={logo} alt="АНО Позитив" />
        <p>© 2026 АНО «Позитив»</p>
        <a href="/privacy">Политика конфиденциальности</a>
      </footer>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const [reviewSort, setReviewSort] = useState("newest")

  const [galleryIndex, setGalleryIndex] = useState(0)

  const galleryPointer = useRef<{ x: number; y: number; moved: boolean } | null>(null)

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const [documentIndex, setDocumentIndex] = useState<number | null>(null)
  const [documentPageIndex, setDocumentPageIndex] = useState(0)

  useEffect(() => {
    if (!menuOpen) return

    const closeWhenOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false)
    }
    const closeWhenScrolling = () => setMenuOpen(false)

    document.addEventListener("pointerdown", closeWhenOutside, true)
    window.addEventListener("scroll", closeWhenScrolling, { passive: true })
    return () => {
      document.removeEventListener("pointerdown", closeWhenOutside, true)
      window.removeEventListener("scroll", closeWhenScrolling)
    }
  }, [menuOpen])

  const isReviewsPage =
    window.location.pathname.replace(/\/+$/, "") === "/reviews"
  const isPricesPage =
    window.location.pathname.replace(/\/+$/, "") === "/prices"
  const isPrivacyPage =
    window.location.pathname.replace(/\/+$/, "") === "/privacy"

  const sortedReviews = [...familyReviews].sort((first, second) =>
    reviewSort === "rating"
      ? second.rating - first.rating || second.order - first.order
      : reviewSort === "oldest"
        ? first.order - second.order
        : second.order - first.order,
  )

  useReveal()

  useEffect(() => {
    if (isReviewsPage || isPricesPage || isPrivacyPage || !window.location.hash) return
    const targetId = decodeURIComponent(window.location.hash.slice(1))
    const timer = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [isReviewsPage, isPricesPage, isPrivacyPage])

  useEffect(() => {
    document.title = isPrivacyPage
      ? "Политика конфиденциальности — АНО Позитив"
      : isReviewsPage
        ? "Отзывы семей — АНО Позитив"
        : isPricesPage
        ? "Цены — АНО Позитив"
        : "АНО Позитив — дом для пожилых людей"
  }, [isPricesPage, isPrivacyPage, isReviewsPage])

  const moveGallery = (direction: number) => {
    setGalleryIndex(
      (current) =>
        (current + direction + galleryItems.length) % galleryItems.length,
    )
  }

  useEffect(() => {
    if (lightboxIndex === null) return

    const previousOverflow = document.body.style.overflow

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null)

      if (event.key === "ArrowLeft") {
        setLightboxIndex(
          (current) =>
            ((current ?? 0) - 1 + galleryItems.length) % galleryItems.length,
        )
      }

      if (event.key === "ArrowRight") {
        setLightboxIndex(
          (current) => ((current ?? 0) + 1) % galleryItems.length,
        )
      }
    }

    document.body.style.overflow = "hidden"

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow

      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [lightboxIndex])

  const moveLightbox = (direction: number) => {
    setLightboxIndex(
      (current) =>
        ((current ?? 0) + direction + galleryItems.length) %
        galleryItems.length,
    )
  }

  useEffect(() => {
    if (documentIndex === null) return

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDocumentIndex(null)
      if (event.key === "ArrowLeft") {
        setDocumentIndex(
          (current) =>
            ((current ?? 0) - 1 + documentItems.length) % documentItems.length,
        )
        setDocumentPageIndex(0)
      }
      if (event.key === "ArrowRight") {
        setDocumentIndex(
          (current) => ((current ?? 0) + 1) % documentItems.length,
        )
        setDocumentPageIndex(0)
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [documentIndex])

  const moveDocument = (direction: number) => {
    setDocumentIndex(
      (current) =>
        ((current ?? 0) + direction + documentItems.length) %
        documentItems.length,
    )
    setDocumentPageIndex(0)
  }

  const moveDocumentPage = (direction: number) => {
    if (documentIndex === null) return
    const lastPageIndex = documentItems[documentIndex].pages.length - 1
    setDocumentPageIndex((current) => Math.min(lastPageIndex, Math.max(0, current + direction)))
  }

  const openDocuments = () => {
    setDocumentIndex(0)
    setDocumentPageIndex(0)
  }

  if (isPrivacyPage) return <PrivacyPage />

  if (isReviewsPage) {
    return (
      <div className="site-shell reviews-page">
        <header className="site-header" ref={headerRef}>
          <a
            className="brand"
            href="/#главная"
            aria-label="АНО Позитив — на главную"
          >
            <img
              className="brand-mark"
              src={logo}
              alt=""
              aria-hidden="true"
            />
            <img
              className="brand-name"
              src={brandNameArtwork}
              alt="Позитив-Благоденствие — дом для пожилых людей АНО Позитив"
            />
            <img className="brand-mobile-logo" src={logo} alt="" aria-hidden="true" />
          </a>

          <nav className="desktop-nav" aria-label="Основная навигация">
            {navigation.map((item) => (
              <a
                className={item.href === "/reviews" ? "is-current" : ""}
                key={item.label}
                href={item.href.startsWith("#") ? "/" + item.href : item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-contacts">
            <HeaderPhoneBlock />
            <div className="header-contact-actions">
              <SocialLinks className="header-socials" />
              <a className="header-cta" href={primaryPhoneHref}>
                Позвонить
                <span className="button-arrow">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>

          <button
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>

          <nav className={`mobile-nav${menuOpen ? " is-open" : ""}`} aria-label="Мобильная навигация" aria-hidden={!menuOpen}>
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href.startsWith("#") ? "/" + item.href : item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <MobilePhoneLinks />
              <a className="mobile-nav-address" href="https://yandex.ru/maps/?text=Москва%2C%20ул.%20Добра%2C%20д.%2015" target="_blank" rel="noreferrer">г. Москва, ул. Добра, д. 15</a>
              <SocialLinks className="about-contact-socials mobile-menu-socials" />
              <a
                className="mobile-nav-cta"
                href={primaryPhoneHref}
                onClick={() => setMenuOpen(false)}
              >
                Позвонить
              </a>
          </nav>
          <MobileActionBar />
        </header>

        <main className="reviews-main">
          <section className="reviews-hero reveal">
            <p className="eyebrow">Отзывы семей</p>
            <h1>Слова тех, кто доверил нам заботу</h1>
            <p>
              Общие впечатления семей о внимании, комфорте и спокойной жизни
              близких в нашем доме.
            </p>
            <div
              className="reviews-summary"
              aria-label="Средняя оценка 4,9 из 5"
            >
              <strong>4,9</strong>
              <span className="review-stars" aria-hidden="true">
                ★★★★★
              </span>
              <small>средняя оценка семей</small>
            </div>
          </section>

          <section
            className="reviews-content"
            aria-labelledby="reviews-list-title"
          >
            <div className="reviews-toolbar reveal">
              <div>
                <p className="eyebrow">Истории семей</p>
                <h2 id="reviews-list-title">Все отзывы</h2>
                <span>6 отзывов</span>
              </div>
              <label className="review-sort">
                <span>Сортировка</span>
                <select
                  value={reviewSort}
                  onChange={(event) => setReviewSort(event.target.value)}
                >
                  <option value="newest">Сначала новые</option>
                  <option value="oldest">Сначала старые</option>
                  <option value="rating">По оценке</option>
                </select>
              </label>
            </div>

            <div className="reviews-grid">
              {sortedReviews.map((review, index) => (
                <article
                  className={
                    "review-card reveal reveal-delay-" + ((index % 3) + 1)
                  }
                  key={review.name + "-" + review.date}
                >
                  <div className="review-card-top">
                    <div className="review-avatar" aria-hidden="true">
                      {review.name.slice(0, 1)}
                    </div>
                    <div>
                      <h3>{review.name}</h3>
                      <p>{review.relation}</p>
                    </div>
                    <time>{review.date}</time>
                  </div>
                  <div
                    className="review-stars"
                    aria-label={"Оценка: " + review.rating + " из 5"}
                  >
                    {"★".repeat(review.rating)}
                    <span>{"★".repeat(5 - review.rating)}</span>
                  </div>
                  <blockquote>«{review.text}»</blockquote>
                  <div className="review-traits">
                    {review.traits.map((trait) => (
                      <span key={trait}>{trait}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <a className="reviews-back" href="/#главная">
            <span aria-hidden="true">←</span> Вернуться на главную
          </a>
        </main>

        <footer>
          <img src={logo} alt="АНО Позитив" />
          <p>© 2026 АНО «Позитив»</p>
          <a href="/privacy">Политика конфиденциальности</a>
        </footer>
      </div>
    )
  }

  const handleGalleryPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    // Mouse clicks open the active image; dragging is reserved for touch input.
    if (event.pointerType === "mouse") return

    galleryPointer.current = { x: event.clientX, y: event.clientY, moved: false }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handleGalleryPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") return
    const start = galleryPointer.current
    if (!start) return

    const horizontalDistance = event.clientX - start.x
    const verticalDistance = event.clientY - start.y

    if (
      Math.abs(horizontalDistance) > 42 &&
      Math.abs(horizontalDistance) > Math.abs(verticalDistance)
    ) {
      galleryPointer.current = { ...start, moved: true }
      moveGallery(horizontalDistance < 0 ? 1 : -1)
      window.setTimeout(() => {
        galleryPointer.current = null
      }, 0)
      return
    }

    galleryPointer.current = null
  }

  if (isPricesPage) {
    return (
      <div className="site-shell prices-page">
        <SiteHeader page="prices" />
        <main className="prices-main">
          <section className="prices-hero reveal">
            <p className="eyebrow">Стоимость проживания</p>
            <h1>Полный прейскурант</h1>
            <p>
              Выберите подходящий формат проживания. Мы подробно расскажем об
              условиях и поможем подобрать спокойное, комфортное решение.
            </p>
          </section>

          <section className="price-list-section" aria-labelledby="price-list-title">
            <div className="prices-intro reveal">
              <div>
                <p className="eyebrow">Тарифы</p>
                <h2 id="price-list-title">Проживание и уход</h2>
              </div>
              <p>Стоимость указана за один день проживания.</p>
            </div>
            <div className="price-list">
              {priceList.map((item, index) => (
                <article className={`price-list-card reveal reveal-delay-${index + 1}`} key={item.name}>
                  <img src={item.artwork} alt="" aria-hidden="true" />
                  <div className="price-list-copy">
                    <span className="price-list-number">0{index + 1}</span>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="price-list-rate">
                    <strong>{item.price}</strong>
                    <span>{item.period}</span>
                  </div>
                  <p className="price-list-note">{item.note}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="prices-help reveal">
            <div>
              <p className="eyebrow">Нужна консультация?</p>
              <h2>Поможем выбрать подходящие условия</h2>
            </div>
            <a className="primary-button" href={primaryPhoneHref}>
              Позвонить <span className="button-arrow"><ArrowIcon /></span>
            </a>
          </section>

          <a className="reviews-back" href="/#цены">
            <span aria-hidden="true">←</span> Вернуться на главную
          </a>
        </main>
        <footer>
          <img src={logo} alt="АНО Позитив" />
          <p>© 2026 АНО «Позитив»</p>
          <a href="/privacy">Политика конфиденциальности</a>
        </footer>
      </div>
    )
  }

  return (
    <div className="site-shell">
      <header className="site-header" ref={headerRef}>
        <a
          className="brand"
          href="#главная"
          aria-label="АНО Позитив — на главную"
        >
          <img
            className="brand-mark"
            src={logo}
            alt=""
            aria-hidden="true"
          />
          <img
            className="brand-name"
            src={brandNameArtwork}
            alt="Позитив-Благоденствие — дом для пожилых людей АНО Позитив"
          />
          <img className="brand-mobile-logo" src={logo} alt="" aria-hidden="true" />
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-contacts">
          <HeaderPhoneBlock />
          <div className="header-contact-actions">
            <SocialLinks className="header-socials" />
            <a className="header-cta" href={primaryPhoneHref}>
              Позвонить
              <span className="button-arrow">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav className={`mobile-nav${menuOpen ? " is-open" : ""}`} aria-label="Мобильная навигация" aria-hidden={!menuOpen}>
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <MobilePhoneLinks />
            <a className="mobile-nav-address" href="https://yandex.ru/maps/?text=Москва%2C%20ул.%20Добра%2C%20д.%2015" target="_blank" rel="noreferrer">г. Москва, ул. Добра, д. 15</a>
            <SocialLinks className="about-contact-socials mobile-menu-socials" />
            <a
              className="mobile-nav-cta"
              href={primaryPhoneHref}
              onClick={() => setMenuOpen(false)}
            >
              Позвонить
            </a>
        </nav>
        <MobileActionBar />
      </header>

      <main>
        <section className="hero" id="главная">
          <div className="hero-copy reveal">
            <p className="eyebrow">Дом для пожилых людей</p>
            <h1 className="hero-title">
              <span>Забота, рядом с которой</span>
              <span>становится спокойнее</span>
            </h1>
            <p className="hero-description">
              Дом для пожилых людей, где каждый день
              <br />
              наполнен вниманием, теплом и уважением.
            </p>
            <a className="primary-button" href={primaryPhoneHref}>
              Позвонить
              <span className="button-arrow">
                <ArrowIcon />
              </span>
            </a>
            <p className="hero-note">
              <span aria-hidden="true">♡</span>Спокойная домашняя атмосфера
            </p>
          </div>

          <div className="hero-visual reveal reveal-delay-1">
            <div className="hero-glow" />
            <img src={heroArtwork} alt="Уютный дом среди дерева и зелени" />
          </div>
        </section>

        <section className="advantages-wrap" id="о-нас">
          <img
            className="position-branch branch-position-1 reveal"
            src={branchPosition1}
            alt=""
            aria-hidden="true"
          />
          <div className="advantages reveal">
            {advantages.map((item, index) => (
              <article
                className={`advantage reveal reveal-delay-${index + 1}`}
                key={item.title}
              >
                <div className="advantage-icon">
                  <AdvantageIcon name={item.icon} />
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="about-summary reveal">
            <img className="about-summary-art" src={standardArtwork} alt="" aria-hidden="true" />
            <img className="about-summary-branch" src={aboutSummaryBranch} alt="" aria-hidden="true" />
            <p className="eyebrow">Почему выбирают нас</p>
            <h2><span className="summary-title-first">Здесь близкому человеку</span> <span className="keep-together">по‑настоящему<span className="summary-desktop-break"><br /></span> спокойно</span></h2>
            <div className="about-summary-copy">
              <p>Наши специалисты бережно поддерживают привычный ритм жизни, помогают сохранять самостоятельность и уверенность. Важная часть заботы — общение, интерес к жизни и привычные занятия.</p>
              <p>Мы создаём спокойную и безопасную атмосферу, где внимание, забота и помощь всегда рядом.</p>
            </div>
            <div className="about-summary-traits">
              Забота без формальностей <span>•</span> Внимательное отношение
              <span>•</span> Домашняя атмосфера
            </div>
            <div className="about-contact-mini">
              <strong>Свяжитесь с нами</strong>
              <a className="about-contact-phone" href={primaryPhoneHref}>Телефон: {primaryPhone}</a>
              <a className="about-contact-phone" href={secondaryPhoneHref}>Телефон: {secondaryPhone}</a>
              <span>Ежедневно: с 9:00 до 20:00</span>
              <a className="about-contact-address" href="https://yandex.ru/maps/?text=Москва%2C%20ул.%20Добра%2C%20д.%2015" target="_blank" rel="noreferrer">Адрес: г. Москва, ул. Добра, д. 15</a>
              <SocialLinks className="about-contact-socials" />
            </div>
          </div>
          <div className="about-map contact-visual reveal" aria-label="Карта расположения дома">
            <div className="about-map-copy">
              <p className="eyebrow">Как нас найти</p>
              <h2>Мы рядом</h2>
              <p>Приезжайте познакомиться с домом, обсудить уход и задать все важные вопросы.</p>
              <a href="https://yandex.ru/maps/?text=Москва%2C%20ул.%20Добра%2C%20д.%2015" target="_blank" rel="noreferrer">Открыть маршрут <span aria-hidden="true">→</span></a>
            </div>
            <div className="about-map-visual">
              <iframe
                title="Карта расположения дома рядом с разделом о нас"
                src="https://www.openstreetmap.org/export/embed.html?bbox=37.579%2C55.733%2C37.656%2C55.775&amp;layer=mapnik&amp;marker=55.7558%2C37.6176"
                loading="lazy"
              />
              <div className="address-card">
                <span className="address-pin" aria-hidden="true">⌖</span>
                <span>
                  <strong>г. Москва, ул. Добра, д. 15</strong>
                  <small>Позвоните — уточним удобное время</small>
                </span>
              </div>
            </div>
            <img className="about-map-branch" src={contactBranch} alt="" aria-hidden="true" />
          </div>
        </section>

        <section className="section settlement-section">
          <SectionHeading>Как проходит заселение</SectionHeading>
          <div className="settlement-grid">
            {settlementSteps.map((step, index) => (
              <article
                className={`settlement-card reveal reveal-delay-${index + 1}`}
                key={step.number}
              >
                <span className="step-number">{step.number}</span>
                <img src={step.artwork} alt="" aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < settlementSteps.length - 1 && (
                  <span className="step-connector" aria-hidden="true">
                    →
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section prices-section" id="цены">
          <SectionHeading>Стоимость проживания</SectionHeading>
          <article className="pricing-overview reveal">
            <div className="pricing-overview-copy">
              <p className="eyebrow">Проживание</p>
              <h3>Всё необходимое для спокойной жизни</h3>
              <p>Уютная комната, ежедневный уход, питание и внимание персонала включены в стоимость.</p>
              <strong className="pricing-range">от 1 490 до 2 490 <small>₽/день</small></strong>
              <span className="pricing-note">Проконсультируйтесь со специалистом</span>
              <a className="text-link" href="/prices">Смотреть полный прейскурант <ArrowIcon /></a>
            </div>
            <img src={comfortArtwork} alt="Уютная комната и забота" />
          </article>
          <a className="pricing-mobile-link" href="/prices">Смотреть полный прейскурант <ArrowIcon /></a>
        </section>

        <section className="section staff-section" id="персонал">
          <div className="staff-panel reveal">
            <img
              className="staff-header-artwork"
              src={staffHeaderArtwork}
              alt=""
              aria-hidden="true"
            />
            <h2>Наш персонал</h2>
            <p className="staff-intro">
              Заботливые специалисты, которые рядом каждый день
            </p>

            <div className="staff-list">
              {staffMembers.map((member, index) => (
                <article
                  className={`staff-card reveal reveal-delay-${index + 1}`}
                  key={`${member.name}-${member.role}`}
                >
                  <div className={`staff-photo${member.photo ? " staff-photo--director" : ""}`} aria-hidden="true">
                    <img src={member.photo ?? staffPhoto} alt="" />
                  </div>
                  <div className="staff-copy">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                  <img src={staffBranchArtwork} alt="" aria-hidden="true" />
                </article>
              ))}
            </div>

            <a className="staff-button" href="#персонал">
              Смотреть весь персонал <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="section gallery-section" id="фотогалерея">
          <div className="gallery-panel reveal">
            <div className="gallery-heading">
              <p className="eyebrow">Наш дом</p>
              <h2>Фотогалерея пансионата</h2>
              <p>
                Посмотрите атмосферу уюта, заботы и спокойной жизни в нашем доме
              </p>
            </div>

            <div className="gallery-controls" aria-label="Управление галереей">
              <button
                type="button"
                aria-label="Предыдущая фотография"
                onClick={() => moveGallery(-1)}
              >
                ←
              </button>
              <span className="gallery-control-leaf" aria-hidden="true">
                ◇
              </span>
              <button
                type="button"
                aria-label="Следующая фотография"
                onClick={() => moveGallery(1)}
              >
                →
              </button>
            </div>

            <div
              className="gallery-stage"
              aria-live="polite"
              onPointerDown={handleGalleryPointerDown}
              onPointerUp={handleGalleryPointerUp}
              onPointerCancel={() => { galleryPointer.current = null }}
            >
              {galleryItems.map((item, index) => (
                <button
                  type="button"
                  className={`gallery-slide ${getGalleryPosition(index, galleryIndex)}`}
                  aria-label={`Открыть фотографию: ${item.title}`}
                  aria-hidden={index !== galleryIndex}
                  disabled={index !== galleryIndex}
                  onClick={() => {
                    if (!galleryPointer.current?.moved) setLightboxIndex(index)
                  }}
                  key={item.src}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                  />
                  <span className="gallery-zoom" aria-hidden="true">
                    ⤢
                  </span>
                </button>
              ))}
            </div>

            <div className="gallery-dots" aria-label="Выбор фотографии">
              {galleryItems.map((item, index) => (
                <button
                  className={index === galleryIndex ? "is-active" : ""}
                  type="button"
                  aria-label={`Показать: ${item.title}`}
                  aria-current={index === galleryIndex ? "true" : undefined}
                  onClick={() => setGalleryIndex(index)}
                  key={item.src}
                />
              ))}
            </div>
          </div>
        </section>

        {lightboxIndex !== null && (
          <div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Просмотр фотографии"
            onMouseDown={() => setLightboxIndex(null)}
          >
            <button
              className="lightbox-close"
              type="button"
              aria-label="Закрыть фотографию"
              onClick={() => setLightboxIndex(null)}
            >
              ×
            </button>
            <button
              className="lightbox-arrow lightbox-arrow-left"
              type="button"
              aria-label="Предыдущая фотография"
              onMouseDown={(event) => event.stopPropagation()}
              onClick={() => moveLightbox(-1)}
            >
              ←
            </button>
            <figure onMouseDown={(event) => event.stopPropagation()}>
              <img
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
              />
              <figcaption>
                {galleryItems[lightboxIndex].title}
                <span>
                  {lightboxIndex + 1} / {galleryItems.length}
                </span>
              </figcaption>
            </figure>
            <button
              className="lightbox-arrow lightbox-arrow-right"
              type="button"
              aria-label="Следующая фотография"
              onMouseDown={(event) => event.stopPropagation()}
              onClick={() => moveLightbox(1)}
            >
              →
            </button>
          </div>
        )}

        <section className="section information-section">
          <div className="information-grid">
            {informationTiles.map((item, index) => (
              <article
                className={`information-card${item.id === "документы" ? " information-card--documents" : ""} reveal reveal-delay-${index + 1}`}
                id={item.id}
                key={item.title}
              >
                <div className="information-copy">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  {item.id === "документы" ? (
                    <button type="button" onClick={openDocuments}>
                      {item.link} <ArrowIcon />
                    </button>
                  ) : (
                    <a href={item.href}>
                      {item.link} <ArrowIcon />
                    </a>
                  )}
                </div>
                <img src={item.artwork} alt="" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        {documentIndex !== null && (
          <div
            className="documents-modal"
            role="presentation"
            onMouseDown={() => setDocumentIndex(null)}
          >
            <section
              className="documents-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="document-dialog-title"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <header className="documents-dialog-header">
                <div>
                  <p className="eyebrow">Документы</p>
                  <h2 id="document-dialog-title">
                    {documentItems[documentIndex].title}
                  </h2>
                  <p>{documentItems[documentIndex].description}</p>
                </div>
                <button
                  className="documents-close"
                  type="button"
                  aria-label="Закрыть документы"
                  onClick={() => setDocumentIndex(null)}
                >
                  ×
                </button>
              </header>

              <div className="documents-toolbar">
                <button
                  type="button"
                  aria-label="Предыдущий документ"
                  onClick={() => moveDocument(-1)}
                >
                  <span aria-hidden="true">←</span>
                  Предыдущий
                </button>
                <span className="documents-counter">
                  {documentIndex + 1} / {documentItems.length}
                </span>
                <button
                  type="button"
                  aria-label="Следующий документ"
                  onClick={() => moveDocument(1)}
                >
                  Следующий
                  <span aria-hidden="true">→</span>
                </button>
              </div>

              <div className="document-preview">
                <iframe
                  key={documentItems[documentIndex].pages[documentPageIndex].src}
                  src={
                    documentItems[documentIndex].pages[documentPageIndex].src +
                    "#toolbar=1&navpanes=0&view=FitH"
                  }
                  title={
                    "Просмотр документа: " + documentItems[documentIndex].title + ", страница " + (documentPageIndex + 1)
                  }
                />
              </div>

              <div className="document-pages-toolbar" aria-label="Страницы документа">
                <button
                  type="button"
                  aria-label="Предыдущая страница документа"
                  disabled={documentPageIndex === 0}
                  onClick={() => moveDocumentPage(-1)}
                >
                  <span aria-hidden="true">←</span>
                  Страница
                </button>
                <span>
                  Страница {documentPageIndex + 1} из {documentItems[documentIndex].pages.length}
                </span>
                <button
                  type="button"
                  aria-label="Следующая страница документа"
                  disabled={documentPageIndex === documentItems[documentIndex].pages.length - 1}
                  onClick={() => moveDocumentPage(1)}
                >
                  Страница
                  <span aria-hidden="true">→</span>
                </button>
              </div>

              <footer className="documents-dialog-footer">
                <span>PDF · официальная информация</span>
                <a
                  href={documentItems[documentIndex].pages[documentPageIndex].src}
                  download={documentItems[documentIndex].pages[documentPageIndex].fileName}
                >
                  Скачать PDF
                  <span aria-hidden="true">↓</span>
                </a>
              </footer>
            </section>
          </div>
        )}

        <section className="section contact-section" id="контакты">
          <div className="contact-panel reveal">
            <img
              className="contact-center-branch"
              src={contactBranch}
              alt=""
              aria-hidden="true"
            />
            <div className="contact-details">
              <p className="eyebrow">Контакты</p>
              <h2>Мы всегда на связи</h2>
              <div className="contact-list">
                <a href={primaryPhoneHref}>
                  <span className="contact-icon"><img src={phoneIcon} alt="" aria-hidden="true" /></span>
                  <span>
                    <strong>{primaryPhone}</strong>
                    <small>Ежедневно с 9:00 до 20:00</small>
                  </span>
                </a>
                <a href={secondaryPhoneHref}>
                  <span className="contact-icon"><img src={phoneIcon} alt="" aria-hidden="true" /></span>
                  <span>
                    <strong>{secondaryPhone}</strong>
                    <small>Ежедневно с 9:00 до 20:00</small>
                  </span>
                </a>
                <a href={`mailto:${contactEmail}`}>
                  <span className="contact-icon"><img src={mailIcon} alt="" aria-hidden="true" /></span>
                  <span>
                    <strong>{contactEmail}</strong>
                    <small>Ответим в течение дня</small>
                  </span>
                </a>
              </div>
              <SocialLinks className="social-links" showLabels />
            </div>

            <div className="contact-visual">
              <iframe
                title="Карта расположения дома АНО Позитив"
                src="https://www.openstreetmap.org/export/embed.html?bbox=37.579%2C55.733%2C37.656%2C55.775&amp;layer=mapnik&amp;marker=55.7558%2C37.6176"
                loading="lazy"
              />
              <div className="address-card">
                <span className="address-pin" aria-hidden="true">
                  ⌖
                </span>
                <span>
                  <strong>г. Москва, ул. Добра, д. 15</strong>
                  <small>Позвоните — уточним удобное время</small>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <img src={logo} alt="АНО Позитив" />
        <p>© 2026 АНО «Позитив»</p>
        <a href="/privacy">Политика конфиденциальности</a>
      </footer>
    </div>
  )
}
