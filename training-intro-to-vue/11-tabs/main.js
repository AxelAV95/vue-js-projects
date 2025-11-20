
Vue.component('product-review', {
    template: `
      <form class="review-form" @submit.prevent="onSubmit">
        <p v-if="errors.length">
          <b>Corrige los errores:</b>
          <ul><li v-for="error in errors">{{ error }}</li></ul>
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
    `,
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
})


Vue.component('product-tabs', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: `
      <div>
        <span class="tab"
              :class="{ activeTab: selectedTab === tab }"
              v-for="(tab, index) in tabs"
              :key="index"
              @click="selectedTab = tab">
          {{ tab }}
        </span>

        <div v-show="selectedTab === 'Reviews'">
            <p v-if="!reviews.length">Aún no hay reseñas.</p>
            <ul>
                <li v-for="review in reviews">
                    <p>{{ review.name }}</p>
                    <p>Nota: {{ review.rating }}</p>
                    <p>{{ review.review }}</p>
                </li>
            </ul>
        </div>

        <product-review 
            v-show="selectedTab === 'Make a Review'"
            @review-submitted="addReview">
        </product-review>
      </div>
    `,
    data() {
        return {
            tabs: ['Reviews', 'Make a Review'],
            selectedTab: 'Reviews' // Pestaña por defecto
        }
    },
    methods: {
        // Este método actúa como un "puente"
        addReview(productReview) {
            // Recibimos del hijo (form) y pasamos al padre (product)
            this.$emit('review-submitted', productReview);
            
            // OPCIONAL: Cambiar la pestaña automáticamente para ver tu comentario
            this.selectedTab = 'Reviews'; 
        }
    }
})


Vue.component('product', {
    template: `
       <div class="product">
        <div class="product-image">
            <img :src="image">
        </div>

        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">En Stock</p>
            <p v-else>¡Agotado!</p>
            <ul><li v-for="detail in details">{{ detail }}</li></ul>

            <div v-for="(variant, index) in variants" 
                 :key="variant.variantId"
                 class="color-box"
                 :style="{ backgroundColor: variant.variantColor }"
                 @mouseover="updateProduct(index)">
            </div>

            <button @click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">
                Agregar al Carrito
            </button>
        </div>

        <product-tabs 
            :reviews="reviews"
            @review-submitted="addReview">
        </product-tabs>
    </div>
    `,
    data() {
        return {
            brand: 'Vue Mastery',
            product: 'Calcetines',
            selectedVariant: 0,
            details: ["80% algodón", "20% poliéster", "Género neutro"],
            variants: [
                { variantId: 2234, variantColor: "green", variantQuantity: 10, variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg' },
                { variantId: 2235, variantColor: "blue", variantQuantity: 0, variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg' }
            ],
            reviews: [] 
        }
    },
    methods: {
        addToCart() { this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId); },
        updateProduct(index) { this.selectedVariant = index; },
        addReview(productReview) { this.reviews.push(productReview) }
    },
    computed: {
        title() { return this.brand + ' ' + this.product; },
        image() { return this.variants[this.selectedVariant].variantImage; },
        inStock() { return this.variants[this.selectedVariant].variantQuantity; }
    }
})

var app = new Vue({
    el: '#app',
    data: { cart: [] },
    methods: { updateCart(id) { this.cart.push(id); } }
});