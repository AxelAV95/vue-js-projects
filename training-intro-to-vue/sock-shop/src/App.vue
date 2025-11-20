<template>
  <div id="app">
    <div class="nav-bar"></div>
    
    <div class="cart">
      <p>Carrito({{ cart.length }})</p>
    </div>
    
    <ProductDisplay @add-to-cart="updateCart"></ProductDisplay>
  </div>
</template>

<script>
import ProductDisplay from './components/ProductDisplay.vue'
export default {
  name: 'App',
  components: {
    ProductDisplay
  },
  data() {
    return {
      cart: []
    }
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    }
  }
}
</script>

<style>
/* Importamos nuestros estilos globales aquí */
@import './assets/style.css';
</style>