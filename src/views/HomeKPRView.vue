<script setup>

import NavBar from '../components/NavBar.vue'
import itemPH from '../components/itemPhone.vue'
import itemPC from '../components/itemPC.vue'
import Footer from '../components/Footer.vue'

</script>

<template>
  <main>
    
    <NavBar />
    <!-- <heroTitle /> -->
    <div
        class="heroTitle p-md-2 mx-md-3 rounded-4 d-flex ps-5 pb-5"
        style="height: 550px;"
        id="heroCover"
    >
    
        <div class="content d-flex flex-column gap-2 align-self-end ps-5 pb-5">
            <h1>Techtopia Hub</h1>
            <p
                class="fs-5"
                style="width: 42%"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure
                distinctio deleniti dicta eum molestiae!
            </p>
            <div>
                <button class="btn px-4 rounded-3">Learn More</button>
            </div>
        </div>
    </div>

    <p class="text-center p-4">dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu
        <br> ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae
    </p>

    <div class="items">
      <div class="d-flex flex-wrap justify-content-evenly px-3">
        <itemPH />
        <itemPH />
        <itemPH />
        <itemPH />

        <itemPC />
        <itemPC />
        <itemPC />
        <itemPC />
      </div>
    </div>

    <Footer />
  </main>
</template>

<style scoped>
@import url('../assets/style.css');
</style>
