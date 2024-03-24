import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from "axios"
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import {getCookie} from "@/assets/libs/functions.js"

axios.defaults.baseURL="https://api.elinorboutique.com/v1/"
if(getCookie("token")){
    axios.defaults.headers.common["Authorization"]
    = `Bearer ${getCookie("token")}`;
}
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(Vue3Toasity);
app.mount('#app')
