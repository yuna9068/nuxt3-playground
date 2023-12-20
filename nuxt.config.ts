// https://nuxt.com/docs/api/configuration/nuxt-config

const path = process.env.NODE_ENV === 'development' ? '/' : '/nuxt3-playground/'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: path,
    buildAssetsDir: '/static/',
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'manifest',
          href: 'manifest.json',
        },
      ],
      meta: [
        {
          name: 'theme-color',
          media: '(prefers-color-scheme: light)',
          content: '#FFFFFF',
        },
        {
          name: 'theme-color',
          media: '(prefers-color-scheme: dark)',
          content: '#2B2C37',
        },
      ],
    },
  },
  css: [
    '~/assets/style/reset.css',
  ],
})
