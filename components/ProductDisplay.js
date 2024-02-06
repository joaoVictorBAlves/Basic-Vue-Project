app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" alt="">
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p v-if="inventory > 10">In Stock</p>
                    <p v-if="inventory <= 10 && inventory > 0">Last {{inventory}} Unities</p>
                    <p v-if="inventory == 0">Out of Stock</p>
                    
                    <p>Shipping: {{ shipping }}</p>
                    
                    <ul>
                        <li v-for="detail in details">{{detail}}</li>
                    </ul>
                    <div v-for="(variant, index) in variants" v-key="variant.id" @mouseover="updateVariant(index)"
                        class="color-circle" :style="{ backgroundColor: variant.color}">
                    </div>
                    <!-- [isActive ? activeClass : ""] -->
                    <button class="button" :class="{ disabledButton: !inStock}" :disabled="!inStock"
                        @click="addToCart">Add
                        to Cart</button>
                </div>
            </div>
        </div>`,

    // Data is a function that returns an object. This object contains the data that the template will use.
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    // Methods are functions that are used to perform some action.
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    // Computed properties are cached based on their dependencies. A computed property will only re-evaluate when some of its dependencies have changed.
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }
    },
    
})