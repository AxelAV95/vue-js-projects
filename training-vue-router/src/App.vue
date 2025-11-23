<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">Menú</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item link to="/">
          <v-list-item-icon><v-icon>mdi-view-dashboard</v-icon></v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        
        <v-list-item link to="/create">
          <v-list-item-icon><v-icon>mdi-plus-box</v-icon></v-list-item-icon>
          <v-list-item-title>Nuevo Evento</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/lab">
          <v-list-item-icon><v-icon>mdi-flask</v-icon></v-list-item-icon>
          <v-list-item-title>Lab Directivas</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/settings/profile">
          <v-list-item-icon><v-icon>mdi-cog</v-icon></v-list-item-icon>
          <v-list-item-title>Configuración</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Event Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>{{ $vuetify.theme.dark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <transition name="fade-transition" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    // ¡Adiós a currentView! Ya no lo necesitamos.
  }),
};
</script>