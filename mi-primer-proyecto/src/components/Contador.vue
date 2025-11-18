<template>
  <div class="contador-wrapper">
    <h3>Contador: {{ contador }}</h3>
    <button @click="incrementar">Incrementar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 1. Definimos los "props" que este componente acepta
const props = defineProps({
  valorInicial: Number // Aceptamos una propiedad llamada 'valorInicial'
});

// 2. Usamos el prop para establecer el estado inicial
const contador = ref(props.valorInicial);

function incrementar() {
  contador.value++;
}
</script>

<style scoped>
.contador-wrapper {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
}
button {
  background-color: #42b983; /* Color verde de Vue */
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}
</style>