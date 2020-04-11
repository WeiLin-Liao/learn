import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 100
  },
  mutations: {
    add (state, step) {
      state.count += step
    },
    del (state, step) {
      state.count -= step
    }
  },
  actions: {

  }
})
