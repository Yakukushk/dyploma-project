import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'
import {resolve} from "path"
import type { NuxtPage } from 'nuxt/schema'
export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname, "/")
    },
    css: ["~/assets/main.css", "@fortawesome/fontawesome-svg-core/styles.css", "~/assets/reset.css"],
    plugins: ["~/plugins/vuetify.ts"],
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        (_options, nuxt): void => {
            nuxt.hooks.hook('vite:extendConfig', (config): void => {

                config.plugins.push(vuetify({autoImport: true}))
            })
        },
        '@nuxtjs/google-fonts',
        '@pinia/nuxt',
        'nuxt3-leaflet',
        '@vueuse/motion/nuxt'

    ],

    googleFonts: {
        families: {
            Montserrat: {
                wght: [400, 600, 700],
            },
            'Work+Sans': {
                wght: [400, 600, 700],
            },
        },
        subsets: ['latin'],
        display: 'swap',
        prefetch: false,
        preconnect: false,
        preload: false,
        download: true,
        base64: false,
    },
    app: {
        head: {
            title: 'Nuxt App',
            meta: [
                {
                    name: 'description',
                    content: 'Everything about Nuxt App'
                }
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
                }

            ]
        }
    },
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            }
            ,
        }
        ,
    }
    ,
    ssr: true,
    runtimeConfig: {
        public: {
            motion: {
                directives: {
                    'pop-bottom': {
                        initial: {
                            scale: 0,
                            opacity: 0,
                            y: 100,
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            y: 0,
                        }
                    }
                }
            }
        }
    }

})
