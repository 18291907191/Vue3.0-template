import { createRouter, createWebHistory } from "vue-router";
import { constantRoutes, asyncRoutes } from "./config";

const routes = [...constantRoutes, ...asyncRoutes]

export default createRouter({
  history: createWebHistory(),
  routes
})