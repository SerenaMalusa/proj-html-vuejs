<script>
    export default {
        
    }
</script>

<template> 
    <div class="wrapper">

        <!-- freccina per tornare su -->
        <div class="back-arrow">
            <img class="arrow-top" src="../assets/svg/svg-6.svg" alt="top arrow">
        </div>

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

        <!-- SECTION FOUNDER -->
        <section id="founder">

            <div class="container-l">

                <img class="section-deco" src="../assets/svg/svg-4.svg" alt="decoration" >

                <div class="container-s">

                    <div class="member d-flex">
                        <figure class="member_img col-7 mb-0">
                            <img src="../assets/img/h1-blog-img-04.jpg" alt="founders member 1">
                        </figure>

                        <div class="member-info col-6 my-5">

                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    .wrapper {
        background-color: $main-bg;

        .back-arrow {
            border-radius: 50%;
            padding-left: 1px;
            width:30px;
            aspect-ratio: 1;
            background-color: $highlight-bg;
            text-align: center;

            position: fixed;
            bottom: $base-space;
            right: $base-space;
            z-index: 2;
            
            .arrow-top {
                width: 25px;
                transform: rotate(-90deg);
                filter: brightness(0) saturate(100%) invert(38%) sepia(42%) saturate(4896%) hue-rotate(351deg) brightness(99%) contrast(105%);
            }

        }
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
                background-color: $highlight-bg;
                position: relative;
                top: calc(-2 * $header-h);
            }
    }

    #founder {
        .container-l {
            position: relative;
            padding-bottom: calc($base-space * 4.5);
        }
        .section-deco {
            width: 380px;
            position: absolute;
            top: calc($base-space * -3.5);
            right: 0;
        }


        .member-info {
            background-color:  $highlight-bg;
            position: relative;
            left: calc($base-space * -5);
        }
    }

</style>