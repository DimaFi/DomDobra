import { useEffect, useState } from "react"

import logo from "@/imports/ChatGPT_Image_29____._2026__.__00_48_11.png"

import heroArtwork from "@/imports/elements/background.png"

import branchPosition1 from "@/imports/elements/ветка_вылет_1.png"

import contactBranch from "@/imports/elements/ветка_снизу сайта.png"

import staffHeaderArtwork from "@/imports/elements/верх у персонала.png"

import staffBranchArtwork from "@/imports/elements/веточка в блоке у каждого персонала.png"

import logoMark from "@/imports/elements/Логотип_only.png"

import brandNameArtwork from "@/imports/elements/Название_only.png"

import standardArtwork from "@/imports/elements/standart.png"

import comfortArtwork from "@/imports/elements/comfort.png"

import premiumArtwork from "@/imports/elements/premium.png"

import phoneArtwork from "@/imports/elements/tel_em.png"

import documentsArtwork from "@/imports/elements/doc_em.png"

import homeArtwork from "@/imports/elements/home_em.png"

import documentsTile from "@/imports/elements/docs.png"

import reviewsTile from "@/imports/elements/emoji_heart_dialog.png"

import questionsTile from "@/imports/elements/emoji_question.png"

import staffPhoto from "@/imports/staff-demo-caregiver-male.png"

import galleryPhoto1 from "@/imports/фотки/1.jpg"

import galleryPhoto2 from "@/imports/фотки/2.jpg"

import galleryPhoto3 from "@/imports/фотки/3.jpg"

import galleryPhoto4 from "@/imports/фотки/4.jpg"

const navigation = [
  { label: "Главная", href: "#главная" },

  { label: "О нас", href: "#о-нас" },

  { label: "Цены", href: "#цены" },

  { label: "Отзывы", href: "/reviews" },

  { label: "Документы", href: "#документы" },

  { label: "Контакты", href: "#контакты" },
]

