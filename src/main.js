// import './assets/tables.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'
import VueTelInput from 'vue-tel-input';
import "./plugins/chart.js"

const globalOptions = {
  mode: 'auto',
};

const pinia = createPinia()
const installPersistedStatePlugin = createPersistedStatePlugin()
pinia.use((context) => installPersistedStatePlugin(context))

createApp(App)
    .use(pinia)
    .use(router)
    .use(VueTelInput, globalOptions)
    .mount('#app')
