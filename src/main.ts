import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'

import './styles/app.scss'

import 'element-plus/theme-chalk/index.css'
const app = createApp(App)

app.use(ElementPlus).use(router).mount('#app')
