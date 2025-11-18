<script setup>
// 1. Importamos nuestro componente
import Contador from "./components/Contador.vue";
import Condicional from "./components/Condicional.vue";
import Listas from "./components/Listas.vue";
import ListaComputada from "./components/ListaComputada.vue";
import Posts from "./components/Posts.vue";
</script>

<template>
  <header>
    <h1>Mi Primera App de Vue</h1>
  </header>

<main>
    <!-- <Contador :valor-inicial="10" />
    <Contador :valor-inicial="5" />
    <Condicional />
    <Listas />
    <ListaComputada /> -->
    <Posts />
  </main>
</template>

<style scoped>
/* (Puedes dejar los estilos que vienen por defecto o borrarlos) */
header {
  line-height: 1.5;
}
main {
  padding-top: 20px;
  display: flex;
  gap: 20px; /* Añade espacio entre nuestros contadores */
}
</style>

<!-- <script setup>
import { ref } from 'vue';
import Contador2 from './components/Contador2.vue';

const mensajeDelHijo = ref('Aún no hay eventos');

// 3. Esta es la función que se ejecutará CUANDO el hijo emita.
//    El 'nuevoValor' es el dato que el hijo nos pasó.
function manejarElIncremento(nuevoValor) {
  mensajeDelHijo.value = `¡El hijo fue incrementado! Su nuevo valor es: ${nuevoValor}`;
}
</script>

<template>
  <main>
    <Contador2 :valor-inicial="10" @incrementado="manejarElIncremento" />

    <hr>
    <h4>Mensaje desde el Padre:</h4>
    <p>{{ mensajeDelHijo }}</p>
  </main>
</template>

<style scoped>
main { padding: 20px; }
hr { margin: 20px 0; }
</style> -->