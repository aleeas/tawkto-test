import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const HomePage = () => import("../views/Home/Index.vue");
import SearchResults from "../views/Search/Index.vue";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/search",
      name: "searchResults",
      component: SearchResults,
    },
  ],
});
