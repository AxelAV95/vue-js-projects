var app = new Vue({
    el: '#app',     
    data: {
        product: 'Socks',
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        altText: 'A pair of socks',

        inventory: 100,
        details: ['80% cotton', '20% polyester'],
        variants: [
            { id: 1, color: 'green' },
            { id: 2, color: 'blue' }
        ],
        imageWidth: 200

    }
})