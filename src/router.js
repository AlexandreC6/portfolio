import { createRouter, createWebHistory } from "vue-router";
import LandingPage from './pages/LandingPage.vue'
import NotFound from './pages/NotFound.vue'
import MenuHamburger from './pages/MenuHamburger.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: LandingPage},
    {path: '/menu', component: MenuHamburger},
    {path: '/:notFound(.*)', component: NotFound}
  ],
});


export default router
