<script>
    import productApi from '../libs/api/product';
    export default {
        // components: { Button },
        data() {
            return {
                product: null,
                pImages: [],
                relatedProducts: [],
                // category: null,
                count: 0,
            };
        },
        watch: {
            count(newValue) {
                // Check if the input is empty or not a number
                if (isNaN(newValue) || newValue === '') {
                    this.count = 0; // Set the input value to 0
                } else if (newValue > this.product.stock) {
                    this.count = this.product.stock; // Limit the value to 4 if it goes beyond.
                }
            },
        },
        methods: {
            increaseValue() {
                const stock = this.product.stock;
                if (this.count < stock) {
                    this.count++;
                }

                // var value = parseInt(
                //     document.getElementById('number').value,
                //     10
                // );
                // value = isNaN(value) ? 0 : value;
                // value++;
                // document.getElementById('number').value = value;
            },

            decreaseValue() {
                if (this.count > 0) {
                    this.count--;
                }

                // var value = parseInt(
                //     document.getElementById('number').value,
                //     10
                // );
                // value = isNaN(value) ? 0 : value;
                // value < 1 ? (value = 1) : '';
                // value--;
                // document.getElementById('number').value = value;
            },
            routeTo() {
                this.$router.push('/cart');
            },
            routeToProduct(id) {
                this.$router.push('/product/' + id);
                // location.reload();
            },

            async fetchProductById(productId) {
                try {
                    this.product = await productApi.getProduct(productId);
                    console.log(this.product);
                } catch (error) {
                    // Handle any errors that occurred during the async operations.
                    console.error('Error:', error);
                }
            },
            async adjustProduct() {
                this.pImages = this.product?.imagesPath;
                console.log(this.product?.imagesPath);
                console.log(this.product?.category_name);
                const allProducts = await productApi.getByCate(
                    this.product?.category_name
                );
                this.relatedProducts = allProducts.slice(0, 6);
            },
        },

        async mounted() {
            try {
                // Call fetchProductById and wait for it to resolve
                await this.fetchProductById(this.$route.params.id);
                console.log(1);

                // Now that fetchProductById is resolved, call adjustProduct
                await this.adjustProduct();

            } catch (error) {
                console.error('Error in mounted:', error);
            }
        },
    };
</script>

<template>
    <main>
        <div class="route-link d-flex gap-2 m-4">
            <a href="/">Home</a>>
            <router-link to="/products">All Products</router-link>>
            <router-link :to="'/products/' + product?.category_name">{{
                product?.category_name
            }}</router-link>
        </div>

        <div class="product bg-white mx-4 p-4">
            <div class="d-flex gap-3">
                <!-- <img
                :src="productImgURL+product?.image_path"
                    class="p-img border"
                    style="width: 500px; height: 500px"> -->
                <div
                    id="carouselExampleControls"
                    class="carousel slide p-img border"
                    data-bs-ride="carousel"
                    style="width: 500px; height: 500px">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img
                                :src="this.$store.state.productImgURL + product?.image_path"
                                class="d-block w-100"
                                alt="..." />
                        </div>
                        <div
                            class="carousel-item"
                            v-for="pImg in pImages"
                            :key="pImg.id">
                            <img
                                :src="this.$store.state.productImgURL + pImg.image_path"
                                class="d-block w-100"
                                alt="..." />
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span
                            class="carousel-control-prev-icon bg-info rounded"
                            aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span
                            class="carousel-control-next-icon bg-info rounded"
                            aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="p-detail w-50 d-flex flex-column h-100">
                    <div
                        v-if="product?.stock > 0"
                        class="text-success">
                        In stock
                    </div>
                    <div
                        v-else
                        class="text-danger">
                        Out of stock
                    </div>
                    <h4>{{ product?.name }}</h4>

                    <div class="detail">
                        <hr />
                        <h4>Description:</h4>
                        <div class="d-flex gap-5">
                            {{ product?.description }}
                        </div>

                        <hr />
                    </div>

                    <div
                        class="d-flex align-items-end"
                        style="width: fit-content; height: 300px">
                        <div class="d-flex">
                            <div
                                class="value-button d-flex justify-content-center align-items-center"
                                id="decrease"
                                @click="decreaseValue"
                                value="Decrease Value">
                                -
                            </div>
                            <input
                                type="number"
                                id="number"
                                v-model="count" />
                            <div
                                class="value-button d-flex justify-content-center align-items-center"
                                id="increase"
                                @click="increaseValue">
                                +
                            </div>
                            <button @click="routeTo">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex mt-3 gap-3">
                <img
                    :src="this.$store.state.productImgURL + product?.image_path"
                    class="sub-img" />
                <img
                    v-for="pImg in pImages"
                    :key="pImg.id"
                    :src="this.$store.state.productImgURL + pImg.image_path"
                    class="sub-img" />
            </div>

            <div class="related-p p-2 border m-3">
                <h4>Related products</h4>
                <div class="d-flex gap-2 justify-content-around">
                    <div
                        type="button"
                        @click="
                            fetchProductById(product.id),
                                routeToProduct(product.id)
                        "
                        class="card p-3 text-dark text-decoration-none hover-zoom"
                        v-for="product in relatedProducts"
                        :key="product.id">
                        <img
                            :src="this.$store.state.productImgURL + product?.image_path"
                            class="relate-p-img" />
                        <h5 class="mt-2">{{ product.name }}</h5>
                        <span>{{ product.price }}</span>
                    </div>
                    <!-- <div class="card p-3">
                        <div class="relate-p-img"></div>
                        <h5 class="mt-2">Phone</h5>
                        <span>$234-$347</span>
                    </div> -->
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
    .card:hover {
        background-color: #eee;
    }
    .sub-img {
        width: 100px;
        height: 100px;
        border: solid 1px;
        border-radius: 1em;
    }

    .relate-p-img {
        width: 150px;
        height: 150px;
        border: solid 1px;
        border-radius: 1em;
    }
    .dot {
        background: #000000;
        width: 5px;
        height: 5px;
        border-radius: 100%;
        margin-left: 8px;
    }

    .value-button {
        display: inline-block;
        border: 1px solid #ddd;
        margin: 0px;
        width: 40px;
        height: 40px;
        text-align: center;
        vertical-align: middle;
        background: #eee;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .value-button:hover {
        cursor: pointer;
    }

    form #decrease {
        margin-right: -4px;
        border-radius: 8px 0 0 8px;
    }

    form #increase {
        margin-left: -4px;
        border-radius: 0 8px 8px 0;
    }

    form #input-wrap {
        margin: 0px;
        padding: 0px;
    }

    input#number {
        text-align: center;
        border: none;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        margin: 0px;
        width: 40px;
        height: 40px;
    }

    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .detail div {
        justify-content: space-between;
        margin: 8px;
        align-items: start;
    }
    .detail div div {
        margin: 0;
        width: 75%;
    }
</style>
