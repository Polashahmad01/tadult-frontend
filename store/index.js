import { Store } from 'vuex'

const initialState = {
  user: null, 
}

const createStore = () => {
  return new Store({
    state: JSON.parse(JSON.stringify(initialState)),
    getters: {},
    mutations: {
      setUser(state, payload) {
        state.user = payload
      }, 
    },
    actions: {
      resetState({ commit }) {
        commit('setUser', null)
      }, 
    }
  })  
}

export default createStore

