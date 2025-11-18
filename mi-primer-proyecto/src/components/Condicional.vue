<script setup>
import { ref } from 'vue';
const esVisible = ref(true);
</script>

<template>
  <button @click="esVisible = !esVisible">
    Alternar Visibilidad
  </button>

  <h2 v-if="esVisible">
    ¡Ahora me ves!
  </h2>
  
  <h2 v-else>
    ¡Ahora no!
  </h2>

  </template>

<style scoped>
h2 {
  color: #42b983;
}
</style>