<template>
  <v-card flat>
    <v-card-text>
      <h3>Preferencias de Alertas</h3>
      <v-switch label="Recibir emails de marketing" inset color="primary"></v-switch>
      <v-switch label="Notificaciones push" inset input-value="true" color="primary"></v-switch>
    </v-card-text>
  </v-card>
</template>
<script>export default { name: 'SettingsNotifications' }</script>