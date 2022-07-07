import { createApp } from 'vue'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBrandSecret } from '@fortawesome/free-brands-svg-icons'
library.add(faBrandSecret)


import App from './App.vue';
import router from './router.js'

import BaseArrow from './components/ui/BaseArrow.vue'

const app = createApp(App);

app.component('base-arrow', BaseArrow);
app.component('font-awesome-icon', FontAwesomeIcon)


app.use(router);

app.mount('#app');
