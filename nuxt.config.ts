// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: process.env.NODE_ENV === 'development' ? '/' : '/nuxt3-playground/',
    buildAssetsDir: '/static/',
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: './favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: './favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: './favicon-16x16.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: './apple-touch-icon.png',
        },
        {
          rel: 'manifest',
          href: './manifest.json',
        },
      ],
    }
  },
  css: [
    '~/assets/style/reset.css',
  ],
})
