// Creating vue app
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            description: "A warm fuzzy pair of socks. hello",
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {
                    id: 1,
                    color: 'green'
                },
                {
                    id: 2,
                    color: 'blue'
                }
            ]
        }
    }
})