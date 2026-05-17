import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cvs",
      name: "cv-index",
      component: () => import("../views/CvIndexView.vue"),
    },
    {
      path: "/cvs/:id",
      name: "cv-detail",
      component: () => import("../views/CvDetailView.vue"),
    },
  ],
})

export default router
