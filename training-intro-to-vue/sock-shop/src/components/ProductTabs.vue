<template>
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
            <li v-for="(review, index) in reviews" :key="index">
                <p>{{ review.name }}</p>
                <p>Nota: {{ review.rating }}</p>
                <p>{{ review.review }}</p>
            </li>
        </ul>
    </div>

    <ProductReview 
        v-show="selectedTab === 'Make a Review'"
        @review-submitted="addReview">
    </ProductReview>
  </div>
</template>

<script>
import ProductReview from './ProductReview.vue' // <--- IMPORTANTE

export default {
    name: 'ProductTabs',
    components: { ProductReview }, // <--- REGISTRO LOCAL
    props: {
        reviews: { type: Array, required: true }
    },
    data() {
        return { tabs: ['Reviews', 'Make a Review'], selectedTab: 'Reviews' }
    },
    methods: {
        addReview(productReview) {
            this.$emit('review-submitted', productReview);
            this.selectedTab = 'Reviews';
        }
    }
}
</script>