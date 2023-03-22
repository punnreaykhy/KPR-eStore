<template>
    <header class="sticky-top">
        <nav class="myNav navbar navbar-dark navbar-expand-lg p-3">
            <a class="navbar-brand d-flex me-5" href="#">
                <img src="../assets/kprLogo.png" alt="myLogo" class="myLogo me-2">
                <div class="KPR fst-italic fw-bold fs-4">KPR</div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
                <ul class="navbar-nav ms-5 me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">Category 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">Category 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">Category 3</a>
                    </li>
                </ul>
                <div>
                    <i class="bi bi-search mx-2" type="button"></i>
                    <button class="btn" type="button"><i class="bi bi-cart3 me-2"></i>Cart(0)</button>
                </div>
            </div>
        </nav>
    </header>
</template>


<style scoped>
.KPR, .collapse ul li a{
    color: #273672;
}
</style>