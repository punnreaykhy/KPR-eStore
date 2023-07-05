<script setup>
    import NavBar from '../components/NavBar.vue';
    import Footer from '../components/Footer.vue';
</script>

<template>
    <main>
        <NavBar />
        <!-- <heroBanner /> -->
        <div
            class="heroBanner p-md-2 mx-md-3 rounded-4 d-flex ps-5 pb-5 flex-column justify-content-center text-center p-3"
            style="height: 780px"
            id="heroCover"
        >
            <div
                class="content d-flex flex-column gap-2 text-white align-items-center"
            >
                <h1 class="w-75">
                    Welcome to KPR Revolutionizing Electronic Store
                </h1>
                <p class="fs-5 w-75">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    dolore ma. Aliquet bibendum enim facili neque convallis,
                    consectetur adipiscing elit.
                </p>
                <div>
                    <button class="btn rounded-3">Learn More</button>
                </div>
            </div>
        </div>

        <h2 class="text-center p-4">
            Limited Time Offer - up to 70% Off Your Purchase!
        </h2>

        <div class="d-flex px-3 mb-4 gap-4 justify-content-around bg-white m-auto rounded-2 p-3" style="width:90%;">
            <img
                src=""
                alt=""
                class="border border-5 border-danger align-self-center"
                style="height:10rem; width:10rem"
            />
            <div class="w-75">
                <h4>GoPro HERO6 4K Action Camera - Black</h4>
                <h3>$923</h3>
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
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit </p>
                <div class=" text-primary">View details</div>
            </div>
            <div>
              <i type="button" class="bi bi-cart3 me-2 border px-2 py-1 rounded"></i>
            </div>
        </div>

        <div class="social mb-3 d-flex flex-column text-center w-100 bg-white p-4">
          <h3>Stay connected</h3>
          <div class="d-flex gap-4 m-auto">
            <div id="ig"></div>
            <div id="fb"></div>
            <div id="red"></div>
            <div id="tw"></div>
            <div id="yt"></div>
          </div>
        </div>

        <div class="dlApp d-flex w-100 justify-content-center gap-5 mb-3">
          <div id="ios"></div>
          <div id="ad"></div>
        </div>

        <Footer />
    </main>
</template>

<style scoped>
    @import url('../assets/style.css');
    .heroBanner {
        background-image: url('../assets/darkBanner.svg');
        background-repeat: no-repeat;
        background-size: 100% auto;
    }

    .social div div{
      width: 100px;
      height: 101px;
      background-size: 100% auto;
    }
    #ig{
      background-image: url('../assets/social_Icon/ig.svg');
    }
    #fb{
      background-image: url('../assets/social_Icon/fb.svg');
    }
    #red{
      background-image: url('../assets/social_Icon/red.svg');
    }
    #tw{
      background-image: url('../assets/social_Icon/twiter.svg');
    }
    #yt{
      background-image: url('../assets/social_Icon/yt.svg');
    }

    .dlApp div{
      width: 171px;
      height: 58px;
      background-size: 100% auto;
    }
    #ios{
      background-image: url('../assets/dl_app/ios.svg');
    }
    #ad{
      background-image: url('../assets/dl_app/ad.svg');
    }
    .dot {
        background: #000000;
        width: 5px;
        height: 5px;
        border-radius: 100%;
        margin-left: 8px;
    }
</style>
