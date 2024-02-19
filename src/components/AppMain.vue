<script>
    export default {
        
    }
</script>

<template>
    <section id="hero">
        <figure>
            <img src="../assets/img/rev-slider-main-home-img-03.jpg" alt="#">
        </figure>
        
        <div class="container_l">

            <div class="slider-arrows">
                <img class="arrow arrow-right" src="../assets/svg/svg-6.svg" alt="right arrow">
                <img class="arrow arrow-left" src="../assets/svg/svg-6.svg" alt="left arrow">
            </div>

            <div class="container_s debug">

                <div class=" debug">
                    <h2 class="text-serif h1">Lorem</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, neque? Unde.</p>
                </div>

            </div>

        </div>
    </section>

    <section id="specialties">
        <div class="container_l debug">
            <div class="section-title text-center">
                <h2 class="text-serif h3 mb-0">Lorem</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, neque? Unde.</p>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    #hero {        
        height: 100vh;

        position: relative;
        top: calc(-1 * $header-h);
        z-index: 0;

        figure {
            width: 100%;
            height: 100%; 

            position: absolute;
            z-index: -1;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .container_l {
            height: 100%;
            position: relative;
            .arrow {
                filter: invert(100%);

                position: absolute;
                top: 50%;
                transform: translate(0, 50%);

                &.arrow-right {
                    left: 100%;
                }

                &.arrow-left {
                    transform: rotate(180deg);
                }
            }

            .container_s {
                height: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                div {
                    transform: translate(0, 2rem);
                }
            }
        }

    }

    #specialties {
            
            .container_l {
                background-color:#ffffff;
                position: relative;
                top: calc(-2 * $header-h);
            }
    }

</style>