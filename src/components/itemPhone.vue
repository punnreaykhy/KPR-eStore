<script>
export default {
    data(){
        return{
            productImgURL: "http://127.0.0.1:8000/api"
        }
    },
  methods: {
    parentBtnClick() {
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
    this.$router.push("product/"+this.product.id);
    },
    childBtnClick() {
      // Perform your desired action for the child button here
      console.log('Child button clicked!');
    }
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<template>
    <div class="item" type="button" @click="parentBtnClick">
        <!-- {{product.id}} -->
        <div class="d-flex justify-content-center align-items-center w-100 p-3" style="height:18.6rem;">
            <img
                :src="productImgURL+product.image_path"
                alt="phone"
                class="w-100 h-100"
            />
        </div>
        <hr />
        <div class="d-flex h-25">
            <div class="itemInfo px-2" style="width:62%">
                <div class="col1 d-flex flex-column gap-2 p-1">
                    <h4 class=" text-danger">${{product.price}}</h4>
                    
                    <p class=" fw-bold">{{product.name}}</p>
                    <div>{{product.description}}</div>
                    
                </div>
            </div>

            <div class="col2 d-flex justify-content-end">
                <i type="button" @click.stop="childBtnClick" class="bi bi-cart3 me-2 border px-2 py-1 rounded"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('../assets/style.css');
    .bi-cart3:hover {
        background: #01a9bb;
    }
</style>