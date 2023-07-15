<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                categories: [],
            };
        },
        mounted() {
            this.getCategories();
        },
        methods: {
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
    <footer
        class="px-3 pb-2 w-100"
        style="margin-top: auto">
        <div class="f-row1 d-md-flex flex-wrap">
            <div class="f-link d-md-flex flex-wrap w-50 align-items-center">
                <a
                    href="/"
                    class="navbar-brand w-25 fw-bold fs-2"
                    >KPR</a
                >
                <!-- <div type="button" class="w-25 fw-bold fs-2">KPR</div> -->
                <div class="w-75">
                    <ul
                        class="navbar-nav gap-4 ms-5 me-auto list-group-horizontal">
                        <li
                            class="nav-item"
                            v-for="cate in categories"
                            :key="cate.id">
                            <a
                                class="nav-link"
                                href="javascript:void(0)"
                                >{{ cate.name }}</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
            <div class="w-50 d-flex justify-content-center align-items-center">
                Stay In Touch! Join Our Newsletter.
            </div>
        </div>
        <div class="f-row2 d-md-flex">
            <div
                id="creditCard"
                class="w-50 d-flex gap-1">
                <img
                    src="../assets/visa.svg"
                    alt="" />
                <img
                    src="../assets/masterCard.svg"
                    alt="" />
                <img
                    src="../assets/AExpress.svg"
                    alt="" />
            </div>
            <div class="w-50 d-flex justify-content-lg-center">
                <input
                    type="text"
                    placeholder="Enter your Email" />
                <button
                    type="button"
                    class="btn border"
                    style="
                        background: #373737 !important;
                        border-color: #373737 !important;
                    ">
                    Subscribe
                </button>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    @import url('../assets/style.css');
</style>
