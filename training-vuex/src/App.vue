<template>
  <v-app>

    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">Menú</v-list-item-title>
            <v-list-item-subtitle>Navegación</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item link @click="currentView = 'home'">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="currentView = 'form'">
          <v-list-item-icon>
            <v-icon>mdi-plus-box</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Nuevo Evento</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="currentView = 'playground'">
          <v-list-item-icon>
            <v-icon>mdi-flask</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Lab Directivas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Event Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>
          {{ $vuetify.theme.dark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}
        </v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <DashboardHome v-if="currentView === 'home'" />
      <EventForm v-if="currentView === 'form'" />
      <PlaygroundLab v-if="currentView === 'playground'" />
    </v-main>

  </v-app>
</template>

<script>
// Importamos los 3 componentes
import DashboardHome from './components/DashboardHome.vue';
import EventForm from './components/EventForm.vue';
import PlaygroundLab from './components/PlaygroundLab.vue'; // ✅ Importamos el nuevo

export default {
  name: 'App',
  components: {
    DashboardHome,
    EventForm,
    PlaygroundLab // ✅ Lo registramos
  },
  data: () => ({
    drawer: false,       // Controla visibilidad del menú lateral
    currentView: 'home', // Controla qué pantalla se ve ('home', 'form', 'playground')
  }),
};
</script>