import { createRouter, createWebHistory } from "vue-router";
import LandingPage from './pages/LandingPage.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: LandingPage},
    {path: '/:notFound(.*)', component: NotFound}
  ],
});


export default router
