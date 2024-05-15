// 引入vue
import { createApp } from 'vue'
import { DatePicker } from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import route from './router'
import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(DatePicker as any)
app.use(pinia)
app.use(route as any)
app.mount('#app')