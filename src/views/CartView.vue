<script>
export default {
    // components: { Button },
    data() {
        return {
            productsInCart: [],
            onDelete: false,
            categories: [],
            productToDelete: null,
            total: 0,
            finalPrice: 0,
            cartData: []
        };
    },
    methods: {
        increaseValue(product) {
            if (product.stock > product.qty) {
                product.qty++;
                // this.updateTotal();
                this.updateQuantity(product);
            }
        },
        decreaseValue(product) {
            if (product.qty > 1) {
                product.qty--;
                // this.updateTotal();
                this.updateQuantity(product);
            }
        },
        showDeleteConfirmation(product) {
            this.onDelete = true;
            this.productToDelete = product;
        },
        async deleteProduct(product) {
            this.onDelete = true
            var productsInCart = await JSON.parse(
                localStorage.getItem('productsInCart')
            );


            productsInCart = productsInCart.filter(item => item.id !== product.id);
            const index = this.cartData.findIndex((p) => p.id === product.id);

            // If the product is found, remove it from the array
            if (index !== -1) {
                this.cartData.splice(index, 1);
            }

            localStorage.setItem('productsInCart', JSON.stringify(productsInCart));

            this.onDelete = false;
            this.productToDelete = null;
        },

        cancelDelete() {
            this.onDelete = false;
            this.productToDelete = null;
        },

        onCheckout() {
            this.$router.push('checkout/customer-info');
        },
        updateQuantity(product) {
            const productInCart = this.productsInCart.find(p => p.id === product.id);
            if (productInCart) {
                productInCart.qty = product.qty;
                this.updateTotal();
                // Update local storage after changing the quantity
                localStorage.setItem('productsInCart', JSON.stringify(this.productsInCart));
            }
        },
        updateTotal() {
            this.total = this.cartData.reduce((total, product) => {
                return total + product.qty * product.price;
            }, 0);
            this.$store.commit('setTotalPrice', this.total);
            
        },
        getCartData() {
            this.cartData = this.$store.state.cartData;
        },
        

    },

    created() {
    // Load productsInCart from local storage
    this.productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
    this.updateTotal();
  },
    async mounted() {
        this.getCartData();
        

    },
    computed: {
        // cartData() {
        //     return this.$store.state.cartData;
        // },
        // subTotal() {
        //     // Loop through the cartData array and calculate the total price
        //     let total = 0;
        //     if (this.cartData) {
        //         for (const product of this.cartData) {
        //             total += parseFloat(product.price);
        //         }
        //     }

        //     return total.toFixed(2);
        // },
    },
    watch: {
        '$route.params': function () {
            this.getCartData();
        },
        cartData: {
            deep: true,
            handler(newCartData) {
                // Check and update the quantity for each product in cartData
                newCartData.forEach((product) => {
                    if (product.qty > product.stock) {
                        product.qty = product.stock;
                    }
                });

                // Calculate and update the total based on the updated quantities
                this.updateTotal();
            },
        },
    },
};
</script>

