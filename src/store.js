import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  	cartArray: []
  },
  getters: {
  	getCart: state => {
  		return state.cartArray;
  	}
  },
  mutations: {
    addItem (state, info) {
      state.cartArray.push(info);
    }
  },
  actions: {}
});

console.log('console on store vue',this.$store);