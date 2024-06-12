import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import "primeflex/primeflex.min.css";
import 'primeicons/primeicons.css'

import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);

app.use(PrimeVue);
app.use(pinia);

app.mount("#app");
