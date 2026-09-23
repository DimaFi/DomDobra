import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDirectory = resolve(projectRoot, 'dist')
const rootPage = await readFile(resolve(distDirectory, 'index.html'), 'utf8')

// The root build already uses absolute /assets/... URLs. Reusing its HTML
// keeps every route on the same React bundle when served from a static host.
for (const route of ['prices', 'reviews', 'privacy', 'articles']) {
  const routeDirectory = resolve(distDirectory, route)
  await mkdir(routeDirectory, { recursive: true })
  await writeFile(resolve(routeDirectory, 'index.html'), rootPage)
}

const assets = await readdir(resolve(distDirectory, 'assets'))
const siteUrl = 'https://hseecon.ru'

const articles = [
  {
    route: 'articles/pochemu-pozhiloy-chelovek-padaet',
    title: 'Почему пожилой человек начинает падать: 12 причин, которые семья часто не замечает | АНО «Позитив»',
    headline: 'Почему пожилой человек начинает падать: 12 причин, которые семья часто не замечает',
    description: '12 распространённых причин падений у пожилых людей: освещение, коврики, обувь, лекарства, зрение, ванная комната, безопасный дом и ситуации, когда нужна медицинская оценка.',
    imagePrefix: 'article-falls-caregiver-cane-',
    schemaId: 'falls-article-jsonld',
  },
  {
    route: 'articles/uhod-posle-insulta',
    title: 'Уход за пожилым человеком после инсульта: что важно знать родственникам | АНО «Позитив»',
    headline: 'Уход за пожилым человеком после инсульта: что важно знать родственникам',
    description: 'Понятная памятка для родственников: безопасный быт, повседневная помощь, общение, питание, восстановление после инсульта и признаки, при которых нужна экстренная помощь.',
    imagePrefix: 'article-stroke-udar-guide-',
    schemaId: 'stroke-care-article-jsonld',
  },
  {
    route: 'articles/kak-vybrat-dom-dlya-pozhilogo',
    title: 'Как выбрать дом для пожилого человека: подробное руководство | АНО «Позитив»',
    headline: 'Как выбрать дом для пожилого человека: на что обратить внимание семье',
    description: 'Как выбрать дом или пансионат для пожилого человека: условия проживания, безопасность, питание, общение, бытовая помощь и вопросы, которые стоит задать перед заселением.',
    imagePrefix: 'article-choose-home-cover-',
    schemaId: 'choose-home-article-jsonld',
  },
]

for (const article of articles) {
  const articleDirectory = resolve(distDirectory, article.route)
  const articleUrl = `${siteUrl}/${article.route}/`
  const imageAsset = assets.find((asset) => asset.startsWith(article.imagePrefix))
  const articleImage = imageAsset ? `${siteUrl}/assets/${imageAsset}` : undefined
  const articleMetadata = [
    `<title>${article.title}</title>`,
    `<meta name="description" content="${article.description}" />`,
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
      author: { '@type': 'Organization', name: 'АНО «Позитив»' },
      publisher: { '@type': 'Organization', name: 'АНО «Позитив»' },
    })}</script>`,
  ].filter(Boolean).join('\n    ')

  const articlePage = rootPage
    .replace(/^\s*<meta name="description"[^>]*>\s*$/m, '')
    .replace(/^\s*<meta name="robots"[^>]*>\s*$/m, '<meta name="robots" content="index, follow">')
    .replace(/<title>[\s\S]*?<\/title>/, articleMetadata)

  await mkdir(articleDirectory, { recursive: true })
  await writeFile(resolve(articleDirectory, 'index.html'), articlePage)
}
