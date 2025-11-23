<template>
  <v-card flat>
    <v-card-text>
      <h3>Editar Perfil</h3>
      <v-text-field label="Nombre de Usuario" value="Admin" outlined dense></v-text-field>
      <v-text-field label="Email" value="admin@vue.com" outlined dense></v-text-field>
      <v-btn color="primary">Guardar Cambios</v-btn>
    </v-card-text>
  </v-card>
</template>
<script>export default { name: 'SettingsProfile' }</script>