<script>
    import productApi from '../libs/api/product';
    
    export default {
        data() {
            return {
                showPopup: false,

                searchBarVisible: false,
                searchInput: '',
                productsInCart: [],
            };
        },
        async mounted() {
            if (localStorage.productsInCart) {
                    await this.getProductsInCart();
                    this.$store.commit('setCartData', this.productsInCart);
                }
        },

        computed: {},

        methods: {
            async getProductsInCart() {
                
                function wait(ms) {
                    return new Promise((resolve) => setTimeout(resolve, ms));
                }
                this.productsInCart = await JSON.parse(
                    localStorage.getItem('productsInCart')
                );
                const fetchData = async (value) => {
                    // Your asynchronous logic here, for example:
                    try {
                        return await productApi.getProductForCart(value.id);
                    } catch (error) {
                        if (error.response && error.response.status === 429) {
                            // If the error is due to rate limiting, wait for a few seconds and retry
                            await wait(2000); // You can adjust the delay time as needed
                            return fetchData(); // Retry the request
                        } else {
                            console.error(
                                `Error fetching data for product ${value}:`,
                                error
                            );
                        }
                    }
                };
                this.productsInCart.forEach(async (value, index) => {
                    const tmpProduct = await fetchData(value);
                    this.productsInCart[index].name = tmpProduct?.name;
                    this.productsInCart[index].stock = tmpProduct?.stock;
                    this.productsInCart[index].image_path = tmpProduct?.image_path;
                    this.productsInCart[index].price = tmpProduct?.price;
                    // await wait(20000); // You can adjust the delay time as needed
                    // try {
                    //     await fetchData(value, index);
                    //     // const tmpProduct = await productApi.getProductForCate(
                    //     //     value.id
                    //     // );
                    //     // this.productsInCart[index].name = tmpProduct?.name;
                    //     // this.productsInCart[index].price = tmpProduct?.price;
                    // } catch (error) {
                    //     if (error.response && error.response.status === 429) {
                    //         // If the error is due to rate limiting, wait for a few seconds and retry
                    //         await wait(2000); // You can adjust the delay time as needed
                    //         return this.getProductsInCart(); // Retry the request
                    //     } else {
                    //         console.error(
                    //             'Error fetching product data for ID:',
                    //             value.id
                    //         );
                    //     }
                    // }
                    // await this.$nextTick(); // Update Vue component after each API call
                });
            },
            toggleSearch() {
                if (this.searchInput === '') {
                    $('#searchBar').toggle('display: inline-block');
                } else {
                    //perform search here
                }
            },
            async togglePopup() {
                if (localStorage.productsInCart) {
                    await this.getProductsInCart();
                    this.$store.commit('setCartData', this.productsInCart);
                }
                
                this.showPopup = !this.showPopup;
            },
            closePopup() {
                this.showPopup = false;
            },
            routeToCheckout() {
                this.showPopup = false;
                this.$router.push({ name: 'customer-info' });
            },
            routeToCart() {
                this.showPopup = false;
                this.$router.push({ name: 'cart' });
            },
            // getCategories() {
            //     // Retrieve products using an API request
            //     // Set this.products with the retrieved data
            //     axios
            //         .get('http://127.0.0.1:8000/api/categories/')
            //         .then((response) => {
            //             this.categories = response.data;
            //         })
            //         .catch((error) => {
            //             console.error(error);
            //         });
            // },
        },
        props: {
            categories: {
                type: Object,
                required: true,
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
                    <li
                        class="nav-item"
                        v-for="cate in categories"
                        :key="cate.id">
                        <router-link
                            :to="'/products/' + cate?.name"
                            class="nav-link"
                            >{{ cate?.name }}</router-link
                        >
                    </li>
                </ul>
                <div class="d-flex align-items-center">
                    <input
                        style="display: none"
                        id="searchBar"
                        name="search"
                        type="search"
                        v-model="searchInput"
                        placeholder="Search&hellip;" />
                    <i
                        class="bi bi-search mx-2 icon ion-ios-search me-3"
                        id="toggle-search"
                        @click="toggleSearch"
                        type="button"></i>

                    <button
                        class="btn"
                        @click="togglePopup"
                        type="button">
                        <i class="bi bi-cart3 me-2"></i>Cart
                    </button>
                </div>
                <!-- <div class="search-box">
                    <i class="uil uil-search search-icon"></i>
                    <input
                        type="text"
                        v-model="searchTerm"
                        placeholder="Search here..." />
                </div> -->
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
                <div
                    style="height: 20rem"
                    class=" overflow-auto">
                    <div
                        v-if="productsInCart.length"
                        class="bg-info rounded-3 mb-3 p-2"
                        v-for="product in productsInCart"
                        :key="product.id">
                        <div>{{ product?.name }}</div>
                        <div>
                            Qty:{{ product?.qty }} - ${{
                                (product?.qty * product?.price).toFixed(2)
                            }}
                        </div>
                    </div>
                    <div v-else>Your Cart is Empty</div>
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
    #searchBar {
        background-color: #ffffff;
        border: none;
        color: rgb(0, 0, 0);
        font-size: 12pt;
        font-weight: 100;
        margin-right: 10px;
        padding: 0.25em 0.75em;
        max-width: 130px;
        text-align: right;
        -webkit-border-radius: 28px;
        -moz-border-radius: 28px;
        border-radius: 28px;
    }
</style>
