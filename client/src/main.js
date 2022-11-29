import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persistedState from "pinia-plugin-persistedstate"

import App from './App.vue'

//Global Components
import Header from "./components/shared/Header.vue"

import router from './router'
import "./assets/styles/style.css"

const pinia = createPinia()

pinia.use(persistedState)

const app = createApp(App)
app.use(pinia)
app.use(router)
app.component("Header", Header)

app.mount('#app')
