<template>
  <v-card v-if="product">
    <v-card-title>
      <span class="headline">{{ product.name }}</span>
      <v-spacer></v-spacer>
      <v-chip>{{ product.category }}</v-chip>
    </v-card-title>

    <v-card-text>
      <p><strong>Price:</strong> ${{ product.price }}</p>
      <p><strong>Stock:</strong> {{ product.stock }}</p>
      <p><strong>ID:</strong> {{ product.id }}</p>
    </v-card-text>

    <v-card-actions>
      <v-btn text @click="$router.back()">Back</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="addToCart(product)">Add to cart</v-btn>
    </v-card-actions>
  </v-card>

  <v-alert v-else type="warning">
    Loading product...
  </v-alert>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductDetail",
  props: {
    id: {
      type: String,
      required: false
    }
  },
  computed: {
    ...mapGetters("products", ["currentProduct", "isLoading"]),
    product() {
      return this.currentProduct;
    }
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      handler(newId) {
        this.loadProduct(newId);
      }
    }
  },
  methods: {
    ...mapActions("products", ["fetchProductById"]),
    ...mapActions("cart", ["addToCart"]),
    loadProduct(id) {
      this.fetchProductById(id);
    }
  }
};
</script>
