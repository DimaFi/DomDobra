import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDirectory = resolve(projectRoot, 'dist')
const rootPage = await readFile(resolve(distDirectory, 'index.html'), 'utf8')
const siteUrl = 'https://domprestarelyh24.ru'
const organizationName = 'ООО «Позитив-Благоденствие»'
const organizationLegalName = 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ПОЗИТИВ-БЛАГОДЕНСТВИЕ"'

const publicPages = {
  prices: { title: 'Стоимость проживания — Позитив-Благоденствие', description: 'Условия проживания и стоимость в доме для пожилых людей «Позитив-Благоденствие» в Астрахани.', h1: 'Стоимость проживания' },
  reviews: { title: 'Отзывы семей — Позитив-Благоденствие', description: 'Отзывы семей о доме для пожилых людей «Позитив-Благоденствие» в Астрахани.', h1: 'Отзывы семей' },
  privacy: { title: 'Политика конфиденциальности — Позитив-Благоденствие', description: 'Политика обработки персональных данных ООО «Позитив-Благоденствие».', h1: 'Политика в отношении обработки персональных данных' },
  articles: { title: 'Полезные материалы — Позитив-Благоденствие', description: 'Полезные материалы для семей о заботе, безопасности и проживании пожилых людей.', h1: 'Полезные материалы' },
}

