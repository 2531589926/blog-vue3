import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// @ts-ignore
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("@/views/detail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
