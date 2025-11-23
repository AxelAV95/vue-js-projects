<template>
  <v-container>
    <h1 class="mb-5">Dashboard</h1>
    
    <p class="caption grey--text">
      Mostrando página {{ page }} de {{ totalPages }}
    </p>

    <v-row>
      <v-col v-for="event in paginatedEvents" :key="event.id" cols="12" sm="6" md="4">
        <v-card hover>
          <v-img height="10" :class="event.color"></v-img>
          <v-card-title>{{ event.name }}</v-card-title>
          <v-card-subtitle>{{ event.date }}</v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="primary" :to="{ name: 'EventDetails', params: { id: event.id } }">
              Ver Detalles
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <div class="text-center mt-5">
      <v-pagination
        v-model="page"
        :length="totalPages"
        circle
        @input="updateUrl" 
      ></v-pagination>
      </div>

  </v-container>
</template>

<script>
export default {
  name: 'DashboardHome',
  data() {
    return {
      // Inicializamos la página leyendo la URL (?page=X)
      // Si no existe, usamos 1. ParseInt es importante porque la URL devuelve strings.
      page: parseInt(this.$route.query.page) || 1, //esto sirve para obtener el numero de pagina desde la url
      perPage: 3 // Cantidad de eventos por página
    }
  },
  computed: {
    // 1. Todos los eventos (desde Vuex)
    allEvents() {
      return this.$store.state.events; //aqui accedo a los eventos desde el store
    },
    // 2. Calculamos cuántas páginas totales hay
    totalPages() {
      return Math.ceil(this.allEvents.length / this.perPage); //aqui se calcula el total de paginas redondeando hacia arriba la division de eventos entre eventos por pagina
    },
    // 3. Eventos filtrados solo para la página actual
    paginatedEvents() {
      const start = (this.page - 1) * this.perPage; //esto calcula el indice de inicio
      const end = start + this.perPage; //esto calcula el indice final
      return this.allEvents.slice(start, end); //aqui devolvemos los eventos de la pagina actual
    }
  },
  methods: {
    // Actualizamos la URL sin recargar la página
    updateUrl(newPage) {
      this.$router.push({ query: { page: newPage } }); //esto es para actualizar la url, query significa los parametros de la url y page es el parametro que queremos actualizar
      // .push agrega una entrada al historial del navegador (puedes usar 'atrás')
    }
  },
  // Watch: Si el usuario usa las flechas "Atrás/Adelante" del navegador,
  // necesitamos actualizar la variable 'page' localmente.
  watch: {
    '$route.query.page'(newPage) { //esto sirve para observar los cambios en la url con el query page
      this.page = parseInt(newPage) || 1;
    }
  }
}
</script>