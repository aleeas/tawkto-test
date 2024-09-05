// import AboutComponent from '../views/AboutComponent.vue';
// import ContactComponent from '../views/ContactComponent.vue';
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const HomeComponent = () => import("../views/HomeComponent/Index.vue");

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeComponent,
    },
  ],
});
