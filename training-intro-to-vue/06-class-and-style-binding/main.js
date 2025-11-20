var app = new Vue({
    el: '#app',     
    data: {
        product: 'Socks',
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        altText: 'A pair of socks',

        inventory: 100,
        details: ['80% cotton', '20% polyester'],
        variants: [
            { id: 1, color: 'green', image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg' },
            { id: 2, color: 'blue', image: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg' }
        ],
        imageWidth: 200,
        cart: 0
    },
    methods:{
        addToCart(){
            this.cart += 1
        },

        updateProduct(variantImage){
            this.image = variantImage
        }
    }
})