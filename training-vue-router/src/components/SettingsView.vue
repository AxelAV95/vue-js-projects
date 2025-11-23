<template>
  <v-container>
    <h1 class="mb-4">Configuración</h1>

    <v-card>
      <v-tabs background-color="grey lighten-4">
        <v-tab to="/settings/profile">Perfil</v-tab>
        <v-tab to="/settings/notifications">Notificaciones</v-tab>
      </v-tabs>

      <v-card-text>
        <transition name="fade-transition" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-card-text>
    </v-card>

  </v-container>
</template>

<script>
export default {
  name: 'SettingsView'
}
</script>