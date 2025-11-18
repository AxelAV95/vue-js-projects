<script setup>
import { ref, onMounted } from 'vue';

// 1. Un 'ref' para guardar nuestros posts y el estado de carga
const posts = ref([]);
const cargando = ref(true);

// 2. Definimos el hook onMounted.
//    Esta función de flecha se ejecutará cuando el componente
//    esté listo y montado en la página.
onMounted(async () => {
  console.log('¡El componente se ha montado!');
  
  // Simulamos una llamada a una API
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    posts.value = await respuesta.json();
  } catch (error) {
    console.error('Error al cargar posts:', error);
  } finally {
    cargando.value = false;
  }
});

console.log('El script setup se ejecuta (el componente aún no está montado)');
</script>

<template>
  <h2>Posts de un Blog</h2>
  
  <div v-if="cargando">
    Cargando posts... ⏳
  </div>
  
  <ul v-else>
    <li v-for="post in posts" :key="post.id">
      {{ post.title }}
    </li>
  </ul>
</template>