<script setup>

import NavBar from '../components/NavBar.vue'
import itemPH from '../components/itemPhone.vue'
import Landing from './LandingView.vue'

</script>

<script>
import productApi from '../libs/api/product';
export default {

  data() {
    return {
      products: []
    };
  },
  async mounted() {
    const allProducts = await productApi.all();
    this.products = allProducts.slice(0, 8);
  },
  methods: {
    
  }
};
</script>

<template>
  <main>

    <!-- <div v-for="product in products" :key="product.id">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>

    </div> -->
    
    <NavBar />
    <!-- <heroTitle /> -->
    <div
        class="heroTitle p-md-2 mx-md-3 rounded-4 d-flex ps-5 pb-5"
        style="height: 550px;"
        id="heroCover"
    >
    
        <div class="content d-flex flex-column gap-2 align-self-end ps-5 pb-5">
            <h1>Techtopia Hub</h1>
            <p
                class="fs-5"
                style="width: 42%"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure
                distinctio deleniti dicta eum molestiae!
            </p>
            <div>
                <button class="btn px-4 rounded-3">Learn More</button>
            </div>
        </div>
    </div>

    <p class="text-center p-4">dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu
        <br> ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae
    </p>

    <div class="items">
      <div class="d-flex flex-wrap justify-content-evenly px-3">
        <itemPH v-for="product in products" :key="product.id" :product="product"/>
      </div>
      
    </div>


  </main>
  <Landing/>
</template>

<style scoped>
@import url('../assets/style.css');
</style>
