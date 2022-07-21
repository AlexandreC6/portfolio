import { createRouter, createWebHistory } from "vue-router";
import LandingPage from './pages/LandingPage.vue'
import NotFound from './pages/NotFound.vue'
import DetailProject from './pages/DetailProject.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: LandingPage},
    {path:'/project/:id', component: DetailProject, props: true},
    {path: '/:notFound(.*)', component: NotFound}
  ],
});


export default router
