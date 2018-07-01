import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "babel-polyfill";
import fastClick from "fastclick";
import "style/reset.css";
import "style/border.css";
import "style/iconfont.css";
import "swiper/dist/css/swiper.css";

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
