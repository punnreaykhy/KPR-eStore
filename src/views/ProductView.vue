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
            itemQty: 0,
            productsInCart: [],
        };
    },
    watch: {
        '$route.params.id': function () {
            this.fetchProduct();
        },
        count(newValue) {
            // Check if the input is empty or not a number
            if (isNaN(newValue) || newValue === '') {
                this.count = 0; // Set the input value to 0
                this.fetchProduct();
            } else if (newValue > this.itemQty) {
                this.count = this.itemQty; // Limit the value to 4 if it goes beyond.
                
            }
        },

    },
    // created() {
    //     // Load productsInCart from local storage
    //     this.productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];

    //     this.itemQty = () => {
    //         const desiredId = this.product.id;
    //         let foundObjectAt = null;
    //         // console.log(1);
    //         for (let i = 0; i < this.productsInCart.length; i++) {
    //             if (this.productsInCart[i].id === desiredId) {
    //                 foundObjectAt = i;
    //                 break; // Break the loop since we found the desired object
    //             }
    //         }

    //         if (foundObjectAt != null) {
    //             return this.product.stock - this.productsInCart[foundObjectAt].qty
    //         }
    //         return 0;
    //     }
    // },
    methods: {
        increaseValue() {
            const stock = this.itemQty;
            console.log(stock);
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

            } catch (error) {
                // Handle any errors that occurred during the async operations.
                console.error('Error:', error);
            }
        },
        async adjustProduct() {
            this.pImages = this.product?.imagesPath;
            // console.log(this.product?.imagesPath);
            // console.log(this.product?.category_name);
            const allProducts = await productApi.getByCate(
                this.product?.category_name
            );
            this.relatedProducts = allProducts.slice(0, 6);
        },
        async addToCart() {
            if (this.count > 0) {
                const desiredId = this.product.id;
                let foundObjectAt = null;

                for (let i = 0; i < this.productsInCart.length; i++) {
                    if (this.productsInCart[i].id === desiredId) {
                        foundObjectAt = i;
                        break; // Break the loop since we found the desired object
                    }
                }

                if (foundObjectAt != null) {
                    if (this.product.stock > this.productsInCart[foundObjectAt].qty) {
                        this.productsInCart[foundObjectAt].qty = this.count
                    }
                    this.saveProductsInCart();
                } else {
                    const productToCart = { id: this.product.id, qty: this.count };
                    this.productsInCart.push(productToCart);
                    this.saveProductsInCart();
                    console.log('Object not found.');
                }
                // const productToCart = { id: this.product.id, qty: this.count };
                //     this.productsInCart.push(productToCart);
                //     this.saveProductsInCart();
                // Perform your desired action for the child button here

                //   localStorage.productsInCart = productToCart;
                //   const parsed = JSON.stringify(productToCart);
                //   localStorage.setItem('productsInCart', parsed);

                alert('Added to cart!');
                console.log('Added to cart!');
                await this.fetchProduct();
            }

        },
        saveProductsInCart() {
            const parsed = JSON.stringify(this.productsInCart);
            localStorage.setItem('productsInCart', parsed);
            this.$store.commit('setCartData', this.productsInCart);
        },

        getQtyProduct() {
            const desiredId = this.product.id;
            let foundObjectAt = null;
            // console.log(1);
            for (let i = 0; i < this.productsInCart.length; i++) {
                console.log(1);
                if (this.productsInCart[i].id === desiredId) {
                    foundObjectAt = i;
                    break; // Break the loop since we found the desired object
                }
            }

            if (foundObjectAt != null) {
                this.itemQty = this.product.stock - this.productsInCart[foundObjectAt].qty
            }else {
                this.itemQty = this.product.stock
            }
        },

        async fetchProduct() {
            this.count = 0
            await this.fetchProductById(this.$route.params.id);

            // Now that fetchProductById is resolved, call adjustProduct
            await this.adjustProduct();
            this.getQtyProduct();
            // try {
            //     // Call fetchProductById and wait for it to resolve
            //     await this.fetchProductById(this.$route.params.id);

            //     // Now that fetchProductById is resolved, call adjustProduct
            //     await this.adjustProduct();
            //     this.getQtyProduct();



            // } catch (error) {
            //     console.error('Error in mounted:', error);
            // }

            this.productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];

            // this.itemQty = () => {
            //     const desiredId = this.product.id;
            //     let foundObjectAt = null;
            //     // console.log(1);
            //     for (let i = 0; i < this.productsInCart.length; i++) {
            //         if (this.productsInCart[i].id === desiredId) {
            //             foundObjectAt = i;
            //             break; // Break the loop since we found the desired object
            //         }
            //     }

            //     if (foundObjectAt != null) {
            //         return this.product.stock - this.productsInCart[foundObjectAt].qty
            //     }
            //     return 0;
            // }
        }
    },

    async mounted() {
        await this.fetchProduct()
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
                :src="apiURL+product?.image_path"
                    class="p-img border"
                    style="width: 500px; height: 500px"> -->
                <div id="carouselExampleControls" class="carousel slide p-img border" data-bs-ride="carousel"
                    style="width: 500px; height: 500px">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img :src="this.$store.state.apiURL + product?.image_path" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item" v-for="pImg in pImages" :key="pImg.id">
                            <img :src="this.$store.state.apiURL + pImg.image_path" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bg-info rounded" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon bg-info rounded" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="p-detail w-50 d-flex flex-column h-100">
                    <div v-if="product?.stock > 0" class="text-success">
                        In stock
                    </div>
                    <div v-else class="text-danger">
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

                    <div class="d-flex align-items-end" style="width: fit-content; height: 300px">
                        <div class="d-flex">
                            <div class="value-button d-flex justify-content-center align-items-center" id="decrease"
                                @click="decreaseValue" value="Decrease Value">
                                -
                            </div>
                            <input type="number" id="number" v-model="count" />
                            <div class="value-button d-flex justify-content-center align-items-center" id="increase"
                                @click="increaseValue">
                                +
                            </div>
                            <button @click="addToCart">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex mt-3 gap-3">
                <img :src="this.$store.state.apiURL + product?.image_path" class="sub-img" />
                <img v-for="pImg in pImages" :key="pImg.id" :src="this.$store.state.apiURL + pImg.image_path"
                    class="sub-img" />
            </div>

            <div class="related-p p-2 border m-3">
                <h4>Related products</h4>
                <div class="d-flex gap-2 justify-content-around">
                    <div type="button" @click="
                        fetchProductById(product.id),
                        routeToProduct(product.id)
                        " class="card p-3 text-dark text-decoration-none hover-zoom" v-for="product in relatedProducts"
                        :key="product.id">
                        <img :src="this.$store.state.apiURL + product?.image_path" class="relate-p-img" />
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