const withMetadata = (html, { title, description, canonical, schema, content }) => html
  .replace(/^\s*<meta name="description"[^>]*>\s*$/m, '')
  .replace(/^\s*<meta name="robots"[^>]*>\s*$/m, '')
  .replace(/^\s*<meta property="og:(title|description)"[^>]*>\s*$/gm, '')
  .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>\n    <meta name="description" content="${description}">\n    <meta name="robots" content="index, follow">\n    <link rel="canonical" href="${canonical}">\n    <meta property="og:title" content="${title}">\n    <meta property="og:description" content="${description}">\n    <meta property="og:url" content="${canonical}">\n    <script type="application/ld+json">${JSON.stringify(schema)}</script>`)
  .replace('<div id="root"></div>', `<div id="root"><main class="seo-static-content">${content}</main></div>`)

// Static directories preserve direct URL access on ordinary Apache hosting.
for (const [route, page] of Object.entries(publicPages)) {
  const routeDirectory = resolve(distDirectory, route)
  await mkdir(routeDirectory, { recursive: true })
  const canonical = `${siteUrl}/${route}/`
  const schema = { '@context': 'https://schema.org', '@type': 'WebPage', name: page.h1, url: canonical, description: page.description, publisher: { '@type': 'Organization', name: organizationName } }
  await writeFile(resolve(routeDirectory, 'index.html'), withMetadata(rootPage, { ...page, canonical, schema, content: `<h1>${page.h1}</h1><p>${page.description}</p>` }))
}

const assets = await readdir(resolve(distDirectory, 'assets'))
const articles = [
  {
    route: 'articles/pochemu-pozhiloy-chelovek-padaet',
    title: 'Почему пожилой человек начинает падать: 12 причин, которые семья часто не замечает | ООО «Позитив-Благоденствие»',
    headline: 'Почему пожилой человек начинает падать: 12 причин, которые семья часто не замечает',
    description: '12 распространённых причин падений у пожилых людей: освещение, коврики, обувь, лекарства, зрение, ванная комната, безопасный дом и ситуации, когда нужна медицинская оценка.',
    imagePrefix: 'article-falls-caregiver-cane-',
    schemaId: 'falls-article-jsonld',
  },
  {
    route: 'articles/uhod-posle-insulta',
    title: 'Уход за пожилым человеком после инсульта: что важно знать родственникам | ООО «Позитив-Благоденствие»',
    headline: 'Уход за пожилым человеком после инсульта: что важно знать родственникам',
    description: 'Понятная памятка для родственников: безопасный быт, повседневная помощь, общение, питание, восстановление после инсульта и признаки, при которых нужна экстренная помощь.',
    imagePrefix: 'article-stroke-udar-guide-',
    schemaId: 'stroke-care-article-jsonld',
  },
  {
    route: 'articles/kak-vybrat-dom-dlya-pozhilogo',
    title: 'Как выбрать дом для пожилого человека: подробное руководство | ООО «Позитив-Благоденствие»',
    headline: 'Как выбрать дом для пожилого человека: на что обратить внимание семье',
    description: 'Как выбрать дом или пансионат для пожилого человека: условия проживания, безопасность, питание, общение, бытовая помощь и вопросы, которые стоит задать перед заселением.',
    imagePrefix: 'article-choose-home-cover-',
    schemaId: 'choose-home-article-jsonld',
  },
]

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: organizationName,
  legalName: organizationLegalName,
  url: `${siteUrl}/`,
  logo: `${siteUrl}/favicon-positive-blagodenstvie.png`,
  telephone: ['+78512481918', '+79275012591'],
  address: { '@type': 'PostalAddress', streetAddress: 'улица Бехтерева, строение 20Б', addressLocality: 'Астрахань', addressRegion: 'Астраханская область', postalCode: '414014', addressCountry: 'RU' },
  sameAs: ['https://t.me/+79170811327', 'https://max.ru/+79170811327'],
}

await writeFile(resolve(distDirectory, 'index.html'), withMetadata(rootPage, {
  title: 'Дом для пожилых людей в Астрахани — Позитив-Благоденствие',
  description: 'Дом для пожилых людей в Астрахани: условия проживания, забота, питание, общение и знакомство с домом.',
  canonical: `${siteUrl}/`,
  schema: organizationSchema,
  content: '<article><h1>Дом для пожилых людей в Астрахани</h1><p>Позитив-Благоденствие — дом для пожилых людей в Астрахани. Здесь можно познакомиться с условиями проживания и приехать на экскурсию.</p></article>',
}))

for (const article of articles) {
  const articleDirectory = resolve(distDirectory, article.route)
  const articleUrl = `${siteUrl}/${article.route}/`
  const imageAsset = assets.find((asset) => asset.startsWith(article.imagePrefix))
  const articleImage = imageAsset ? `${siteUrl}/assets/${imageAsset}` : undefined
  const articleMetadata = [
    `<title>${article.title}</title>`,
    `<meta name="description" content="${article.description}" />`,
    '<meta name="robots" content="index, follow" />',
    `<link rel="canonical" href="${articleUrl}" />`,
    '<meta property="og:type" content="article" />',
    `<meta property="og:title" content="${article.title}" />`,
    `<meta property="og:description" content="${article.description}" />`,
    `<meta property="og:url" content="${articleUrl}" />`,
    articleImage ? `<meta property="og:image" content="${articleImage}" />` : '',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<script id="${article.schemaId}" type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.headline,
      description: article.description,
      ...(articleImage ? { image: [articleImage] } : {}),
      mainEntityOfPage: articleUrl,
      author: { '@type': 'Organization', name: organizationName },
      publisher: { '@type': 'Organization', name: organizationName },
    })}</script>`,
  ].filter(Boolean).join('\n    ')

  const articlePage = rootPage
    .replace(/^\s*<meta name="description"[^>]*>\s*$/m, '')
    .replace(/^\s*<meta name="robots"[^>]*>\s*$/m, '<meta name="robots" content="index, follow">')
    .replace(/^\s*<meta property="og:(title|description)"[^>]*>\s*$/gm, '')
    .replace(/<title>[\s\S]*?<\/title>/, articleMetadata)
    .replace('<div id="root"></div>', `<div id="root"><main class="seo-static-content"><article><h1>${article.headline}</h1><p>${article.description}</p></article></main></div>`)

  await mkdir(articleDirectory, { recursive: true })
  await writeFile(resolve(articleDirectory, 'index.html'), articlePage)
}

const sitemapUrls = [
  `${siteUrl}/`,
  ...Object.keys(publicPages).map((route) => `${siteUrl}/${route}/`),
  ...articles.map((article) => `${siteUrl}/${article.route}/`),
]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`
await writeFile(resolve(distDirectory, 'sitemap.xml'), sitemap)
