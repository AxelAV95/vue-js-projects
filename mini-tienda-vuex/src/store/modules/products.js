export default {
  namespaced: true,
  state: {
    items: [],
  },
  mutations: {
    SET_ITEMS(state, payload) {
      state.items = payload;
    },
  },
  actions: {
    fetchItems({ commit }) {
      setTimeout(() => {
        const mockData = [
          { id: 1, name: "Product A", price: 100, image: "product_a.jpg" },
          { id: 2, name: "Product B", price: 150, image: "product_b.jpg" },
          { id: 3, name: "Product C", price: 200, image: "product_c.jpg" },
        ];
        commit("SET_ITEMS", mockData);
      }, 1000);
    },
  },
};
