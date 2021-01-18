import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movie/:id",
    name: "Movie",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Movie.vue"),
  },
  {
    path: "/search/:id",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Search.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
