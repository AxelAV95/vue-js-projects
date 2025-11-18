<script setup>
import { ref } from 'vue';
const props = defineProps({ valorInicial: Number });
const contador = ref(props.valorInicial || 0);

// 1. Definimos los eventos que este componente puede emitir.
const emit = defineEmits(['incrementado']);

function incrementar() {
  contador.value++;
  
  // 2. Emitimos el evento 'incrementado' y pasamos el nuevo valor
  //    como segundo argumento.
  emit('incrementado', contador.value);
}
</script>

<template>
  <div class="contador-wrapper">
    <h3>Contador: {{ contador }}</h3>
    <button @click="incrementar">Incrementar</button>
  </div>
</template>