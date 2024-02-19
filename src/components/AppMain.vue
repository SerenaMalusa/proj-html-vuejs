<script>
    export default {
        
    }
</script>

<template>
    <section class="debug" id="hero">

        <figure>
            <img src="../assets/img/rev-slider-main-home-img-03.jpg" alt="#">
        </figure>
        
        <div class="wrapper">

            <div class="slider-arrows">
                <div class="arrow"></div>
                <div class="arrow"></div>
            </div>

            <div class="wrapper small debug"></div>

        </div>
    </section>
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    #hero {        
        height: calc(100vh - $header-h);

        position: relative;
        top: calc(-1 * $header-h);
        z-index: 0;

        figure {
            width: 100%;
            height: 100%; 

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

</style>