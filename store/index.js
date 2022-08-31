import { Store } from 'vuex'

const initialState = {
  user: null,
  emailAddress: null, 
}

const createStore = () => {
  return new Store({
    state: JSON.parse(JSON.stringify(initialState)),
    getters: {},
    mutations: {
      setUser(state, payload) {
        state.user = payload
      },
      updateEmailAddress(state, payload) {
        state.emailAddress = payload
      }, 
    },
    actions: {
      resetState({ commit }) {
        commit('setUser', null)
      },
      setEmailAddress(context, payload) {
        context.commit('updateEmailAddress', payload)
      }, 
    }
  })  
}

export default createStore
