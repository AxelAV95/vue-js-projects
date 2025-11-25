<template>
  <v-card max-width="400" class="mx-auto mt-5">
    <v-card-title>
      <span class="headline">Login (Mock)</span>
    </v-card-title>

    <v-card-text>
      <!-- Solo demostrativo -->
      <v-text-field v-model="username" label="Username" v-autofocus />
      <v-text-field v-model="password" label="Password" type="password" />
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="onLogin">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    onLogin() {
      this.login(); // action de Vuex que marca isAuthenticated = true

      const redirect = this.$route.query.redirect || { name: "HomeView" };

      this.$router.push(redirect).catch(() => {});
    },
  },
};
</script>
