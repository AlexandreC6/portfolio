import { createRouter, createWebHistory } from "vue-router";
import LandingPage from './pages/LandingPage.vue'
import NotFound from './pages/NotFound.vue'
import MenuPage from './pages/MenuPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: LandingPage},
    {path: '/menu', component: MenuPage},
    {path: '/:notFound(.*)', component: NotFound}
  ],
});


export default router
