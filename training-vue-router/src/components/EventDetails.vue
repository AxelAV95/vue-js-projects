<template>
  <v-container>
    <v-btn text color="primary" to="/" class="mb-4">
      <v-icon left>mdi-arrow-left</v-icon> Volver
    </v-btn>

    <v-card v-if="event" outlined>
      <v-img height="200" :class="event.color"></v-img>
      <v-card-title class="text-h4">{{ event.name }}</v-card-title>
      <v-card-subtitle class="text-h6 mt-2">{{ event.date }}</v-card-subtitle>
      <v-card-text>
        {{ event.description }}
        <p class="mt-4 grey--text">ID de sistema: {{ id }}</p>
      </v-card-text>
    </v-card>

    <v-alert v-else type="error" outlined>
      No se encontró el evento con ID: {{ id }}
    </v-alert>
  </v-container>
</template>

<script>
export default {
  name: 'EventDetails',
  // Recibimos 'id' porque activaremos props: true en el router
  props: ['id'],
  computed: {
    event() {
      // Buscamos en el Store de Vuex el evento que tenga este ID
      return this.$store.state.events.find(e => e.id == this.id)
    }
  }
}
</script>