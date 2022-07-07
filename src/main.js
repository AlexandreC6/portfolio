import { createApp } from 'vue'


import App from './App.vue';
import router from './router.js'

import BaseArrow from './components/ui/BaseArrow.vue'

const app = createApp(App);

app.component('base-arrow', BaseArrow);


app.use(router);

app.mount('#app');
