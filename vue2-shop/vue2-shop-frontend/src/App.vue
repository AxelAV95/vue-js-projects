<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vuex Shop</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="mr-4 font-weight-bold">
        Cart: {{ cartCount }} items - ${{ cartTotal }}
      </div>
    </v-app-bar>

    <v-main>
      <v-container class="mt-5">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters("cart", ["cartCount", "cartTotal"])
  }
};
</script>
