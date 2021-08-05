import { createApp } from 'vue'
import App from './App.vue';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import router from "./router";
import InputText from 'primevue/inputtext';


import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import TabMenu from 'primevue/tabmenu';
import 'primeflex/primeflex.css';
import './assets/main.css'
import VueCookies from 'vue3-cookies'




const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);
app.use(router);
app.use(VueCookies);


app.component('Button', Button);
app.component('Toast', Toast);
app.component('TabMenu', TabMenu);
app.component('InputText', InputText);

app.mount('#app')

