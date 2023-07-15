<script>
import axios from 'axios';
    export default {
        data() {
            return {
                showPopup: false,
                categories: [],
            };
        },
        mounted() {
            this.getCategories();
        },
        methods: {
            togglePopup() {
                this.showPopup = !this.showPopup;
            },
            closePopup() {
                this.showPopup = false;
            },
            routeToCheckout() {
                this.$router.push({ name: 'customer-info' });
            },
            routeToCart() {
                this.$router.push({ name: 'cart' });
            },
            getCategories() {
                // Retrieve products using an API request
                // Set this.products with the retrieved data
                axios
                    .get('http://127.0.0.1:8000/api/categories/')
                    .then((response) => {
                        this.categories = response.data;
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            },
        },
    };
</script>

<template>
    <header class="sticky-top">
        <nav class="myNav navbar navbar-dark navbar-expand-lg p-3">
            <a
                class="navbar-brand d-flex me-5"
                href="/">
                <img
                    src="../assets/kprLogo.png"
                    alt="myLogo"
                    class="myLogo me-2" />
                <div class="KPR fst-italic fw-bold fs-4">KPR</div>
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mynavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="collapse navbar-collapse"
                id="mynavbar">
                <ul class="navbar-nav ms-5 me-auto">
                    <li class="nav-item" v-for="cate in categories" :key="cate.id">
                        <a
                            class="nav-link"
                            href="javascript:void(0)"
                            >{{cate.name}}</a
                        >
                    </li>
                </ul>
                <div>
                    <i
                        class="bi bi-search mx-2"
                        type="button"></i>
                    <button
                        class="btn"
                        @click="togglePopup"
                        type="button">
                        <i class="bi bi-cart3 me-2"></i>Cart(0)
                    </button>
                </div>
            </div>
        </nav>

        <div
            v-if="showPopup"
            class="popup"
            @click.self="closePopup">
            <!-- Popup content here -->
            <div class="w-25 bg-white sub-cart p-2 mx-4 shadow rounded-3">
                <h3>Item Added to Cart</h3>
                <hr />
                <div class="bg-info rounded-3 mb-3 p-2">
                    <div>MacBook Air Case - Gray</div>
                    <div>Qty:1 - $8.34</div>
                </div>
                <div class="d-flex overflow-hidden rounded-3">
                    <div
                        type="button"
                        class="button w-50 p-2 text-center text-dark"
                        style="background-color: azure"
                        @click="routeToCart">
                        View Cart
                    </div>
                    <div
                        type="button"
                        class="button w-50 p-2 text-center text-white"
                        style="background-color: rgb(67, 90, 90)"
                        @click="routeToCheckout">
                        Checkout
                    </div>
                </div>
            </div>

            <!-- <h2>Popup Content</h2>
      <p>This is the popup content.</p> -->
        </div>
    </header>
</template>

<style scoped>
    @import url('../assets/style.css');
    .KPR,
    .collapse ul li a {
        color: #273672;
    }
    .popup {
        position: fixed;
        top: 20;
        right: 20;
        width: 100%;
        height: 100%;
        display: flex;

        justify-content: end;
    }

    .sub-cart {
        height: fit-content;
    }
</style>
