import Vue from "vue";
import Vuex from "vuex";
import mutationsSettings from "./mutations-settings";
Vue.use(Vuex);

const mutations = {
  toggleModal(state, payload) {
    state[payload.modal].show = payload.toggle;
  }
};

export default new Vuex.Store({
  state: {
    settings: {
      show: false,
      mail: {
        username: "",
        password: "",
        host: "",
        auth: true,
        encryption: 22,
        port: 22
      },
      pattern: "",
      patterns: [],
      recipient: "",
      recipients: []
    },
    addTemplate: {
      show: false
    }
  },
  mutations: Object.assign({}, mutations, mutationsSettings),
  actions: {}
});
