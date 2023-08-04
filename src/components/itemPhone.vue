<script>
    export default {
        data() {
            return {
                productsInCart: [],
            };
        },
        methods: {
            viewProduct() {
                // Perform your desired action for the parent button here

                //   this.$router.push({
                //     name: "product/"+this.product.id,
                //     // params: {
                //     //     productId: this.product.id
                //     // }
                //     // query: {
                //     //     categoryId: this.product.category_id,
                //     //     productId: this.product.id
                //     // }
                //     });
                this.$router.push('/product/' + this.product.id);
            },
            addToCart() {
                if (localStorage.getItem('productsInCart')) {
                    try {
                        this.productsInCart = JSON.parse(
                            localStorage.getItem('productsInCart')
                        );
                    } catch (e) {
                        localStorage.removeItem('productsInCart');
                    }
                } else {
                    localStorage.setItem('productsInCart', []);
                }

                const desiredId = this.product.id;
                let foundObjectAt = null;

                for (let i = 0; i < this.productsInCart.length; i++) {
                    if (this.productsInCart[i].id === desiredId) {
                        foundObjectAt = i;
                        console.log(i);
                        break; // Break the loop since we found the desired object
                    }
                }

                if (foundObjectAt!=null) {
                    if(this.product.stock>this.productsInCart[foundObjectAt].qty){
                        this.productsInCart[foundObjectAt].qty++ 
                    }
                    
                    console.log(this.productsInCart[foundObjectAt]);
                    this.saveProductsInCart();
                } else {
                    const productToCart = { id: this.product.id, qty: 1 };
                    this.productsInCart.push(productToCart);
                    this.saveProductsInCart();
                    console.log('Object not found.');
                }
                // Perform your desired action for the child button here
                
                //   localStorage.productsInCart = productToCart;
                //   const parsed = JSON.stringify(productToCart);
                //   localStorage.setItem('productsInCart', parsed);
                // console.log(this.productsInCart);
                alert('Added to cart!');
                console.log('Added to cart!');
            },
            saveProductsInCart() {
                const parsed = JSON.stringify(this.productsInCart);
                localStorage.setItem('productsInCart', parsed);
                this.$store.commit('setCartData', this.productsInCart);
            },
        },
        props: {
            product: {
                type: Object,
                required: true,
            },
        },
        mounted() {},
    };
</script>

<template>
    <div
        class="item"
        type="button"
        @click="viewProduct">
        
        <!-- {{product.id}} -->
        <div
            class="d-flex justify-content-center align-items-center w-100 p-3"
            style="height: 18.6rem">
            <img
                :src="this.$store.state.apiURL + product.image_path"
                alt="phone"
                class="w-100 h-100" />
        </div>
        <hr />
        <div class="d-flex h-25">
            <div
                class="itemInfo px-2"
                style="width: 62%">
                <div class="col1 d-flex flex-column gap-2 p-1">
                    <h4 class="text-danger">${{ product.price }}</h4>

                    <p class="fw-bold">{{ product.name }}</p>
                    <div>{{ product.description }}</div>
                </div>
            </div>

            <div class="col2 d-flex justify-content-end">
                <i
                    type="button"
                    @click.stop="addToCart"
                    class="bi bi-cart3 me-2 border px-2 py-1 rounded"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import url('../assets/style.css');
    .bi-cart3:hover {
        background: #01a9bb;
    }
    .item:hover {
        border: 3px solid #01a9bb;
    }
</style>
