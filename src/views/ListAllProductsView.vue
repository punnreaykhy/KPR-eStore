<script setup>
    import itemPH from '../components/itemPhone.vue';
    import productApi from '../libs/api/product';
</script>

<script>
    export default {
        data() {
            return {
                products: [],
            };
        },
        async mounted() {
            this.products = await productApi.all();
        },
        methods: {},
    };
</script>

<template>
    <main>
        <!-- <div v-for="product in products" :key="product.id">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>

    </div> -->

        
        <!-- <heroTitle /> -->
        <div class="d-flex gap-2 px-3 fs-3">
            <a
                href="#"
                class=" text-decoration-none"
                >All Products</a
            >
        </div>

        <div class="items">
            <div class="d-flex flex-wrap justify-content-evenly px-3">
                <itemPH
                    v-for="product in products"
                    :key="product.id"
                    :product="product" />
            </div>
        </div>

        
    </main>
</template>

<style scoped>
    @import url('../assets/style.css');
</style>
