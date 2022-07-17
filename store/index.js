import { Store } from "vuex";

const createStore = () => {
  return new Store({
    state: {
      user: null,
    },
    getters: {
      
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload;
      }
    },
    actions: {
      resetState({ commit }) {
        commit('setUser', null);
      }
    }
  })
}

export default createStore
