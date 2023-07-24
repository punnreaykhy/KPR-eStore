<script setup>
    import itemPH from '../components/itemPhone.vue';
    import productApi from '../libs/api/product';
</script>

<script>
    export default {
        data() {
            return {
                categoryName: "",
                products: [],
            };
        },
        async mounted() {
            this.categoryName = this.$route.params.name;
            this.products = await productApi.getByCate(this.$route.params.name);
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
        <div class="d-flex gap-3 px-3 fs-3">
            <router-link to="/products"
                class=" text-decoration-none"
                >All Products</router-link
            >><a href="#"
            class=" text-decoration-none text-capitalize"
            >{{categoryName}}</a
        >
        </div>

        <div class="items">
            <div class="d-flex flex-wrap justify-content-evenly px-3">
                <itemPH
                    v-for="product in products"
                    :key="product?.id"
                    :product="product" />
            </div>
        </div>

    </main>
</template>

<style scoped>
    @import url('../assets/style.css');
</style>
