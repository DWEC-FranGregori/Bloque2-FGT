import './assets/main.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { BootstrapIconsPlugin } from 'bootstrap-icons-vue'

const app = createApp(App)

app.use(BootstrapIconsPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
