import Vue from "vue";
import Router from "vue-router";
import Home from "./home/Home";
import City from "./city/City";
import Detail from "./detail/Detail";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home",
        keepAlive: true
      }
    },
    {
      path: "/city",
      name: "city",
      component: City
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: Detail
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  }
});
