<script setup>
    import NavBar from './components/NavBar.vue';
    import Footer from './components/Footer.vue';
    import categoryApi from './libs/api/category';
</script>
<template>
    <NavBar :categories="categories"/>
    <router-view></router-view>
    <Footer :categories="categories"/>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                categories: [],
            };
        },
        async mounted() {
            this.categories = await categoryApi.all();
        },
    };
</script>
