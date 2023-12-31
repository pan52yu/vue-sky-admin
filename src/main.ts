import { createApp } from 'vue'

import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'

// 使用 tailwindcss-compat 重置样式 避免与 Ant Design Vue 冲突 导致按钮透明
// import '@unocss/reset/tailwind-compat.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)
app.use(router)
  .use(MotionPlugin)
app.mount('#app')
