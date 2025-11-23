<template>
  <v-container>
    <h1 class="text-h4 mb-5">Dashboard</h1>

    <v-row class="mb-5">
      <v-col cols="12">
        <v-card outlined class="pa-4">
          <div class="d-flex align-center">
            <v-avatar color="primary" size="56" class="mr-4">
               <span class="white--text text-h5">AD</span>
            </v-avatar>
            <div>
              <h2 class="text-h6">Bienvenido, Admin</h2>
              <p class="caption mb-0">Tienes {{ events.length }} eventos cargados.</p>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <h2 class="text-h5 mb-3">Próximos Eventos</h2>

    <div v-if="loading" class="text-center my-5">
      <v-progress-circular
        indeterminate
        color="primary"
        size="70"
      ></v-progress-circular>
      <p class="mt-3 grey--text">Conectando con el servidor...</p>
    </div>

    <v-row v-else>
      <v-col v-for="event in events" :key="event.id" cols="12" sm="6" md="4">
        <v-card hover height="100%">
          <v-img height="10" :class="event.color"></v-img>
          <v-card-title>{{ event.name }}</v-card-title>
          <v-card-subtitle class="pb-0">
            <v-icon small class="mr-1">mdi-calendar</v-icon>
            {{ event.date }}
          </v-card-subtitle>
          <v-card-text class="mt-3">{{ event.description }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="primary">Ver Detalles</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>
<script>
export default {
  name: 'DashboardHome',
  data: () => ({
    loading: false // Estado local para la interfaz de usuario
  }),
  computed: {
    events() {
      return this.$store.state.events;
    }
  },
  created() {
    // Si no tenemos eventos en memoria, los pedimos
    if (this.events.length === 0) {
      this.loading = true;
      
      // DISPATCH: Así se llama a una Acción
      this.$store.dispatch('fetchEvents')
        .then(() => {
          this.loading = false; // Apagamos el spinner cuando termine
        });
    }
  }
}
</script>