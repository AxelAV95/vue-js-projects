import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    currentUser: (state) => state.user,
  },
  actions: {
    loginAction({commit}, credentials){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if(credentials.username === 'admin'){
                    const fakeUser = { name: 'Administrador', id: 1 };
                    commit('SET_USER', fakeUser);
                    resolve(fakeUser);
                }else{
                    reject('Credenciales inválidas');
                }
            }, 1000);
        })
    },
    logoutAction({commit}){
        commit('LOGOUT');
    }
  },
  mutations: {
    SET_USER(state, userPayload) {
        state.user = userPayload;
    },
    LOGOUT(state){
        state.user = null;
    }
  },
});
