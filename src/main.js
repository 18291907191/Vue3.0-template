import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { vant } from '@/config/vant.config.js'

const app = createApp(App).use(router)
vant(app)
app.mount('#app')