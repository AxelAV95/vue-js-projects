<script setup>
import { ref } from 'vue';

// Este es nuestro array de "estado"
const tareas = ref([
  { id: 1, texto: 'Aprender v-if', completada: true },
  { id: 2, texto: 'Practicar v-for', completada: false },
  { id: 3, texto: 'Dominar Vue', completada: false }
]);
</script>

<template>
  <h3>Mi Lista de Tareas</h3>
  <ul>
    <li v-for="tarea in tareas" :key="tarea.id">
      {{ tarea.texto }}
    </li>
  </ul>

  </template>

<style scoped>
li {
  font-size: 1.1em;
}
</style>