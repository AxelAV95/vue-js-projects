import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

export default {
  namespaced: true,
  state: {
    items: [],
    totalItems: 0,
    page: 0,
    size: 5,
    loading: false,
    currentProduct: null
  },
  getters: {
    products: (state) => state.items,
    totalItems: (state) => state.totalItems,
    isLoading: (state) => state.loading,
    page: (state) => state.page,
    size: (state) => state.size,
    currentProduct: (state) => state.currentProduct
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.items = payload.content;
      state.totalItems = payload.totalElements;
    },
    SET_LOADING(state, value) {
      state.loading = value;
    },
    SET_PAGE(state, page) {
      state.page = page;
    },
    SET_SIZE(state, size) {
      state.size = size;
    },
    SET_CURRENT_PRODUCT(state, product) {
      state.currentProduct = product;
    }
  },
  actions: {
    async fetchProducts({ commit, state }) {
      commit("SET_LOADING", true);
      try {
        const { data } = await axios.get(API_URL, {
          params: { page: state.page, size: state.size }
        });
        commit("SET_PRODUCTS", data);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async fetchProductById({ commit }, id) {
      commit("SET_LOADING", true);
      try {
        const { data } = await axios.get(`${API_URL}/${id}`);
        commit("SET_CURRENT_PRODUCT", data);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async saveProduct({ dispatch }, product) {
      if (product.id) {
        await axios.put(`${API_URL}/${product.id}`, product);
      } else {
        await axios.post(API_URL, product);
      }
      await dispatch("fetchProducts");
    },
    async deleteProduct({ dispatch }, id) {
      await axios.delete(`${API_URL}/${id}`);
      await dispatch("fetchProducts");
    },
    changePage({ commit, dispatch }, page) {
      commit("SET_PAGE", page);
      dispatch("fetchProducts");
    }
  }
};
