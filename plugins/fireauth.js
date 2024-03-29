import auth from "./fireinit"

export default (context) => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      store.commit('setUser', user);
      resolve()
    })
  })  
}
