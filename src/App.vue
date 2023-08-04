<script setup>
    import NavBar from './components/NavBar.vue';
    import Footer from './components/Footer.vue';
    import categoryApi from './libs/api/category';
</script>
<template>
    <div class="wrapper">
        <NavBar :categories="categories" />
        <router-view></router-view>
    </div>

    <Footer style="background-color: #f0f0f0;
    padding: 20px;
    text-align: center;" :categories="categories" />
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

<style>
    .wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>
