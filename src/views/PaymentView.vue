<script>
    export default {
        // components: { Button },
        data() {
            return {
                date: '',
                cvv: '',
            };
        },
        computed: {
            products(){
                return this.$store.state.cartData
            },
            customerInfo(){
                return this.$store.state.customerInfo
            }
        },
        methods: {
            validateCVV() {
                // Remove non-digit characters from the input
                const sanitizedInput = this.cvv.replace(/\D/g, '');

                // Restrict input to maximum 3 digits
                this.cvv = sanitizedInput.substring(0, 3);
            },
            routeTo(event) {
                event.preventDefault();
                this.$router.push('/checkout/invoice');
            },
            formatDate() {
                // Remove non-digit characters from the input
                const sanitizedInput = this.date.replace(/\D/g, '');

                // Extract month and year
                const month = sanitizedInput.substring(0, 2);
                const year = sanitizedInput.substring(2, 4);

                // Concatenate the formatted date
                this.date = `${month}/${year}`;
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
            <form @submit="routeTo" class="d-flex">
                <div class="w-50">
                    <div class="d-flex gap-3 align-items-center">
                        <h2>Shipping Address</h2>
                        -
                        <div class="fs-5">{{customerInfo.house}} {{customerInfo.street}}, {{customerInfo.city}}, {{customerInfo.country}} {{customerInfo.postalCode}}</div>
                        <a href="javascript:history.back()" class="">Edit</a>
                    </div>
                    <div class="fs-4">Payment Method</div>
                    <div
                        class="d-flex flex-column gap-3"
                        id="form"
                    >
                        <input
                            type="number"
                            v-model="cardNum"
                            placeholder="Card Number"
                            required
                        />
                        <input
                            type="text"
                            v-model="cardName"
                            placeholder="Name on Card"
                            required
                        />
                        <div>
                            <input
                                type="text"
                                v-model="date"
                                @input="formatDate"
                                placeholder="MM/YY"
                                required
                            />
                            <input
                                type="text"
                                v-model="cvv"
                                @input="validateCVV"
                                placeholder="CVV"
                                required
                            />
                        </div>
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

                        <button class="p-2 rounded-4" type="submit">Complete Order</button>
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

    #form :nth-child(3) input {
        width: 50%;
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
