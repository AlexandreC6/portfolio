import { createApp } from 'vue'

import App from './App.vue';
import router from './router.js'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter)


import BaseArrow from './components/ui/BaseArrow.vue'
import BaseCard from './components/ui/BaseCard.vue'
import BaseLogo from './components/ui/BaseLogo.vue'

const app = createApp(App);

app.component('base-arrow', BaseArrow);
app.component('base-card', BaseCard);
app.component('base-logo', BaseLogo);
app.component('font-awesome-icon', FontAwesomeIcon)



app.use(router);

app.mount('#app');
