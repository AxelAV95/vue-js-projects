<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title> Vuex Shop </v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="mr-4 font-weight-bold">Total: ${{ cartTotal }}</div>
      <v-btn icon>
        <v-badge :content="cartCount" color="red" overlap>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <h1 class="mb-4">Productos</h1>
        <v-row>
          <v-col v-for="product in products" :key="product.id" cols="12" md="4">
            <v-card>
              <!-- <v-card-title class="display-1">{{ product.image }}</v-card-title> -->
              <v-card-subtitle class="headline">{{
                product.name
              }}</v-card-subtitle>
              <v-card-text>
                Precio: <strong>${{ product.price }}</strong>
              </v-card-text>
              <v-card-actions>
                <v-btn color="success" @click="addToCart(product)">
                  Agregar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState("products", { products: "items" }),
    ...mapGetters("cart", {
      cartTotal: "totalPrice",
      cartCount: "count",
    }),
  },
  methods: {
    ...mapActions("products", { fetchProducts: "fetchItems" }),
    ...mapMutations("cart", { addToCart: "ADD_ITEM" }),
  },
  created() {
    this.fetchProducts();
  },
};
</script>