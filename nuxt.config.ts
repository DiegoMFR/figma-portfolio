// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-anchorscroll',
    '@nuxthub/core'
  ],
  css: ['~/assets/css/main.css'],
  anchorscroll: {
    hooks: [
      // Or any valid hook if needed
      // Default is `page:finish`
      'page:transition:finish',
    ],
  },
  runtimeConfig: {
    figmaToken: process.env.FIGMA_TOKEN,
    figmaBaseUrl: "https://api.figma.com",
    figmaFileName: process.env.FIGMA_FILE_NAME,
  }
})