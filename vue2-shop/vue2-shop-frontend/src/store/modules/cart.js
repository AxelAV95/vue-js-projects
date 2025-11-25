export default {
  namespaced: true,
  state: {
    items: [] // { product, quantity }
  },
  getters: {
    cartItems: (state) => state.items,
    cartCount: (state) =>
      state.items.reduce((acc, item) => acc + item.quantity, 0),
    cartTotal: (state) =>
      state.items.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      )
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const found = state.items.find((i) => i.product.id === product.id);
      if (found) {
        found.quantity++;
      } else {
        state.items.push({ product, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.items = state.items.filter((i) => i.product.id !== productId);
    },
    CLEAR_CART(state) {
      state.items = [];
    }
  },
  actions: { //esto son acciones que llaman a las mutaciones, pueden ser asincronas
    addToCart({ commit }, product) {
      commit("ADD_TO_CART", product);
    },
    removeFromCart({ commit }, productId) {
      commit("REMOVE_FROM_CART", productId);
    },
    clearCart({ commit }) {
      commit("CLEAR_CART");
    }
  }
};
