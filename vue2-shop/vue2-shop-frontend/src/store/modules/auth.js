export default {
  namespaced: true,
  state: {
    isAuthenticated: false
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated
  },
  mutations: {
    SET_AUTH(state, value) {
      state.isAuthenticated = value;
    }
  },
  actions: {
    login({ commit }) {
      // Mock login
      commit("SET_AUTH", true);
    },
    logout({ commit }) {
      commit("SET_AUTH", false);
    }
  }
};
