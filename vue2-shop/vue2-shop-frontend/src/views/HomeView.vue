<template>
  <div>
    <v-card>
      <v-card-title>
        <span class="headline">Products</span>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="goToCreate">
          New Product
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-progress-linear
          v-if="isLoading"
          indeterminate
        ></v-progress-linear>

        <v-data-table
          v-if="products && products.length"
          :headers="headers"
          :items="products || []"
          :items-per-page="size"
          class="mt-4"
          hide-default-footer
        >
          <template v-slot:item="{ item }">
            <tr>
              <td>{{ item.id }}</td>
              <td>
                <span @click="goToDetail(item.id)" class="link-like">
                  {{ item.name }}
                </span>
              </td>
              <td>{{ item.category }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.stock }}</td>
              <td>
                <v-btn icon @click="addToCart(item)" :title="'Add ' + item.name">
                  <v-icon>mdi-cart-plus</v-icon>
                </v-btn>
                <v-btn icon @click="editProduct(item.id)">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon @click="deleteProduct(item.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </template>
        </v-data-table>

        <div v-else class="text-center my-6">
          <div v-if="isLoading">
            <small>Loading products...</small>
          </div>
          <div v-else>
            <small>No products available.</small>
          </div>
        </div>

        <div class="d-flex justify-center mt-4" v-if="pageCount > 1">
          <v-pagination
            v-model="pageModel"
            :length="pageCount"
            @input="onPageChange"
          />
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Category", value: "category" },
        { text: "Price", value: "price" },
        { text: "Stock", value: "stock" },
        { text: "Actions", value: "actions", sortable: false }
      ]
    };
  },
  computed: {
    ...mapGetters("products", [
      "products",
      "totalItems",
      "isLoading",
      "page",
      "size"
    ]),
    pageModel: { //esto viene de v-pagination
      get() {
        // v-pagination es 1-based, backend 0-based
        return this.page + 1;
      },
      set(value) {
        this.onPageChange(value);
      }
    },
    pageCount() {
      return Math.ceil(this.totalItems / this.size) || 1;
    }
  },
  created() {
    // Ciclo de vida: created -> ideal para cargar datos iniciales
    this.fetchProducts();
  },
  methods: {
    
    ...mapActions("products", ["fetchProducts", "changePage", "deleteProduct"]),
    ...mapActions("cart", ["addToCart"]),

    goToDetail(id) {
      this.$router.push({ name: "ProductDetail", params: { id } });
    },

    editProduct(id) {
      this.$router
        .push({ name: "ProductEdit", params: { id } })
        .catch(() => {}); // para evitar "Uncaught (in promise)" al redirigir por guard
    },

    goToCreate() {
      this.$router
        .push({ name: "ProductCreate" })
        .catch(() => {});
    },

    onPageChange(newPage) {
      this.changePage(newPage - 1);
    }
  }
};
</script>

<style scoped>
.link-like {
  cursor: pointer;
  text-decoration: underline;
}
</style>
