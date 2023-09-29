// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/motion/nuxt",
    "maz-ui/nuxt",
  ],
  colorMode: {
    classSuffix: "",
  },
  mazUi: {
    injectComponents: true,
    injectCss: true,
    injectAos: {
      injectCss: true,
    },
    injectUseToast: true,
    injectUseThemeHandler: true,
    injectUseIdleTimeout: true,
    injectUseUserVisibility: true,
    installVClickOutside: true,
    devtools: true,
  },
});
