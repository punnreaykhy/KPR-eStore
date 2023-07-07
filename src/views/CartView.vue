<script setup>
    import NavBar from '../components/NavBar.vue';
    import Footer from '../components/Footer.vue';
</script>
<script>
    export default {
        // components: { Button },
        data() {
            return {
                categories: [],
            };
        },
        methods: {
            increaseValue() {
                var value = parseInt(
                    document.getElementById('number').value,
                    10
                );
                value = isNaN(value) ? 0 : value;
                value++;
                document.getElementById('number').value = value;
            },

            decreaseValue() {
                var value = parseInt(
                    document.getElementById('number').value,
                    10
                );
                value = isNaN(value) ? 0 : value;
                value < 1 ? (value = 1) : '';
                value--;
                document.getElementById('number').value = value;
            },

            onCheckout(){
                this.$router.push('checkout/customer-info');
            }
        },
        async mounted() {},
    };
</script>

<template>
    <main style="
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    ">
        <NavBar />
        <div
            class="bg-white p-5 mx-5 rounded-3"
            style="height: 36.5em"
        >
            <h2>Your Cart</h2>
            <div class="d-flex gap-5">
                <div class="items w-75 overflow-auto" style="height: 27em">
                    
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
                    </div>

                    
                </div>
                <div
                    class="summary p-4 d-flex flex-column gap-4 rounded-4 border border-4"
                    style="width: 20em; height: 24em"
                >
                    <h4>Summary (3 items)</h4>

                    <div class="d-flex justify-content-between">
                        <span>Subtotal:</span>
                        <span>$26.35</span>
                    </div>

                    <div class="d-flex justify-content-between">
                        <span>Shipping:</span>
                        <span>$26.35</span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span>Est. Taxes:</span>
                        <span>$26.35</span>
                    </div>

                    <div class="d-flex gap-2">
                        <h5>Total: 26.35</h5>
                        $
                    </div>

                    <button class="p-2 rounded-4" @click="onCheckout">Checkout</button>
                </div>
            </div>
        </div>
        <Footer />
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
        background-image: url('./src/assets/del_icon.svg');
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
</style>
