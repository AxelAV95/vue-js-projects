// Componente Product
Vue.component("product", {
  template: `
    <div class="product">

      <!-- Imagen -->
      <div class="product-image">
        <img :src="image" :alt="altText" />
      </div>

      <!-- Información -->
      <div class="product-info">

        <h1>{{ title }}</h1>

        <!-- Stock -->
        <p v-if="inStock > 10">In Stock</p>
        <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out!</p>
        <p v-else>Out of Stock</p>

        <span v-show="inStock === 0">Come back later</span>

        <!-- Detalles -->
        <h3>Details</h3>
        <ul>
          <li v-for="detail in details" :key="detail">{{ detail }}</li>
        </ul>

        <!-- Variantes -->
        <h3>Available Colors</h3>
        <div
          v-for="(variant, index) in variants"
          :key="variant.id"
          class="color-box"
          :style="{ backgroundColor: variant.color }"
          @mouseover="updateProduct(index)"
        ></div>

        <!-- Botón -->
        <button
          @click="addToCart"
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }"
        >
          Add to Cart
        </button>


      </div>
    </div>
  `,

  data() {
    return {
      product: "Socks",
      selectedVariant: 0,

      altText: "A pair of socks",
      details: ["80% cotton", "20% polyester"],

      variants: [
        {
          id: 1,
          color: "green",
          image:
            "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
          quantity: 10,
        },
        {
          id: 2,
          color: "blue",
          image:
            "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
          quantity: 0,
        },
      ],

      
    };
  },

  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },

    updateProduct(index) {
      this.selectedVariant = index;
    },
  },

  computed: {
    title() {
      return (
        this.product + " - " + this.variants[this.selectedVariant].color
      );
    },

    image() {
      return this.variants[this.selectedVariant].image;
    },

    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
  },
});

// Instancia Root
var app = new Vue({
  el: "#app",
  data:{
    cart: [],
  },
  methods:{
    updateCart(id){
      this.cart.push(id);
    }
  }
});
