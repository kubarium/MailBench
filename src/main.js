import Vue from "vue";
import App from "./App.vue";
import "bulma";
import store from "@/store/store";
import router from "./router";

Vue.config.productionTip = false;
console.clear();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
