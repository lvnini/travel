import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

let defaCity = "北京";
try {
  if (localStorage.city) {
    defaCity = localStorage.city;
  }
} catch (e) {
  document.writeln("");
}

export default new Vuex.Store({
  state: {
    city: defaCity
  },
  mutations,
  actions,
  getters: {
    doubleCity(state) {
      return state.city + " " + state.city;
    }
  }
});
