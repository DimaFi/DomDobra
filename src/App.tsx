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
import articleChooseHomeCover from "@/assets/article-choose-home-cover-ai.webp"
import articleChooseHomeConversation from "@/assets/article-choose-home-conversation-ai.webp"
import articleChooseHomeSource from "@/content/article-choose-home.md?raw"
import articleStrokeUdarGuide from "@/assets/article-stroke-udar-guide-optimized.webp"
import articleStrokeRecoveryExercise from "@/assets/article-stroke-recovery-exercise-ai.webp"
import articleStrokeCareSource from "@/content/article-stroke-care.md?raw"
import articleFallsCaregiverCane from "@/assets/article-falls-caregiver-cane-optimized.webp"
import articleFallsSafeBathroom from "@/assets/article-falls-safe-bathroom-optimized.webp"
import articleFallsPreventionSource from "@/content/article-falls-prevention.md?raw"

const primaryPhone = "8 (8512) 48-19-18"
const primaryPhoneHref = "tel:+78512481918"
const secondaryPhone = "8 (927) 501-25-91"
const secondaryPhoneHref = "tel:+79275012591"
const messengerPhone = "+7 (917) 081-13-27"
const telegramUrl = "https://t.me/+79170811327"
const maxUrl = "https://max.ru/+79170811327"
const contactEmail = "nko.pozitiv@bk.ru"
const organizationName = "АНО «Позитив»"
const locationAddress = "улица Бехтерева, 20Бк1, Астрахань, 414014"
const mapUrl = "https://yandex.ru/maps/?ll=47.999932%2C46.330031&z=16&pt=47.999932%2C46.330031%2Cpm2rdm"
const openStreetMapEmbedUrl = "https://www.openstreetmap.org/export/embed.html?bbox=47.974932%2C46.305031%2C48.024932%2C46.355031&layer=mapnik&marker=46.330031%2C47.999932"
const siteUrl = "https://hseecon.ru"
const chooseHomeArticlePath = "/articles/kak-vybrat-dom-dlya-pozhilogo/"
const chooseHomeArticleTitle = "Как выбрать дом для пожилого человека: подробное руководство | АНО «Позитив»"
const chooseHomeArticleDescription = "Как выбрать дом или пансионат для пожилого человека: условия проживания, безопасность, питание, общение, бытовая помощь и вопросы, которые стоит задать перед заселением."
const strokeCareArticlePath = "/articles/uhod-posle-insulta/"
const strokeCareArticleTitle = "Уход за пожилым человеком после инсульта: что важно знать родственникам | АНО «Позитив»"
const strokeCareArticleDescription = "Понятная памятка для родственников: безопасный быт, повседневная помощь, общение, питание, восстановление после инсульта и признаки, при которых нужна экстренная помощь."
const fallsArticlePath = "/articles/pochemu-pozhiloy-chelovek-padaet/"
const fallsArticleTitle = "Почему пожилой человек начинает падать: 12 причин, которые семья часто не замечает | АНО «Позитив»"
const fallsArticleDescription = "12 распространённых причин падений у пожилых людей: освещение, коврики, обувь, лекарства, зрение, ванная комната, безопасный дом и ситуации, когда нужна медицинская оценка."

const navigation = [
  { label: "Главная", href: "#главная" },

  { label: "О нас", href: "#о-нас" },

  { label: "Статьи", href: "/articles/" },

  { label: "Отзывы", href: "/reviews/" },

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

    href: "/reviews/",

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
    name: "Марина Свердлова",

    relation: "Знаток города · 6 уровень",

    date: "22 октября 2022",

    order: 7,

    rating: 5,

    text: "Очень хороший пансионат. Работают очень добрые люди, хороший уход. Чистота и уют. Пятиразовое питание, на кухне работают профессионалы, обеды вкусные и полезные. В комнатах все с удобствами, живут по два человека. Я очень рада, что узнала и познакомилась с хозяйкой пансионата Позитив. Персонал весь приветливый, заботливый, отзывчивый. Спасибо, что есть такие люди, которые не оставят стариков в беде.",

    traits: ["Уход", "Чистота и уют"],
  },

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

// Полный список сохранён для будущего расширения раздела. На главной пока
// показываем только руководителя, чтобы блок оставался лаконичным.
const visibleStaffMembers = staffMembers.slice(0, 1)

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

function SocialIcon({ name }: { name: "telegram" | "max" }) {
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
    <a className="header-address" href={mapUrl} target="_blank" rel="noreferrer">{locationAddress}</a>
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

function LocationMap({ title }: { title: string }) {
  const [isInteractive, setIsInteractive] = useState(false)
  const [mapInstance, setMapInstance] = useState(0)

  const resetMap = () => {
    setIsInteractive(false)
    setMapInstance((current) => current + 1)
  }

  return (
    <>
      <iframe
        key={mapInstance}
        className={`location-map-frame${isInteractive ? " is-interactive" : ""}`}
        title={title}
        src={openStreetMapEmbedUrl}
        loading="lazy"
      />
      <div className="map-controls" aria-label="Управление картой">
        <button
          type="button"
          aria-pressed={isInteractive}
          onClick={() => setIsInteractive((current) => !current)}
        >
          {isInteractive ? "Зафиксировать" : "Управлять"}
        </button>
        <button type="button" onClick={resetMap}>Центрировать</button>
      </div>
    </>
  )
}

function SiteHeader({ page }: { page: "home" | "reviews" | "prices" | "privacy" | "articles" }) {
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
            className={item.href === `/${page}/` ? "is-current" : ""}
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
          <a className="mobile-nav-address" href={mapUrl} target="_blank" rel="noreferrer">{locationAddress}</a>
          <SocialLinks className="about-contact-socials mobile-menu-socials" />
          <a className="mobile-nav-cta" href={primaryPhoneHref} onClick={() => setMenuOpen(false)}>Позвонить</a>
      </nav>
      <MobileActionBar />
    </header>
  )
}

