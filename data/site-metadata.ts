export const SITE_METADATA = {
  title: `𝕾𝖍𝖊𝖗𝖑𝖔𝖈𝖐's dev blog – stories, insights, and ideas`,
  author: 'Victor Igbokwe',
  headerTitle: `𝕾𝖍𝖊𝖗𝖑𝖔𝖈𝖐's dev blog`,
  description:
    'A personal space on the cloud where I document my programming journey, sharing lessons, insights, and resources for fellow developers.',
  language: 'en-us',
  theme: 'system',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  siteRepo: 'https://github.com/Sherlockweb3MD/fluxsync',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo-new.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,
  email: 'victorigbokwe60@gmail.com',
  github: 'https://github.com/Sherlockweb3MD',
  x: 'https://x.com/Sherlockweb3MD',
  locale: 'en-US',
  stickyNav: true,
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.UMAMI_WEBSITE_ID, // Changed from NEXT_UMAMI_ID
      shareUrl: 'https://cloud.umami.is/share/EMP7o3cuKodtkqtz/fluxsync.vercel.app',
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}
