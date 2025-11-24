<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Acceso al Sistema</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Usuario (admin)"
                v-model="username"
                prepend-icon="mdi-account"
                type="text"
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="handleLogin" :loading="loading">Entrar</v-btn>
          </v-card-actions>
        </v-card>
        
        <v-snackbar v-model="errorAlert" color="error">
          Usuario incorrecto. Intenta 'admin'
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      errorAlert: false
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      
      // Llamamos a la ACCIÓN del store
      this.$store.dispatch('loginAction', { 
        username: this.username, 
        password: this.password 
      })
      .then(() => {
        // Si sale bien:
        this.$router.push('/'); 
      })
      .catch((error) => {
        // Si sale mal:
        console.error(error);
        this.errorAlert = true;
      })
      .finally(() => {
        this.loading = false;
      });
    }
  }
}
</script>