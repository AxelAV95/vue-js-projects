<template>
   <div class="product">
    <div class="product-image">
        <img :src="image">
    </div>

    <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">En Stock</p>
        <p v-else>¡Agotado!</p>
        <ul><li v-for="(detail, index) in details" :key="index">{{ detail }}</li></ul>

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

    <ProductTabs 
        :reviews="reviews"
        @review-submitted="addReview">
    </ProductTabs>
</div>
</template>

<script>
import ProductTabs from './ProductTabs.vue'

export default {
    name: 'ProductDisplay',
    components: { ProductTabs },
    data() {
        return {
            brand: 'Vue Mastery',
            product: 'Calcetines',
            selectedVariant: 0,
            details: ["80% algodón", "20% poliéster", "Género neutro"],
            variants: [
                { 
                    variantId: 2234, 
                    variantColor: "green", 
                    variantQuantity: 10, 
                    // Si usas imágenes locales en assets, se importan con require:
                    // variantImage: require('@/assets/images/vmSocks-green-onWhite.jpg')
                    variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
                },
                { 
                    variantId: 2235, 
                    variantColor: "blue", 
                    variantQuantity: 0, 
                    variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
                }
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
}
</script>