<template>
    <main style=" display: flex; flex-direction: column">
        <div class="bg-white p-5 mx-5 rounded-3" style="height: 36.5em">
            <!-- {{ this.$store.state.cartData }} -->
            <h2>Your Cart</h2>
            <div class="d-flex gap-5">
                <div class="items w-75 overflow-auto" style="height: 27em">
                    <div v-if="cartData.length > 0" v-for="product in cartData" :key="product.id" class="d-flex products align-items-center p-3">
                        <img :src="this.$store.state.apiURL +
                            product.image_path
                            " class="img border border-2 rounded-4" />
                        <div class="w-75 d-flex flex-column justify-content-between price pt-2 px-2">
                            <h5 class="">{{ product.name }}</h5>
                            <div class="d-flex gap-2">
                                <h5>{{ product.price }}</h5>
                                $
                            </div>
                        </div>
                        <div class="qty-del d-flex gap-2 justify-content-end">
                            <div class="qty d-flex rounded-3 overflow-hidden">
                                <div class="value-button d-flex justify-content-center align-items-center" id="decrease"
                                    @click="decreaseValue(product)" value="Decrease Value">
                                    -
                                </div>
                                <input type="number" id="number" :value="product.qty" readonly />
                                <div class="value-button d-flex justify-content-center align-items-center" id="increase"
                                    @click="increaseValue(product)" value="Increase Value">
                                    +
                                </div>
                            </div>
                            <div @click="showDeleteConfirmation(product)" id="del" class="rounded-3 btn"></div>
                        </div>
                    </div>
                    <div v-else class="text-danger">No Items In Cart Yet</div>

                    <!-- <div class="d-flex products align-items-center p-3">
                        <div class="img border border-2 rounded-4"></div>
                        <div
                            class="w-75 d-flex flex-column justify-content-between price pt-2 px-2"
                        >
                            <h5 class="">Mlasggjs</h5>
                            <div class="d-flex gap-2">
                                <h5>26.35</h5>
                                $
                            </div>
                        </div>
                        <div class="qty-del d-flex gap-2 justify-content-end">
                            <div class="qty d-flex rounded-3 overflow-hidden">
                                <div
                                    class="value-button d-flex justify-content-center align-items-center"
                                    id="decrease"
                                    @click="decreaseValue"
                                    value="Decrease Value"
                                >
                                    -
                                </div>
                                <input
                                    type="number"
                                    id="number"
                                    value="1"
                                />
                                <div
                                    class="value-button d-flex justify-content-center align-items-center"
                                    id="increase"
                                    @click="increaseValue"
                                    value="Increase Value"
                                >
                                    +
                                </div>
                            </div>
                            <div
                                id="del"
                                class="rounded-3"
                            ></div>
                        </div>
                    </div>
                    <div class="d-flex products align-items-center p-3">
                        <div class="img border border-2 rounded-4"></div>
                        <div
                            class="w-75 d-flex flex-column justify-content-between price pt-2 px-2"
                        >
                            <h5 class="">Mlasggjs</h5>
                            <div class="d-flex gap-2">
                                <h5>26.35</h5>
                                $
                            </div>
                        </div>
                        <div class="qty-del d-flex gap-2 justify-content-end">
                            <div class="qty d-flex rounded-3 overflow-hidden">
                                <div
                                    class="value-button d-flex justify-content-center align-items-center"
                                    id="decrease"
                                    @click="decreaseValue"
                                    value="Decrease Value"
                                >
                                    -
                                </div>
                                <input
                                    type="number"
                                    id="number"
                                    value="1"
                                />
                                <div
                                    class="value-button d-flex justify-content-center align-items-center"
                                    id="increase"
                                    @click="increaseValue"
                                    value="Increase Value"
                                >
                                    +
                                </div>
                            </div>
                            <div
                                id="del"
                                class="rounded-3"
                            ></div>
                        </div>
                    </div> -->
                </div>
                <div class="summary p-4 d-flex flex-column gap-4 rounded-4 border border-4"
                    style="width: 20em; height: 24em">
                    <h4>Summary ({{ cartData?.length }} items)</h4>

                    <div class="d-flex justify-content-between">
                        <span>Subtotal:</span>
                        <span>${{ total }}</span>
                    </div>

                    <div class="d-flex justify-content-between">
                        <span>Shipping:</span>
                        <span class="text-success">Free</span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span>Est. Taxes:</span>
                        <span>1%</span>
                    </div>

                    <div class="d-flex gap-2">
                        <h5>Total: {{ Number(total) + Number((total * this.$store.state.tax).toFixed(2)) }}</h5>
                        <!-- <h5>Total: {{ finalPrice }}</h5> -->
                        $
                    </div>

                    <button class="p-2 rounded-4" @click="onCheckout">
                        Checkout
                    </button>
                </div>
            </div>
            <div v-if="onDelete" class="delItemCon w-25 text-center bg-white p-4 rounded-4 shadow-lg position-absolute">
                <div class="fs-4 fw-bold">Delete from cart?</div>
                <div class="d-flex justify-content-around m-4">
                    <div @click="deleteProduct(productToDelete)" class=" bg-danger p-2 rounded text-white btn">Delete</div>
                    <div @click="cancelDelete" class=" bg-black p-2 rounded text-white btn">Cancel</div>
                </div>
            </div>
        </div>


    </main>
</template>

<style scoped>
.products .img,
.price {
    height: 7em;
    width: 7em;
}

.products:hover {
    background: #00000009;
    border-radius: 2em;
}

.value-button,
#del {
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

#del {
    background-size: 80% auto;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('../assets/del_icon.svg');
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

.delItemCon {
    top: 50%;
    /* Move the top edge of the div to the center of the parent container */
    left: 50%;
    /* Move the left edge of the div to the center of the parent container */
    transform: translate(-50%, -50%);
}

.btn:hover {
    text-shadow: 0 0 5px #0091ff;
}
</style>
