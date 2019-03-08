import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	cart: []
  },
  getters: {
  	getCart: state => {
  		return state.cart
  	}
  }
  mutations: {},
  actions: {}
});