const advantages = [
  {
    title: "Заботливый персонал 24/7",

    description: "Всегда рядом и готов помочь",

    icon: "heart",
  },

  {
    title: "Медицинский уход",

    description: "Внимание к самочувствию каждый день",

    icon: "health",
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

    title: "Оформление и знакомство",

    description: "Познакомимся, проведём экскурсию и поможем с документами.",

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
    id: "вопросы",

    title: "Частые вопросы",

    description: "Ответы о проживании и условиях",

    link: "Смотреть",

    href: "#контакты",

    artwork: questionsTile,
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
  { name: "Иван Иванов", role: "Управляющий пансионатом" },

  { name: "Иван Иванов", role: "Специалист по уходу" },

  { name: "Иван Иванов", role: "Координатор заботы" },
]

const galleryItems = [
  { title: "Уютная комната", src: galleryPhoto1 },

  { title: "Обеденная зона", src: galleryPhoto2 },

  { title: "Сад пансионата", src: galleryPhoto3 },

  { title: "Светлая библиотека", src: galleryPhoto4 },
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

function AdvantageIcon({ name }: { name: string }) {
  if (name === "health") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M8 34h12l6-15 9 28 7-18 4 5h10" />
        <path d="M50 13c-8-4-15 1-18 7-3-6-10-11-18-7-10 6-7 20 18 36 25-16 28-30 18-36Z" />
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

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const [reviewSort, setReviewSort] = useState("newest")

  const [galleryIndex, setGalleryIndex] = useState(0)

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const isReviewsPage =
    window.location.pathname.replace(/\/+$/, "") === "/reviews"

  const sortedReviews = [...familyReviews].sort((first, second) =>
    reviewSort === "rating"
      ? second.rating - first.rating || second.order - first.order
      : reviewSort === "oldest"
        ? first.order - second.order
        : second.order - first.order,
  )

  useReveal()

  useEffect(() => {
    let favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')

    if (!favicon) {
      favicon = document.createElement("link")

      favicon.rel = "icon"

      document.head.appendChild(favicon)
    }

    favicon.type = "image/png"

    favicon.href = logoMark

    document.title = isReviewsPage
      ? "Отзывы семей — Позитив-Благоденствие"
      : "Позитив-Благоденствие — дом для пожилых людей"
  }, [isReviewsPage])

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

  if (isReviewsPage) {
    return (
      <div className="site-shell reviews-page">
        <header className="site-header">
          <a
            className="brand"
            href="/#главная"
            aria-label="Позитив-Благоденствие — на главную"
          >
            <img
              className="brand-mark"
              src={logoMark}
              alt=""
              aria-hidden="true"
            />
            <img
              className="brand-name"
              src={brandNameArtwork}
              alt="Позитив-Благоденствие — дом для пожилых людей"
            />
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

          <a className="header-cta" href="/#контакты">
            Заказать звонок
            <span className="button-arrow">
              <ArrowIcon />
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>

          {menuOpen && (
            <nav className="mobile-nav" aria-label="Мобильная навигация">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href.startsWith("#") ? "/" + item.href : item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="mobile-nav-cta"
                href="/#контакты"
                onClick={() => setMenuOpen(false)}
              >
                Заказать звонок
              </a>
            </nav>
          )}
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
          <img src={logo} alt="Позитив-Благоденствие" />
          <p>© 2026 Дом для пожилых людей «Позитив-Благоденствие»</p>
          <a href="/#главная">Политика конфиденциальности</a>
        </footer>
      </div>
    )
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#главная"
          aria-label="Позитив-Благоденствие — на главную"
        >
          <img
            className="brand-mark"
            src={logoMark}
            alt=""
            aria-hidden="true"
          />
          <img
            className="brand-name"
            src={brandNameArtwork}
            alt="Позитив-Благоденствие — дом для пожилых людей"
          />
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#контакты">
          Заказать звонок
          <span className="button-arrow">
            <ArrowIcon />
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Мобильная навигация">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mobile-nav-cta"
              href="#контакты"
              onClick={() => setMenuOpen(false)}
            >
              Заказать звонок
            </a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero" id="главная">
          <div className="hero-copy reveal">
            <p className="eyebrow">Дом для пожилых людей</p>
            <h1>
              Забота, рядом
              <br />с которой становится
              <br />
              спокойнее
            </h1>
            <p className="hero-description">
              Дом для пожилых людей, где каждый день
              <br />
              наполнен вниманием, теплом и уважением.
            </p>
            <a className="primary-button" href="#контакты">
              Заказать звонок
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
          <div className="price-grid">
            {prices.map((item, index) => (
              <article
                className={`price-card reveal reveal-delay-${index + 1} ${
                  item.featured ? "featured" : ""
                }`}
                key={item.name}
              >
                {item.featured && (
                  <span className="popular-label">Популярно</span>
                )}
                <div className="price-copy">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <strong>
                    {item.price}
                    <small> /мес</small>
                  </strong>
                  <a href="#контакты">
                    Подробнее <ArrowIcon />
                  </a>
                </div>
                <img src={item.artwork} alt={`Тариф ${item.name}`} />
              </article>
            ))}
          </div>
          <a className="text-link reveal" href="#контакты">
            Смотреть полный прейскурант <ArrowIcon />
          </a>
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
                  <div className="staff-photo" aria-hidden="true">
                    <img src={staffPhoto} alt="" />
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

            <div className="gallery-stage" aria-live="polite">
              {galleryItems.map((item, index) => (
                <button
                  type="button"
                  className={`gallery-slide ${getGalleryPosition(index, galleryIndex)}`}
                  aria-label={`Открыть фотографию: ${item.title}`}
                  aria-hidden={index !== galleryIndex}
                  disabled={index !== galleryIndex}
                  onClick={() => setLightboxIndex(index)}
                  key={item.src}
                >
                  <img src={item.src} alt={item.title} />
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
                className={`information-card reveal reveal-delay-${index + 1}`}
                id={item.id}
                key={item.title}
              >
                <div className="information-copy">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <a href={item.href}>
                    {item.link} <ArrowIcon />
                  </a>
                </div>
                <img src={item.artwork} alt="" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

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
                <a href="tel:+74951234567">
                  <span className="contact-icon">☎</span>
                  <span>
                    <strong>+7 (495) 123-45-67</strong>
                    <small>Ежедневно с 9:00 до 20:00</small>
                  </span>
                </a>
                <a href="mailto:info@positiv-blago.ru">
                  <span className="contact-icon">✉</span>
                  <span>
                    <strong>info@positiv-blago.ru</strong>
                    <small>Ответим в течение дня</small>
                  </span>
                </a>
              </div>
              <div className="social-links" aria-label="Социальные сети">
                <a href="#контакты">Telegram</a>
                <a href="#контакты">MAX</a>
                <a href="#контакты">ВКонтакте</a>
              </div>
            </div>

            <div className="contact-visual">
              <iframe
                title="Карта расположения дома Позитив-Благоденствие"
                src="https://www.openstreetmap.org/export/embed.html?bbox=37.579%2C55.733%2C37.656%2C55.775&amp;layer=mapnik&amp;marker=55.7558%2C37.6176"
                loading="lazy"
              />
              <div className="address-card">
                <span className="address-pin" aria-hidden="true">
                  ⌖
                </span>
                <span>
                  <strong>г. Москва, ул. Добра, д. 15</strong>
                  <small>Закажите звонок — уточним удобное время</small>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <img src={logo} alt="Позитив-Благоденствие" />
        <p>© 2026 Дом для пожилых людей «Позитив-Благоденствие»</p>
        <a href="#главная">Политика конфиденциальности</a>
      </footer>
    </div>
  )
}
