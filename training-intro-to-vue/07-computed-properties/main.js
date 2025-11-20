var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    selectVariant: 0,

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
    imageWidth: 200,
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },

    updateProduct(index) {
      this.selectVariant = index;
    },
  },
  computed: {
    title() {
      return this.product + " - " + this.variants[this.selectVariant].color;
    },
    image() {
      return this.variants[this.selectVariant].image;
    },
    inStock() {
      return this.variants[this.selectVariant].quantity;
    },
  },
});
