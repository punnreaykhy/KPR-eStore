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
            routeTo() {
                this.$router.push('/cart');
            },
        },
        async mounted() {},
    };
</script>

<template>
    <main>
        <NavBar />

        <div class="route-link d-flex gap-2 m-4">
            <a href="/">Home</a>
            <a href="#">Category</a>
            <a href="#">Product</a>
        </div>

        <div class="product bg-white mx-4 p-4">
            <div class="d-flex gap-3">
                <div
                    class="p-img border"
                    style="width: 500px; height: 500px"
                ></div>
                <div class="p-detail w-50">
                    <div class="text-success">In stock</div>
                    <h4>MacBook Air Case 2022 with Touch ID Air 13.6 Cover</h4>
                    <div class="d-flex align-items-center">
                        <div class="stared">
                            <i class="bi bi-star-fill"></i
                            ><i class="bi bi-star-fill"></i
                            ><i class="bi bi-star-fill"></i
                            ><i class="bi bi-star-fill"></i>
                        </div>
                        <i class="bi bi-star"></i>
                        <span class="ms-2 rated">7.5</span>
                        <div class="dot"></div>
                        <span class="ms-2">154 orders</span>
                        <div class="dot"></div>
                        <span class="ms-2 text-success">Free Shipping</span>
                    </div>
                    <div
                        class="bg-info py-2 my-3 d-flex text-center justify-content-around"
                    >
                        <div>
                            <h5>$99</h5>
                            <span>50-100 pcs</span>
                        </div>
                        <div
                            class="bg-black my-2"
                            style="width: 1px"
                        ></div>
                        <div>
                            <h5>$99</h5>
                            <span>50-100 pcs</span>
                        </div>
                        <div
                            class="bg-black my-2"
                            style="width: 1px"
                        ></div>
                        <div>
                            <h5>$99</h5>
                            <span>50-100 pcs</span>
                        </div>
                    </div>
                    <div class="detail">
                        <div class="d-flex gap-5">
                            <label for="price">Price:</label>
                            <div>Negotiable</div>
                        </div>
                        <hr />
                        <div class="d-flex gap-5">
                            <label for="type">Type:</label>
                            <div>Case</div>
                        </div>
                        <div class="d-flex gap-5">
                            <label for="material">Material:</label>
                            <div>Plastic material</div>
                        </div>
                        <div class="d-flex gap-5">
                            <label for="design">Design:</label>
                            <div>Modern</div>
                        </div>
                        <hr />
                        <div class="d-flex gap-5">
                            <label for="customize">Customization:</label>
                            <div>Customized logo and design custom packages</div>
                        </div>
                        <div class="d-flex gap-5">
                            <label for="protection">Protection:</label>
                            <div>Refund Policy</div>
                        </div>
                        <div class="d-flex gap-5">
                            <label for="warrenty">Warranty:</label>
                            <div>2 years full warranty</div>
                        </div>
                        <hr />
                    </div>

                    <div class="d-flex border rounded-3 overflow-hidden " style="width:fit-content">
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
                            value="0"
                        />
                        <div
                            class="value-button d-flex justify-content-center align-items-center"
                            id="increase"
                            @click="increaseValue"
                            value="Increase Value"
                        >
                            +
                        </div>
                        <button @click="routeTo">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div class="d-flex mt-3">
                <div class="sub-img"></div>
            </div>

            <div class="related-p p-2 border m-3">
                <h4>Related products</h4>
                <div class="d-flex gap-2">
                    <div class="card p-3">
                        <div class="relate-p-img"></div>
                        <h5 class="mt-2">Phone</h5>
                        <span>$234-$347</span>
                    </div>
                    <div class="card p-3">
                        <div class="relate-p-img"></div>
                        <h5 class="mt-2">Phone</h5>
                        <span>$234-$347</span>
                    </div>
                </div>
                
            </div>
        </div>

        <Footer />
    </main>
</template>

<style scoped>

    .sub-img{
        width: 100px;
        height: 100px;
        border: solid 1px;
        border-radius: 1em;
    }

    .relate-p-img{
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

    .detail div{
        justify-content: space-between;
        margin: 8px;
        align-items: start;
    }
    .detail div div{
        margin:0;
        width:75%;
        
    }
</style>
