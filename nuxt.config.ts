import path from 'node:path';
// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url';

const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export default defineNuxtConfig({
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs')
    }
  },

  alias: {
    //配置别名
    images: fileURLToPath(new URL("./assets/img", import.meta.url)),
    style: fileURLToPath(new URL("./assets/style", import.meta.url)),
    data: fileURLToPath(new URL("./assets/other", import.meta.url)),
    api: fileURLToPath(new URL("./api", import.meta.url)),
    utils: fileURLToPath(new URL("./utils", import.meta.url)),
    src: fileURLToPath(new URL("./", import.meta.url)),
  },

  // 自动导入
  imports: {
    autoImport: true
  },

  // 配置app seo
  app: {
    buildAssetsDir: 'nuxt_assets',
    // base: '/LanOilManager/',
    baseURL: '/', // 如果你的应用部署在子路径下，例如 '/subpath/'，需要修改这里
    head: {
      charset: 'utf-16',
      viewport: 'initial-scale=1',
      title: 'LAN',
      meta: [
        { name: 'description', content: 'LAN' },
        { name: 'keywords', content: '蘭外部植物油脂实验室' }
      ],
    },
  },

  vite: {
    // base: '/LanOilManager/',
    base: '/',
  },

  router: {
    // base: '/LanOilManager/',
    base: '/',
  },

  ssr: false,

  // 导入scss、
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/index.scss";'
        }
      }
    }
  },

  modules: [
    '@element-plus/nuxt'
  ],

  css: [
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/display.css'
  ],

  elementPlus: { /** Options */ },
  compatibilityDate: '2025-02-17',
})