const app = Vue.createApp({
    // Data is a function that returns an object. This object contains the data that the template will use.
    data() {
        return {
            cart: [],
            premium: true,
            reviews: []
        }
    },
    // Methods are functions that are used to perform some action.
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        addReview(productReview){
            this.reviews.push(productReview)
        }
    },

})