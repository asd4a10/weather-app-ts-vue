import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import About from "../../components/About.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Weather",
    component: () => import("../../modules/weather/views/WeatherView.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
