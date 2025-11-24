export default {
  namespaced: true,
  state: {
    items: [],
  },
  mutations: {
    ADD_ITEM(state, product) {
      state.items.push(product);
    },
  },
  getters: {
    totalPrice: (state) => {
        return state.items.reduce((total, item)=> total + item.price, 0);
    },
    count: (state) => {
        return state.items.length;
    }
  },
};
