import Vue from "vue";
import App from "./App.vue";
import "bulma";
import store from "@/store/store";
Vue.config.productionTip = false;
console.clear();

new Vue({
    store,
    render: h => h(App)
}).$mount("#app");
