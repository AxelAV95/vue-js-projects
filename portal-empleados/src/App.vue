<template>
  <v-app>
    <v-app-bar app color="deep-purple darken-1" dark>
      <v-toolbar-title>Vue 2 ERP</v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="!isAuthenticated">
        <v-btn text to="/login">Login</v-btn>
      </div>

      <div v-else>
        <span class="mr-4"> Hola, {{ currentUser.name }}</span>
        <v-btn text to="/producto/1">Productos</v-btn>
        <v-btn @click="logout">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view> </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters(["isAuthenticated", "currentUser"]),
  },
  methods: {
    ...mapActions(["logoutAction"]),
    logout() {
      this.logoutAction();
      this.$router.push("/login");
    },
  },
};
</script>