function SiteFooter() {
  return (
    <footer>
      <img src={logo} alt="АНО Позитив" />
      <div className="footer-details">
        <p>© 2026 АНО «Позитив»</p>
        <dl className="footer-requisites" aria-label="Реквизиты организации">
          <div><dt>ИНН</dt><dd>3000014577</dd></div>
          <div><dt>КПП</dt><dd>300001001</dd></div>
          <div><dt>ОГРН</dt><dd>1243000003641</dd></div>
        </dl>
      </div>
      <a href="/privacy/">Политика конфиденциальности</a>
    </footer>
  )
}

const articleDrafts = [
  {
    title: "Уход за пожилым человеком после инсульта",
    description: "Что важно знать родственникам после возвращения близкого домой: безопасный быт, повседневная помощь и признаки, требующие срочной медицинской оценки.",
    href: strokeCareArticlePath,
  },
  {
    title: "Как выбрать дом для пожилого человека",
    description: "Подробное руководство для семьи: условия проживания, безопасность, общение и важные вопросы перед заселением.",
    href: chooseHomeArticlePath,
  },
  {
    title: "Почему пожилой человек начинает падать",
    description: "12 причин, которые семья часто не замечает: от освещения и ковриков до самочувствия, лекарств и безопасного передвижения дома.",
    href: fallsArticlePath,
  },
]

function ArticlesPage() {
  return (
    <div className="site-shell articles-page">
      <SiteHeader page="articles" />
      <main className="articles-main">
        <section className="articles-hero reveal">
          <p className="eyebrow">Полезные материалы</p>
          <h1>Полезные материалы</h1>
          <p>
            Подготовлено домом для пожилых людей в Астрахани «Позитив-Благоденствие».
          </p>
        </section>

        <section className="articles-list-section" aria-label="Список статей">
          <p className="articles-disclaimer reveal">
            Материалы носят ознакомительный характер и не являются медицинскими рекомендациями. Вопросы лечения, реабилитации и назначения лекарств следует обсуждать с врачом.
          </p>

          <div className="articles-grid">
            {articleDrafts.map((article, index) => (
              <article className={`article-card${article.href ? " article-card--available" : ""} reveal reveal-delay-${(index % 3) + 1}`} key={article.title}>
                {article.href ? (
                  <a className="article-card-main" href={article.href}>
                    <span className="article-card-number">0{index + 1}</span>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <span className="article-card-status article-card-read">Читать статью <span aria-hidden="true">→</span></span>
                  </a>
                ) : (
                  <>
                    <span className="article-card-number">0{index + 1}</span>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <span className="article-card-status">Материал готовится</span>
                  </>
                )}
              </article>
            ))}
          </div>
        </section>

        <a className="reviews-back" href="/#главная">
          <span aria-hidden="true">←</span> Вернуться на главную
        </a>
      </main>
      <SiteFooter />
    </div>
  )
}

type ArticleBlock =
  | { type: "heading"; value: string }
  | { type: "subheading"; value: string }
  | { type: "paragraph"; value: string }
  | { type: "unordered-list"; items: string[] }
  | { type: "checklist"; items: string[] }
  | { type: "ordered-list"; items: string[] }

