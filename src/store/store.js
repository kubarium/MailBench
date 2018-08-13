import Vue from "vue";
import Vuex from "vuex";
import mutationsSettings from "./mutations-settings"
Vue.use(Vuex);

const mutations = {
  toggleModal(state, payload) {
    state[payload.modal].show = payload.toggle
  },
  updateSettings(state, payload) {
    console.log(payload)
  }
}

export default new Vuex.Store({
  state: {
    settings: {
      show: true,
      mail: {
        username: "",
        password: "",
        host: "",
        auth: true,
        encryption: 22,
        port: 22
      }
    }
  },
  mutations: Object.assign({}, mutations, mutationsSettings),
  actions: {}
});
