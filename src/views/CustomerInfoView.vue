
<script>
    export default {
        // components: { Button },
        data() {
            return {
                categories: [],
                products: [],
                info: {
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    street: '',
                    house: '',
                    city: '',
                    postalCode: '',
                    country: '',
                }
            };
        },
        created() {
            this.products = this.$store.state.cartData
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
            routeTo(event){
                event.preventDefault();
                this.$store.commit('setCustomerInfo', this.info); //add to state
                this.$router.push('/checkout/payment');
            },
        },
        async mounted() {},
    };
</script>

<template>
    <main style="min-height: 100vh; display: flex; flex-direction: column">
        
        <div class="mx-5 fs-3 fw-bold">
            Checkout
        </div>
        <div
            class="bg-white p-5 mx-5 rounded-3"
            style="height: 36.5em"
        >
            
            <form class="d-flex" @submit="routeTo">
                <div class="w-50">
                  <h2>Customer Information</h2>
                    <div
                        class="d-flex flex-column gap-3"
                        id="form"
                    >
                        <div>
                            <input
                                type="text"
                                v-model="info.firstName"
                                placeholder="First Name"
                                required
                            />
                            <input
                                type="text"
                                v-model="info.lastName"
                                placeholder="Last Name"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                v-model="info.phone"
                                placeholder="Phone"
                                required
                            />
                            <input
                                type="email"
                                v-model="info.email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                v-model="info.street"
                                placeholder="Street"
                                required
                            />
                            <input
                                type="text"
                                v-model="info.house"
                                placeholder="House"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                v-model="info.city"
                                placeholder="City"
                                required
                            />
                            <input
                                type="text"
                                v-model="info.postalCode"
                                placeholder="Postal Code"
                                required
                            />
                        </div>

                        <input
                            type="text"
                            v-model="info.country"
                            placeholder="Country"
                            required
                        />
                    </div>
                </div>
                <div class="w-50 d-flex justify-content-center">
                    <div
                        class="summary p-4 d-flex flex-column gap-4 rounded-4 border border-4"
                        style="width: 28em; height: 30em"
                    >
                        <h4>Summary ({{ this.products.length }} items)</h4>

                        <div
                            class="overflow-auto"
                            style="height: 14em"
                        >
                            <div
                                v-for="p in products" :key="p.id"
                                class="d-flex align-items-center border border-1"
                            >
                                <div
                                    class="w-75 d-flex flex-column justify-content-between pt-2 px-2"
                                >
                                    <h5 class="">{{p.name}}</h5>
                                    <div class="d-flex gap-2">
                                        <h5>{{p.price}}</h5>
                                        $
                                    </div>
                                </div>
                                <div
                                    class="qty-del d-flex gap-2 justify-content-end"
                                >
                                    <div
                                        class="qty d-flex rounded-3 overflow-hidden"
                                    >
                                        <div class="border border-2 p-3">x{{p.qty}}</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="d-flex justify-content-between"><h5>Total</h5><div class="d-flex"><h5>{{ Number(this.$store.state.totalPrice) + Number((this.$store.state.totalPrice * this.$store.state.tax).toFixed(2)) }}</h5>$</div></div>

                        <button class="p-2 rounded-4" type="submit">Continue to Shipping Method</button>
                    </div>
                </div>
            </form>
        </div>
        
    </main>
</template>

<style scoped>
    #form div {
        display: flex;
        gap: 1em;
    }
    #form :nth-child(1) input,
    #form :nth-child(2) input {
        width: 50%;
    }
    #form :nth-child(3) :first-child,
    #form :nth-child(4) :first-child {
        width: 70%;
    }
    #form input {
        border-radius: 10px;
        padding: 10px;
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