const chooseHomeArticleMarkdown = articleChooseHomeSource
  .split("Используй следующий текст:")
  .at(-1)
  ?.trim()
  .replace(/^# .+[\s\S]*?(?=## Сначала определите, какая помощь действительно необходима)/, "") ?? ""

const parseArticleBlocks = (source: string): ArticleBlock[] => {
  const lines = source.split(/\r?\n/)
  const blocks: ArticleBlock[] = []

  for (let index = 0; index < lines.length;) {
    const line = lines[index].trim()
    if (!line) { index += 1; continue }
    if (line.startsWith("### ")) {
      blocks.push({ type: "subheading", value: line.slice(4) })
      index += 1
      continue
    }
    if (line.startsWith("## ")) {
      blocks.push({ type: "heading", value: line.slice(3) })
      index += 1
      continue
    }
    if (line.startsWith("— ")) {
      const items: string[] = []
      while (index < lines.length) {
        const item = lines[index]?.trim() ?? ""
        if (item.startsWith("— ")) {
          items.push(item.slice(2))
          index += 1
          continue
        }
        if (!item) {
          const nextIndex = lines.findIndex((nextLine, next) => next >= index && nextLine.trim() !== "")
          if (nextIndex !== -1 && lines[nextIndex].trim().startsWith("— ")) {
            index = nextIndex
            continue
          }
        }
        break
      }
      blocks.push({ type: "unordered-list", items })
      continue
    }
    if (line.startsWith("□ ")) {
      const items: string[] = []
      while (index < lines.length) {
        const item = lines[index]?.trim() ?? ""
        if (item.startsWith("□ ")) {
          items.push(item.slice(2))
          index += 1
          continue
        }
        if (!item) {
          const nextIndex = lines.findIndex((nextLine, next) => next >= index && nextLine.trim() !== "")
          if (nextIndex !== -1 && lines[nextIndex].trim().startsWith("□ ")) {
            index = nextIndex
            continue
          }
        }
        break
      }
      blocks.push({ type: "checklist", items })
      continue
    }
    if (/^\d+\. /.test(line)) {
      const items: string[] = []
      while (/^\d+\. /.test(lines[index]?.trim() ?? "")) {
        items.push(lines[index].trim().replace(/^\d+\. /, ""))
        index += 1
      }
      blocks.push({ type: "ordered-list", items })
      continue
    }
    const paragraph: string[] = []
    while (index < lines.length && lines[index].trim() && !lines[index].trim().startsWith("## ") && !lines[index].trim().startsWith("### ") && !lines[index].trim().startsWith("— ") && !lines[index].trim().startsWith("□ ") && !/^\d+\. /.test(lines[index].trim())) {
      paragraph.push(lines[index].trim())
      index += 1
    }
    blocks.push({ type: "paragraph", value: paragraph.join(" ") })
  }
  return blocks
}

const chooseHomeArticleBlocks = parseArticleBlocks(chooseHomeArticleMarkdown)

const strokeCareArticleMarkdown = articleStrokeCareSource
  .split("Используй следующий текст:")
  .at(-1)
  ?.trim()
  .replace(/^# .+[\s\S]*?(?=## Первое время после возвращения домой)/, "") ?? ""

const strokeCareArticleBlocks = parseArticleBlocks(strokeCareArticleMarkdown)

const fallsArticleMarkdown = articleFallsPreventionSource
  .replace(/^[\s\S]*?(?=# Почему пожилой человек начинает падать)/, "")
  .replace(/^# Почему пожилой человек начинает падать[^\n]*[\s\S]*?(?=## 1\. Человек стал хуже видеть)/, "")
  .replace(/\n# /g, "\n## ")

const fallsArticleBlocks = parseArticleBlocks(fallsArticleMarkdown)

const fallsArticleAnchors: Record<string, string> = {
  "1. Человек стал хуже видеть": "vision",
  "2. Обычный коврик может стать препятствием": "rugs",
  "3. Ночью путь до туалета становится сложнее": "night-route",
  "4. Слишком быстрое вставание": "standing",
  "5. Некоторые лекарства могут влиять на устойчивость": "medicines",
  "6. Слабость ног развивается незаметно": "strength",
  "7. Неподходящая обувь": "shoes",
  "8. Ванная комната — особая зона риска": "bathroom",
  "12. Иногда падение — не бытовая случайность": "not-accident",
  "Проверьте квартиру за 10 минут": "home-check",
  "Что делать, если пожилой человек уже упал": "after-fall",
  "Когда стоит поговорить с врачом": "doctor",
  "Главное": "summary",
}

const fallsContents = [
  ["12 причин падений", "vision"],
  ["Коврики и ночной маршрут", "rugs"],
  ["Самочувствие и лекарства", "standing"],
  ["Обувь и ванная", "shoes"],
  ["Проверка квартиры", "home-check"],
  ["Если падение уже произошло", "after-fall"],
  ["Когда нужен врач", "doctor"],
  ["Главное", "summary"],
]

const strokeCareArticleAnchors: Record<string, string> = {
  "Первое время после возвращения домой": "first-days",
  "Какая помощь может понадобиться после инсульта": "everyday-help",
  "Сделайте пространство безопаснее": "safety",
  "Не торопите человека при передвижении": "mobility",
  "Физическая активность и восстановление": "recovery",
  "Если человеку стало сложно говорить": "communication",
  "Проблемы с памятью и вниманием": "memory",
  "Питание после инсульта": "nutrition",
  "Личная гигиена и повседневные действия": "hygiene",
  "Когда необходимо срочно обращаться за медицинской помощью": "emergency",
  "Коротко: памятка родственникам": "checklist",
}

const strokeCareContents = [
  ["Первые дни дома", "first-days"],
  ["Какая помощь нужна", "everyday-help"],
  ["Безопасное пространство", "safety"],
  ["Передвижение", "mobility"],
  ["Восстановление", "recovery"],
  ["Общение и память", "communication"],
  ["Питание", "nutrition"],
  ["Экстренная помощь", "emergency"],
  ["Памятка семье", "checklist"],
]

const chooseHomeArticleAnchors: Record<string, string> = {
  "Сначала определите, какая помощь действительно необходима": "help",
  "Обязательно посмотрите условия проживания лично": "conditions",
  "Обратите внимание на безопасность": "safety",
  "Узнайте, как проходит обычный день": "routine",
  "Общение имеет не меньшее значение, чем бытовые условия": "communication",
  "Узнайте, как организовано питание": "food",
  "Спросите, какая помощь оказывается в быту": "household-support",
  "Что учитывать при хронических заболеваниях": "health",
  "Какие вопросы задать перед заселением": "questions",
  "Как подготовиться к переезду": "moving",
}

const chooseHomeContents = [
  ["Какая помощь необходима", "help"],
  ["Условия проживания", "conditions"],
  ["Безопасность", "safety"],
  ["Распорядок дня", "routine"],
  ["Общение", "communication"],
  ["Питание", "food"],
  ["Бытовая помощь", "household-support"],
  ["Состояние здоровья", "health"],
  ["Вопросы перед заселением", "questions"],
  ["Подготовка к переезду", "moving"],
]

function ChooseHomeArticlePage() {
  const [contentsOpen, setContentsOpen] = useState(() => window.innerWidth >= 761)

  useEffect(() => {
    const setMeta = (attribute: "name" | "property", value: string, content: string) => {
      let element = document.head.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement | null
      if (!element) {
        element = document.createElement("meta")
        element.setAttribute(attribute, value)
        document.head.append(element)
      }
      element.content = content
    }

    document.title = chooseHomeArticleTitle
    setMeta("name", "description", chooseHomeArticleDescription)
    setMeta("name", "robots", "index, follow")
    setMeta("property", "og:type", "article")
    setMeta("property", "og:title", chooseHomeArticleTitle)
    setMeta("property", "og:description", chooseHomeArticleDescription)
    setMeta("property", "og:url", siteUrl + chooseHomeArticlePath)
    setMeta("property", "og:image", siteUrl + articleChooseHomeCover)
    setMeta("name", "twitter:card", "summary_large_image")

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.append(canonical)
    }
    canonical.href = siteUrl + chooseHomeArticlePath

    const previousSchema = document.getElementById("choose-home-article-jsonld")
    previousSchema?.remove()
    const schema = document.createElement("script")
    schema.id = "choose-home-article-jsonld"
    schema.type = "application/ld+json"
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Как выбрать дом для пожилого человека: на что обратить внимание семье",
      description: chooseHomeArticleDescription,
      image: [siteUrl + articleChooseHomeCover, siteUrl + articleChooseHomeConversation],
      mainEntityOfPage: siteUrl + chooseHomeArticlePath,
      author: { "@type": "Organization", name: organizationName },
      publisher: { "@type": "Organization", name: organizationName },
    })
    document.head.append(schema)
  }, [])

  return (
    <div className="site-shell article-page">
      <SiteHeader page="articles" />
      <main className="article-main">
        <nav className="breadcrumbs" aria-label="Хлебные крошки">
          <a href="/#главная">Главная</a><span aria-hidden="true">→</span><a href="/articles/">Статьи</a><span aria-hidden="true">→</span><span>Как выбрать дом для пожилого человека</span>
        </nav>

        <article className="article-document">
          <header className="article-hero reveal">
            <p className="eyebrow">Полезные материалы</p>
            <h1>Как выбрать дом для пожилого человека: на что обратить внимание семье</h1>
            <p className="article-lead">Решение о переезде пожилого родственника в специализированный дом или пансионат редко бывает простым. Семье приходится одновременно учитывать состояние здоровья близкого человека, его привычки, характер, степень самостоятельности, условия проживания и множество бытовых вопросов.</p>
            <p>При этом красивых фотографий комнат и информации о стоимости недостаточно. Важно понять, насколько конкретное место подходит именно вашему родственнику: сможет ли он чувствовать себя там спокойно, безопасно и комфортно, получать необходимую помощь в повседневной жизни и при этом сохранять максимально возможную самостоятельность.</p>
            <p>Разберём основные вопросы, которые стоит изучить перед выбором дома для пожилого человека.</p>
          </header>

          <figure className="article-cover reveal">
            <img src={articleChooseHomeCover} width="1400" height="788" alt="Пожилая пара общается в комфортной домашней обстановке" fetchPriority="high" />
          </figure>

          <details className="article-contents reveal" open={contentsOpen} onToggle={(event) => setContentsOpen(event.currentTarget.open)}>
            <summary><span>Содержание</span><small>10 разделов</small></summary>
            <nav aria-label="Содержание статьи">
              <ol>{chooseHomeContents.map(([label, anchor]) => <li key={anchor}><a href={`#${anchor}`}>{label}</a></li>)}</ol>
            </nav>
          </details>

          <div className="article-body">
            {chooseHomeArticleBlocks.map((block, index) => {
              if (block.type === "heading") {
                const anchor = chooseHomeArticleAnchors[block.value] ?? `article-section-${index}`
                return (
                  <div key={block.value}>
                    {block.value === "Изучите условия проживания в комнате" && <figure className="article-inline-image"><img src={articleChooseHomeConversation} width="1400" height="788" alt="Пожилые женщины общаются в спокойной домашней обстановке" loading="lazy" /></figure>}
                    <h2 id={anchor}>{block.value}</h2>
                  </div>
                )
              }
              if (block.type === "unordered-list") return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
              if (block.type === "checklist") return <ul className="article-checklist" key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
              if (block.type === "ordered-list") return <ol key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ol>
              return <p key={index}>{block.value}</p>
            })}
          </div>

          <section className="article-faq" aria-labelledby="article-faq-title">
            <p className="eyebrow">Ответы для семьи</p>
            <h2 id="article-faq-title">Частые вопросы</h2>
            <details><summary>На что в первую очередь обратить внимание при выборе дома для пожилого человека?</summary><p>Сначала оцените, какая помощь нужна именно вашему родственнику, а затем лично посмотрите условия проживания. Важно сопоставить безопасность, бытовые условия, распорядок дня и отношение к людям с потребностями конкретного человека.</p></details>
            <details><summary>Стоит ли посещать дом для пожилых перед заселением?</summary><p>Да, личное знакомство помогает увидеть помещения, санузлы, территорию и обычную обстановку. Во время визита можно спокойно задать вопросы и составить собственное впечатление.</p></details>
            <details><summary>Что спросить об уходе перед заселением?</summary><p>Лучше уточнять конкретные бытовые действия: помощь с гигиеной, одеванием, уборкой, передвижением и организацией дня. Также полезно заранее узнать, что входит в стоимость и какие услуги оплачиваются отдельно.</p></details>
            <details><summary>Что учитывать, если пожилой человек перенёс инсульт?</summary><p>Потребности после инсульта различаются, поэтому следует учитывать фактическое состояние человека и рекомендации лечащего врача и специалистов по реабилитации. Медицинские вопросы, включая нарушения глотания, речи или движения, необходимо обсуждать со специалистами.</p></details>
            <details><summary>Как помочь пожилому человеку адаптироваться после переезда?</summary><p>Возьмите знакомые вещи, заранее объясните, когда близкие смогут приехать, и по возможности планируйте первые посещения. Адаптация требует разного времени, поэтому важно сохранять спокойствие и связь с семьёй.</p></details>
          </section>

          <aside className="article-cta reveal">
            <p className="eyebrow">Условия проживания</p>
            <h2>Ищете дом для пожилого человека в Астрахани?</h2>
            <p>Можно спокойно познакомиться с условиями лично, посмотреть помещения и задать вопросы об индивидуальной ситуации близкого человека.</p>
            <a className="primary-button" href="/#цены">Посмотреть условия проживания <span className="button-arrow"><ArrowIcon /></span></a>
          </aside>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}

function StrokeCareArticlePage() {
  const [contentsOpen, setContentsOpen] = useState(() => window.innerWidth >= 761)

  useEffect(() => {
    const setMeta = (attribute: "name" | "property", value: string, content: string) => {
      let element = document.head.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement | null
      if (!element) {
        element = document.createElement("meta")
        element.setAttribute(attribute, value)
        document.head.append(element)
      }
      element.content = content
    }

    document.title = strokeCareArticleTitle
    setMeta("name", "description", strokeCareArticleDescription)
    setMeta("name", "robots", "index, follow")
    setMeta("property", "og:type", "article")
    setMeta("property", "og:title", strokeCareArticleTitle)
    setMeta("property", "og:description", strokeCareArticleDescription)
    setMeta("property", "og:url", siteUrl + strokeCareArticlePath)
    setMeta("property", "og:image", siteUrl + articleStrokeUdarGuide)
    setMeta("name", "twitter:card", "summary_large_image")

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.append(canonical)
    }
    canonical.href = siteUrl + strokeCareArticlePath

    document.getElementById("stroke-care-article-jsonld")?.remove()
    const schema = document.createElement("script")
    schema.id = "stroke-care-article-jsonld"
    schema.type = "application/ld+json"
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Уход за пожилым человеком после инсульта: что важно знать родственникам",
      description: strokeCareArticleDescription,
      image: [siteUrl + articleStrokeUdarGuide, siteUrl + articleStrokeRecoveryExercise],
      mainEntityOfPage: siteUrl + strokeCareArticlePath,
      author: { "@type": "Organization", name: organizationName },
      publisher: { "@type": "Organization", name: organizationName },
    })
    document.head.append(schema)
  }, [])

  return (
    <div className="site-shell article-page stroke-article-page">
      <SiteHeader page="articles" />
      <main className="article-main">
        <nav className="breadcrumbs" aria-label="Хлебные крошки">
          <a href="/#главная">Главная</a><span aria-hidden="true">→</span><a href="/articles/">Статьи</a><span aria-hidden="true">→</span><span>Уход после инсульта</span>
        </nav>

        <article className="article-document">
          <header className="article-hero reveal">
            <p className="eyebrow">Памятка для семьи</p>
            <h1>Уход после инсульта: что важно знать родственникам</h1>
            <p className="article-lead">Инсульт может серьёзно изменить привычную жизнь пожилого человека и всей его семьи. После возвращения домой одним людям требуется лишь небольшая помощь, другим — поддержка при передвижении, питании, личной гигиене, общении и выполнении обычных повседневных действий.</p>
            <p>Последствия инсульта у каждого человека различаются. Они зависят от типа и тяжести инсульта, поражённой области мозга, общего состояния здоровья и других факторов. Поэтому универсальной схемы восстановления, подходящей абсолютно всем, не существует.</p>
            <p>Основой остаются рекомендации лечащего врача и специалистов, которые занимаются восстановлением конкретного человека. Эта статья поможет родственникам организовать более безопасный и понятный быт, но не заменяет медицинскую консультацию.</p>
          </header>

          <section className="stroke-udar-card stroke-udar-card--priority reveal" aria-labelledby="udar-title">
            <div className="stroke-udar-copy">
              <p className="eyebrow">Действуйте быстро</p>
              <h2 id="udar-title">Как распознать возможный инсульт: правило «УДАР»</h2>
              <p>Симптомы инсульта часто возникают внезапно. Если они появились, запомните время начала признаков и вызовите экстренную помощь по номеру 112 или 103 — не ждите, что состояние улучшится само.</p>
            </div>
            <img src={articleStrokeUdarGuide} width="1600" height="900" alt="Иллюстрация признаков возможного инсульта: асимметрия лица, слабость руки, нарушение речи и вызов экстренной помощи" fetchPriority="high" />
            <ol className="stroke-udar-steps">
              <li><strong>У — Улыбка.</strong> Попросите улыбнуться: настораживает асимметрия лица.</li>
              <li><strong>Д — Движение.</strong> Попросите поднять обе руки: настораживает слабость или опускание одной руки.</li>
              <li><strong>А — Артикуляция.</strong> Попросите произнести простую фразу: настораживает внезапно нарушенная речь.</li>
              <li><strong>Р — Решение.</strong> При появлении таких симптомов нужна срочная медицинская помощь.</li>
            </ol>
          </section>

          <p className="article-transition reveal">Дальше разберём подробнее, как организовать возвращение домой, безопасный быт и повседневную поддержку после инсульта.</p>

          <details className="article-contents reveal" open={contentsOpen} onToggle={(event) => setContentsOpen(event.currentTarget.open)}>
            <summary><span>Содержание</span><small>9 ключевых тем</small></summary>
            <nav aria-label="Содержание статьи"><ol>{strokeCareContents.map(([label, anchor]) => <li key={anchor}><a href={`#${anchor}`}>{label}</a></li>)}</ol></nav>
          </details>

          <div className="article-body">
            {strokeCareArticleBlocks.map((block, index) => {
              if (block.type === "heading") {
                const anchor = strokeCareArticleAnchors[block.value] ?? `stroke-section-${index}`
                return (
                  <div key={block.value}>
                    {block.value === "Физическая активность и восстановление" && (
                      <section className="stroke-transfer-note" aria-labelledby="stroke-transfer-title">
                        <div>
                          <p className="eyebrow">Безопасное перемещение</p>
                          <h3 id="stroke-transfer-title">Как правильно помогать при вставании и передвижении</h3>
                          <p>После инсульта человеку может требоваться помощь при вставании с кровати, пересаживании в кресло или во время ходьбы. Безопасный способ помощи лучше сначала отработать с врачом, физическим терапевтом или другим специалистом по реабилитации — возможности людей после инсульта сильно различаются.</p>
                          <p>Перед перемещением освободите путь, подготовьте место для посадки и заранее объясните, что будет происходить. Не тяните человека за руку и не торопите. При пересаживании в кресло-коляску убедитесь, что она устойчива и тормоза зафиксированы.</p>
                          <p>Не пытайтесь самостоятельно поднять человека, если он не может безопасно участвовать в перемещении или вы не знаете правильную технику. В такой ситуации необходимы индивидуальные рекомендации специалиста.</p>
                        </div>
                        <figure>
                          <img src={articleStrokeRecoveryExercise} width="1400" height="788" alt="Пожилой мужчина выполняет упражнение с эластичной лентой рядом со специалистом" loading="lazy" />
                          <figcaption>Физические упражнения после инсульта подбираются индивидуально специалистом по реабилитации.</figcaption>
                        </figure>
                      </section>
                    )}
                    <h2 id={anchor}>{block.value}</h2>
                  </div>
                )
              }
              if (block.type === "unordered-list") return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
              if (block.type === "checklist") return <ul className="article-checklist" key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
              if (block.type === "ordered-list") return <ol key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ol>
              return <p key={index}>{block.value}</p>
            })}
          </div>

        </article>
      </main>
      <SiteFooter />
    </div>
  )
}

function FallsArticlePage() {
  const [contentsOpen, setContentsOpen] = useState(() => window.innerWidth >= 761)

  useEffect(() => {
    const setMeta = (attribute: "name" | "property", value: string, content: string) => {
      let element = document.head.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement | null
      if (!element) {
        element = document.createElement("meta")
        element.setAttribute(attribute, value)
        document.head.append(element)
      }
      element.content = content
    }

    document.title = fallsArticleTitle
    setMeta("name", "description", fallsArticleDescription)
    setMeta("name", "robots", "index, follow")
    setMeta("property", "og:type", "article")
    setMeta("property", "og:title", fallsArticleTitle)
    setMeta("property", "og:description", fallsArticleDescription)
    setMeta("property", "og:url", siteUrl + fallsArticlePath)
    setMeta("property", "og:image", siteUrl + articleFallsCaregiverCane)
    setMeta("name", "twitter:card", "summary_large_image")

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.append(canonical)
    }
    canonical.href = siteUrl + fallsArticlePath

    document.getElementById("falls-article-jsonld")?.remove()
    const schema = document.createElement("script")
    schema.id = "falls-article-jsonld"
    schema.type = "application/ld+json"
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Почему пожилой человек начинает падать: 12 причин, которые семья часто не замечает",
      description: fallsArticleDescription,
      image: [siteUrl + articleFallsCaregiverCane, siteUrl + articleFallsSafeBathroom],
      mainEntityOfPage: siteUrl + fallsArticlePath,
      author: { "@type": "Organization", name: organizationName },
      publisher: { "@type": "Organization", name: organizationName },
    })
    document.head.append(schema)
  }, [])

  return (
    <div className="site-shell article-page falls-article-page">
      <SiteHeader page="articles" />
      <main className="article-main">
        <nav className="breadcrumbs" aria-label="Хлебные крошки">
          <a href="/#главная">Главная</a><span aria-hidden="true">→</span><a href="/articles/">Статьи</a><span aria-hidden="true">→</span><span>Почему пожилой человек начинает падать</span>
        </nav>
        <article className="article-document">
          <header className="article-hero reveal">
            <p className="eyebrow">Безопасность дома</p>
            <h1>Почему пожилой человек начинает падать: 12 причин, которые семья часто не замечает</h1>
            <p className="article-lead">«Просто споткнулся». Именно так родственники нередко объясняют первое падение пожилого человека. Иногда это действительно случайность. Но если падения повторяются, человек стал чаще хвататься за мебель, неуверенно вставать или бояться ходить один, оставлять это без внимания не стоит.</p>
            <p>С возрастом падение может закончиться значительно серьёзнее, чем в молодости. Кроме самой травмы появляется ещё одна проблема — страх упасть снова. Из-за него человек может начать меньше ходить и реже выходить из дома.</p>
            <p>Причиной может оказаться небольшой коврик возле кровати, слишком тёмный коридор, неподходящая обувь или головокружение при вставании. Разберём 12 вещей, которые стоит проверить семье.</p>
          </header>

          <figure className="article-cover reveal falls-article-cover">
            <img src={articleFallsCaregiverCane} width="1680" height="945" alt="Пожилой мужчина идёт с тростью по домашнему коридору рядом с близким человеком" fetchPriority="high" />
          </figure>

          <details className="article-contents reveal" open={contentsOpen} onToggle={(event) => setContentsOpen(event.currentTarget.open)}>
            <summary><span>Содержание</span><small>Проверка дома и самочувствия</small></summary>
            <nav aria-label="Содержание статьи"><ol>{fallsContents.map(([label, anchor]) => <li key={anchor}><a href={`#${anchor}`}>{label}</a></li>)}</ol></nav>
          </details>

          <div className="article-body">
            {fallsArticleBlocks.map((block, index) => {
              if (block.type === "heading") {
                const anchor = fallsArticleAnchors[block.value] ?? `falls-section-${index}`
                return (
                  <div key={block.value}>
                    {block.value === "8. Ванная комната — особая зона риска" && <figure className="article-inline-image falls-bathroom-image"><img src={articleFallsSafeBathroom} width="1680" height="945" alt="Безопасная ванная комната с поручнями, сиденьем для душа и нескользким полом" loading="lazy" /></figure>}
                    <h2 id={anchor}>{block.value}</h2>
                  </div>
                )
              }
              if (block.type === "subheading") return <h3 key={block.value}>{block.value}</h3>
              if (block.type === "unordered-list") return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
              if (block.type === "checklist") return <ul className="article-checklist" key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
              if (block.type === "ordered-list") return <ol key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ol>
              return <p key={index}>{block.value}</p>
            })}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
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
            <p>На Сайте размещены ссылки на Telegram и MAX, а также встроенная интерактивная карта OpenStreetMap. При переходе по ссылке или отображении встроенного элемента соответствующий сторонний сервис может обрабатывать техническую информацию в соответствии со своими правилами. Оператор не определяет порядок обработки данных такими сервисами.</p>
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
            <p>Актуальная редакция доступна по адресу <strong>/privacy/</strong>. Продолжение использования Сайта означает ознакомление пользователя с настоящей Политикой. Политика не заменяет договоры, правила проживания и иные документы АНО «Позитив».</p>
          </section>
        </article>
      </main>
      <SiteFooter />
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
  const isArticlesPage =
    window.location.pathname.replace(/\/+$/, "") === "/articles"
  const isChooseHomeArticlePage =
    window.location.pathname.replace(/\/+$/, "") === "/articles/kak-vybrat-dom-dlya-pozhilogo"
  const isStrokeCareArticlePage =
    window.location.pathname.replace(/\/+$/, "") === "/articles/uhod-posle-insulta"
  const isFallsArticlePage =
    window.location.pathname.replace(/\/+$/, "") === "/articles/pochemu-pozhiloy-chelovek-padaet"

  const sortedReviews = [...familyReviews].sort((first, second) =>
    reviewSort === "rating"
      ? second.rating - first.rating || second.order - first.order
      : reviewSort === "oldest"
        ? first.order - second.order
        : second.order - first.order,
  )

  useReveal()

  useEffect(() => {
    if (isReviewsPage || isPricesPage || isPrivacyPage || isArticlesPage || isChooseHomeArticlePage || isStrokeCareArticlePage || isFallsArticlePage || !window.location.hash) return
    const targetId = decodeURIComponent(window.location.hash.slice(1))
    const timer = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [isReviewsPage, isPricesPage, isPrivacyPage, isArticlesPage, isChooseHomeArticlePage, isStrokeCareArticlePage, isFallsArticlePage])

  useEffect(() => {
    document.title = isPrivacyPage
      ? "Политика конфиденциальности — АНО Позитив"
      : isReviewsPage
        ? "Отзывы семей — АНО Позитив"
        : isPricesPage
        ? "Цены — АНО Позитив"
        : isArticlesPage
        ? "Статьи — Дом для пожилых людей в Астрахани"
        : isChooseHomeArticlePage
        ? chooseHomeArticleTitle
        : isStrokeCareArticlePage
        ? strokeCareArticleTitle
        : isFallsArticlePage
        ? fallsArticleTitle
        : "Дом для пожилых людей в Астрахани"
  }, [isPricesPage, isPrivacyPage, isReviewsPage, isArticlesPage, isChooseHomeArticlePage, isStrokeCareArticlePage, isFallsArticlePage])

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

  if (isArticlesPage) return <ArticlesPage />

  if (isChooseHomeArticlePage) return <ChooseHomeArticlePage />

  if (isStrokeCareArticlePage) return <StrokeCareArticlePage />

  if (isFallsArticlePage) return <FallsArticlePage />

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
                className={item.href === "/reviews/" ? "is-current" : ""}
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
              <a className="mobile-nav-address" href={mapUrl} target="_blank" rel="noreferrer">{locationAddress}</a>
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

        <SiteFooter />
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
        <SiteFooter />
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
            <a className="mobile-nav-address" href={mapUrl} target="_blank" rel="noreferrer">{locationAddress}</a>
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
            <p className="eyebrow">Дом для пожилых людей в Астрахани</p>
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
              <p>Наши специалисты бережно поддерживают привычный ритм жизни, помогают сохранять самостоятельность и уверенность. <span className="summary-care-sentence">Важная часть заботы — общение, интерес к жизни и привычные занятия.</span></p>
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
              <a className="about-contact-address" href={mapUrl} target="_blank" rel="noreferrer">Адрес: {locationAddress}</a>
              <SocialLinks className="about-contact-socials" />
            </div>
          </div>
          <div className="about-map contact-visual reveal" aria-label="Карта расположения дома">
            <div className="about-map-copy">
              <p className="eyebrow">Как нас найти</p>
              <h2>Мы рядом</h2>
              <p>Приезжайте познакомиться с домом, обсудить уход и задать все важные вопросы.</p>
              <a href={mapUrl} target="_blank" rel="noreferrer">Открыть маршрут <span aria-hidden="true">→</span></a>
            </div>
            <div className="about-map-visual">
              <LocationMap title="Карта расположения дома рядом с разделом о нас" />
              <div className="address-card">
                <span className="address-pin" aria-hidden="true">⌖</span>
                <span>
                  <strong>{locationAddress}</strong>
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
            </div>
            <img src={comfortArtwork} alt="Уютная комната и забота" />
          </article>
        </section>

        <section className="section staff-section" id="персонал">
          <div className="staff-panel reveal">
            <img
              className="staff-header-artwork"
              src={staffHeaderArtwork}
              alt=""
              aria-hidden="true"
            />
            <h2>Генеральный директор</h2>
            <p className="staff-intro">
              Тамара Анатольевна координирует работу дома и команды специалистов. Она помогает находить спокойные решения в важных вопросах, поддерживает порядок в процессах и следит, чтобы забота о каждом проживающем оставалась внимательной и уважительной.
            </p>

            <div className="staff-list">
              {visibleStaffMembers.map((member, index) => (
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
          </div>
        </section>

        <section className="section gallery-section" id="фотогалерея">
          <div className="gallery-panel reveal">
            <div className="gallery-heading">
              <p className="eyebrow">Наш дом</p>
              <h2>Фотогалерея пансионата</h2>
              <p className="gallery-intro">
                Посмотрите атмосферу уюта, заботы и спокойной жизни в нашем доме
              </p>
              <p className="gallery-description">
                У нас современный и удобный дом, созданный для спокойной жизни: мы уделяем внимание чистоте, безопасности, уважительному отношению и привычному ритму дня. Здесь легко чувствовать себя дома, общаться и получать необходимую поддержку рядом с внимательной командой.
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
              <LocationMap title="Карта расположения дома АНО Позитив" />
              <div className="address-card">
                <span className="address-pin" aria-hidden="true">
                  ⌖
                </span>
                <span>
                  <strong>{locationAddress}</strong>
                  <small>Позвоните — уточним удобное время</small>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
