Vue.component('product-review', {
    template: `
      <form class="review-form" @submit.prevent="onSubmit">
        
        <p v-if="errors.length">
          <b>Por favor corrige los siguientes errores:</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>

        <p>
          <label for="name">Nombre:</label>
          <input id="name" v-model="name" placeholder="Tu nombre">
        </p>
        
        <p>
          <label for="review">Reseña:</label>
          <textarea id="review" v-model="review"></textarea>
        </p>
        
        <p>
          <label for="rating">Calificación:</label>
          <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </p>
            
        <p>
          <input type="submit" value="Enviar">  
        </p>    
      
      </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            errors: [] // Para guardar errores de validación
        }
    },
    methods: {
        onSubmit() {
            this.errors = [];
            if (this.name && this.review && this.rating) {
                // Si todo está lleno, creamos el objeto reseña
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                }
                // Enviamos la reseña al componente padre (product)
                this.$emit('review-submitted', productReview)
                
                // Limpiamos el formulario
                this.name = null
                this.review = null
                this.rating = null
            } else {
                // Validación simple
                if (!this.name) this.errors.push("El nombre es obligatorio.")
                if (!this.review) this.errors.push("La reseña es obligatoria.")
                if (!this.rating) this.errors.push("La calificación es obligatoria.")
            }
        }
    }
})

// 2. COMPONENTE PRODUCTO (Actualizado)
Vue.component('product', {
    // Agregamos la sección de Reviews y el componente product-review al final
    template: `
       <div class="product">
        <div class="product-image">
            <img :src="image">
        </div>

        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">En Stock</p>
            <p v-else>¡Agotado!</p>

            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div v-for="(variant, index) in variants" 
                 :key="variant.variantId"
                 class="color-box"
                 :style="{ backgroundColor: variant.variantColor }"
                 @mouseover="updateProduct(index)">
            </div>

            <button @click="addToCart" 
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }">
                Agregar al Carrito
            </button>
        </div>

        <div style="width: 100%; margin-top: 20px; padding: 20px; border-top: 1px solid #d8d8d8;">
            <h2>Reseñas</h2>
            <p v-if="!reviews.length">Aún no hay reseñas.</p>
            <ul>
                <li v-for="review in reviews">
                <p>{{ review.name }}</p>
                <p>Calificación: {{ review.rating }}</p>
                <p>{{ review.review }}</p>
                </li>
            </ul>

            <product-review @review-submitted="addReview"></product-review>
        </div>
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
            reviews: [] // Array local para guardar las reseñas recibidas
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
        },
        updateProduct(index) {
            this.selectedVariant = index;
        },
        // Método para agregar la reseña que viene del hijo al array local
        addReview(productReview) {
            this.reviews.push(productReview)
        }
    },
    computed: {
        title() { return this.brand + ' ' + this.product; },
        image() { return this.variants[this.selectedVariant].variantImage; },
        inStock() { return this.variants[this.selectedVariant].variantQuantity; }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        }
    }
});