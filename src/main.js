import './assets/main.sass'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(BootstrapIconsPlugin);
app.use(createPinia())
app.use(router)

app.mount('#app')
