import Vuex from "vuex";
import Vue from "vue";
import userdata from "./modules/userdata";

//load vuex
Vue.use(Vuex);

//create store and module
export default new Vuex.Store({
  modules: {
    userdata
  }
});
