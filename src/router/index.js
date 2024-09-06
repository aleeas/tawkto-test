import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

// const HomePage = () => import("../views/Home/Index.vue");
import HomePage from "../views/Home/Index.vue";
import SearchResults from "../views/Search/Index.vue";
import DetailPage from "../views/Home/Detail/Index.vue";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      meta: { breadcrumb: 'Home' }
    },
    {
      path: '/category/:id',
      name: 'detail',
      component: DetailPage,
      
    },
    {
      path: "/search",
      name: "searchResults",
      component: SearchResults,
    },
  ],
});
