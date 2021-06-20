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
        <p>{{ sale }}</p>
        <p>Shipping: {{ shipping }}</p>
        <p v-if="inStock">In stock</p>
        <p v-else>Out stock</p>

        <product-details :details="details"></product-details>
        <div
          class="color-circle"
          v-for = "(variant, index) in variants"
          :key="variant.id"
          :style="{ backgroundColor: variant.color}"
          @mouseover="updateVariant(index)">  
        </div>
        <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
  <review-list v-if="reviews.length" :reviews="reviews"></review-list>
  <review-form @review-submitted="addReview">></review-form>
  `,
  data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        details: ['50% cotton', '30% wool', '20% polyester'],
        reviews: [],
        variants: [
          { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
          { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
        ]
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart',  this.variants[this.selectedVariant].id)
      },
      updateVariant(index) {
          this.selectedVariant = index
      },
      addReview(review) {
        this.reviews.push(review)
      }
  },
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
              return 'free'
          }
          return 2.99
      }

  }
})