<script>
    export default {
        
    }
</script>

<template> 
    <div class="wrapper">

        <!-- SECTION HERO -->
        <section id="hero">
            <figure>
                <img src="../assets/img/rev-slider-main-home-img-03.jpg" alt="#">
            </figure>
            
            <div class="container-l">
    
                <div class="slider-arrows">
                    <img class="arrow arrow-right" src="../assets/svg/svg-6.svg" alt="right arrow">
                    <img class="arrow arrow-left" src="../assets/svg/svg-6.svg" alt="left arrow">
                </div>
    
                <div class="container-s">
    
                    <div class=" debug">
                        <h2 class="text-serif h1">Lorem</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, neque? Unde.</p>
                    </div>
    
                </div>
    
            </div>
        </section>
        <!-- END SECTION HERO -->

        <!-- SECTION SPECIALTIES  -->
        <section id="specialties">
            <div class="container-l">
    
                <div class="container-s">
                    <div class="section-title text-center">
                        <h2 class="text-serif h3 mb-0">Lorem</h2>
                        <p class="text-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, neque? Unde.</p>
                    </div>
        
                    <div class="skills debug d-flex justify-content-between gap-4 debug">
                        <div class="skill text-center col-3 debug">
                            <img src="../assets/svg/svg-1.svg" alt="#">
                            <h6 class="text-serif">Lorem</h6>
                            <p class="text-info">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
    
                        <div class="skill text-center debug">
                            <img src="../assets/svg/svg-1.svg" alt="#">
                            <h6 class="text-serif">Lorem</h6>
                            <p class="text-info">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div class="skill text-center debug">
                            <img src="../assets/svg/svg-1.svg" alt="#">
                            <h6 class="text-serif">Lorem</h6>
                            <p class="text-info">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div class="skill text-center debug">
                            <img src="../assets/svg/svg-1.svg" alt="#">
                            <h6 class="text-serif">Lorem</h6>
                            <p class="text-info">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- END SECTION SPECIALTIES  -->


    </div>
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    .wrapper {
        background-color: #fafafa;
    }

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

        .container-l {
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

            .container-s {
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
            .container-l {
                padding: calc($header-h * 1.5) 0;
                background-color:#ffffff;
                position: relative;
                top: calc(-2 * $header-h);
            }
    }

</style>