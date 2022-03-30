import { createRouter, createHashHistory } from "vue-router";
import { constantRoutes, asyncRoutes } from "./config";

const routes = [...constantRoutes, ...asyncRoutes]

export default createRouter({
  history: createHashHistory(),
  routes
})