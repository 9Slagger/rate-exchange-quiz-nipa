import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import { PAGE_TITLE } from "./const";
import Home from "./pages/Home.vue";
import Currencies from "./pages/Currencies.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    meta: {
      title: "Rate Exchange - Home",
    },
    component: Home
  },
  {
    path: "/currencies",
    meta: {
      title: "Rate Exchange - Currencies"
    },
    component: Currencies
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  el: "#app",
  vuetify,
  watch: {
    $route(to) {
      document.title = to.meta.title || PAGE_TITLE;
    }
  },
  render: h => h(App)
}).$mount("#app");
