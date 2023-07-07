<script>
export default {
  methods: {
    parentBtnClick() {
      // Perform your desired action for the parent button here
      this.$router.push({ name: "product" });
    },
    childBtnClick() {
      // Perform your desired action for the child button here
      console.log('Child button clicked!');
    }
  }
};
</script>

<template>
    <div class="item" type="button" @click="parentBtnClick">
        <div class="d-flex align-items-center justify-content-center">
            <img
                src="../assets/image22.png"
                alt="phone"
                class="h-100 my-4"
            />
        </div>
        <hr />
        <div class="d-flex">
            <div class="itemInfo px-2">
                <div class="col1 d-flex flex-column gap-2 p-1">
                    <h4>$99.50</h4>
                    <div>
                        <div class="stared">
                            <i class="bi bi-star-fill"></i
                            ><i class="bi bi-star-fill"></i
                            ><i class="bi bi-star-fill"></i
                            ><i class="bi bi-star-fill"></i>
                        </div>
                        <i class="bi bi-star"></i>
                        <span class="ms-2 rated">7.5</span>
                    </div>
                    <p>iPhone12 (128GB)-(ZA)</p>
                    <p>Apple - Navy Blue</p>
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