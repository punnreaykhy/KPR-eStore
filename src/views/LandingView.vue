
<template>
    <main>
        <!-- <heroBanner /> -->
        <div
            class="heroBanner p-md-2 mx-md-3 rounded-4 overflow-hidden d-flex ps-5 pb-5 flex-column justify-content-center text-center p-3"
            style="height: 780px"
            id="heroCover">
            <div
                class="content d-flex flex-column gap-2 text-white align-items-center">
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
            Limited Time Offer - up to 15% Off Your Purchase on
            Pick-up!
        </h2>

        <div class="mapouter w-75 m-auto mb-4">
            <div class="gmap_canvas">
                <iframe
                    class="gmap_iframe"
                    width="100%"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=612&amp;height=400&amp;hl=en&amp;q=institute of technology of cambodia&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe
                ><a href="https://connectionsgame.org/">Connections NYT</a>
            </div>
        </div>

        <div
            class="social mb-3 d-flex flex-column text-center w-100 bg-white p-4">
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

        
    </main>
</template>

<style scoped>
    .heroBanner {
        background-repeat: no-repeat;

        background-position: center;
        background-image: url('../assets/darkBanner.svg');
    }

    .social div div {
        width: 100px;
        height: 101px;
        background-size: 100% auto;
    }
    #ig {
        background-image: url('../assets/social_Icon/ig.svg');
    }
    #fb {
        background-image: url('../assets/social_Icon/fb.svg');
    }
    #red {
        background-image: url('../assets/social_Icon/red.svg');
    }
    #tw {
        background-image: url('../assets/social_Icon/twiter.svg');
    }
    #yt {
        background-image: url('../assets/social_Icon/yt.svg');
    }

    .mapouter {
        position: relative;
        text-align: right;
        width: 100%;
        height: 400px;
    }
    .gmap_canvas {
        overflow: hidden;
        background: none !important;
        width: 100%;
        height: 400px;
    }
    .gmap_iframe {
        height: 400px !important;
    }
</style>
