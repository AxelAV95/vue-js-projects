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
              <p class="caption mb-0">Tienes {{ events.length }} eventos próximos.</p>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <h2 class="text-h5 mb-3">Próximos Eventos</h2>

    <v-row>
      <v-col 
        v-for="event in events" 
        :key="event.id"
        cols="12" sm="6" md="4"
      >
        <v-card hover height="100%">
          
          <v-img
            height="10"
            :class="event.color"
          ></v-img>

          <v-card-title>{{ event.name }}</v-card-title>
          
          <v-card-subtitle class="pb-0">
            <v-icon small class="mr-1">mdi-calendar</v-icon>
            {{ event.date }}
          </v-card-subtitle>

          <v-card-text class="mt-3">
            {{ event.description }}
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="primary">
              Ver Detalles
            </v-btn>
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
    // Array de objetos con datos de eventos
    events: [
      {
        id: 1,
        name: 'Taller de Vue.js',
        date: '22 Nov 2025',
        description: 'Aprende los fundamentos de Vue y Vuetify en este taller intensivo.',
        color: 'indigo'
      },
      {
        id: 2,
        name: 'Lanzamiento de Producto',
        date: '05 Dic 2025',
        description: 'Presentación oficial de la nueva línea de calcetines inteligentes.',
        color: 'orange'
      },
      {
        id: 3,
        name: 'Fiesta de Fin de Año',
        date: '31 Dic 2025',
        description: 'Celebración con todo el equipo de desarrollo.',
        color: 'purple'
      },
      {
        id: 4,
        name: 'Hackathon Interno',
        date: '15 Ene 2026',
        description: '24 horas de código, pizza y bugs.',
        color: 'teal'
      }
    ]
  })
}
</script>