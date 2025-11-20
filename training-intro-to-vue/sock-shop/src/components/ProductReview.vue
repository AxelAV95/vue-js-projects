<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <p v-if="errors.length">
      <b>Corrige los errores:</b>
      <ul><li v-for="(error, index) in errors" :key="index">{{ error }}</li></ul>
    </p>
    <p><label for="name">Nombre:</label><input id="name" v-model="name"></p>
    <p><label for="review">Reseña:</label><textarea id="review" v-model="review"></textarea></p>
    <p><label for="rating">Calificación:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option><option>4</option><option>3</option><option>2</option><option>1</option>
      </select>
    </p>
    <p><input type="submit" value="Enviar"></p>    
  </form>
</template>

<script>
export default {
  name: 'ProductReview', // Buena práctica: Darle nombre al componente
  data() {
      return { name: null, review: null, rating: null, errors: [] }
  },
  methods: {
      onSubmit() {
          if (this.name && this.review && this.rating) {
              let productReview = { name: this.name, review: this.review, rating: this.rating }
              this.$emit('review-submitted', productReview)
              this.name = null; this.review = null; this.rating = null; this.errors = [];
          } else {
              if (!this.name) this.errors.push("Nombre requerido.")
              if (!this.review) this.errors.push("Reseña requerida.")
              if (!this.rating) this.errors.push("Calificación requerida.")
          }
      }
  }
}
</script>