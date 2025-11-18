<script setup>
import { ref, computed } from 'vue';

// --- Estado (Nuestros datos base) ---
const tareas = ref([
  { id: 1, texto: 'Aprender v-if', completada: true },
  { id: 2, texto: 'Practicar v-for', completada: false },
  { id: 3, texto: 'Entender computed', completada: false }
]);

const nuevaTareaTexto = ref('');

// --- Propiedades Computadas (Nuestros datos derivados) ---

// Esta computada filtra la lista y nos da un nuevo array
// que solo contiene las tareas pendientes.
const tareasPendientes = computed(() => {
  // .filter() crea un nuevo array con los elementos que
  // pasan la condición (donde completada es false).
  return tareas.value.filter(tarea => !tarea.completada);
});

// Esta computada nos da un simple número.
const totalTareas = computed(() => {
  return tareas.value.length;
});

// --- Métodos (Nuestras acciones) ---
function agregarTarea() {
  if (nuevaTareaTexto.value.trim() === '') return;
  
  tareas.value.push({
    id: totalTareas.value + 1,
    texto: nuevaTareaTexto.value,
    completada: false
  });
  nuevaTareaTexto.value = '';
}
</script>

<template>
  <h2>Mis Tareas (Total: {{ totalTareas }})</h2>
  
  <input 
    v-model="nuevaTareaTexto" 
    @keydown.enter="agregarTarea" 
    placeholder="Añadir nueva tarea"
  >
  <button @click="agregarTarea">Agregar</button>

  <hr>
  
  <h3>Tareas Pendientes ({{ tareasPendientes.length }})</h3>
  
  <ul>
    <li v-for="tarea in tareasPendientes" :key="tarea.id">
      {{ tarea.texto }}
      </li>
  </ul>
  
  <p v-if="tareasPendientes.length === 0">
    ¡Felicidades, no tienes tareas pendientes!
  </p>
</template>

<style scoped>
/* (Estilos para que se vea bien) */
input { margin-right: 8px; }
li { margin-top: 8px; }
</style>