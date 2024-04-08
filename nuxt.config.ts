// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  image: {
    dir: 'assets/images',
  },
  app: {
    head: {
      charset: 'utf-8',
      title: 'Food to Mood',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Food to Mood' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700&display=swap',
        },
      ],
    },
  },
  runtimeConfig: {
    openAIKey: process.env.OPENAI_KEY,
    MONGO_URI: process.env.MONGO_URI,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    ELASTIC_API: process.env.ELASTIC_API,
    APP_URL: process.env.APP_URL,
    EMAIL: process.env.EMAIL,
    public: {
      ELASTIC_URL: 'https://api.elasticemail.com/v4',
    },
  },
});
