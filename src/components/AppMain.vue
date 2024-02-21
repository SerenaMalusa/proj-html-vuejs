<script>

    // import components
    import MainHero from './MainHero.vue';
    import MainSpecialties from './MainSpecialties.vue';
    import MainFounders from './MainFounders.vue';
    import MainEvents from './MainEvents.vue';

    export default {
        components: {
            MainHero,
            MainSpecialties,
            MainFounders,
            MainEvents,
        }
    }
</script>

<template> 
    <div class="wrapper">

        <!-- freccina per tornare su -->
        <app-back-arrow />

        <!-- SECTION HERO -->
        <main-hero />

        <!-- SECTION SPECIALTIES  -->
        <main-specialties />

        <!-- SECTION FOUNDER -->
        <main-founders />

        <!-- SECTION EVENTS -->
        <main-events />

        <!-- SECTION LEADER -->
        <section class="section-padding" id="leader">
            <div class="container-l">
                <div class="container-s d-flex debug">

                    <div class="col-6">
                        <h3 class="text-serif">Lorem</h3>
                        <p class="text-info mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis quas dolorum omnis eos totam labore vero sint eligendi maxime? Hic enim ea quidem et commodi illum perferendis dignissimos laborum!</p>
                        <a href="#">READ MORE</a>
                    </div>
                    <div class="col-6 debug"></div>
                </div>
            </div>
        </section>
        <!-- END SECTION LEADER -->

        <!-- SECTION NEWS -->
        <section class="section-padding" id="news">
            <div class="container-l">

                <img class="slider-arrow arrow-right" src="../assets/svg/svg-6.svg" alt="right arrow">
                <img class="slider-arrow arrow-left" src="../assets/svg/svg-6.svg" alt="left arrow">
                
                <div class="container-s">
                    <div class="section-title text-center">
                        <h2 class="text-serif h3 mb-0">Lorem</h2>
                        <p class="text-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, neque? Unde.</p>
                    </div>

                    <div class="d-flex justify-content-between gap-4">
                        <div>
                            <figure>
                                <img src="../assets/img/h1-blog-img-02.jpg" alt="#">
                                <span>Business Leading</span>
                            </figure>

                            <h6 class="text-serif">Lorem</h6>
                            <p class="text-info">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <a href="#">READ MORE</a>                            
                        </div>
                        
                        <div>
                            <figure>
                                <img src="../assets/img/h1-blog-img-02.jpg" alt="#">
                                <span>Business Leading</span>
                            </figure>

                            <h6 class="text-serif">Lorem</h6>
                            <p class="text-info">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <a href="#">READ MORE</a>                            
                        </div>
                        <div>
                            <figure>
                                <img src="../assets/img/h1-blog-img-02.jpg" alt="#">
                                <span>Business Leading</span>
                            </figure>

                            <h6 class="text-serif">Lorem</h6>
                            <p class="text-info">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <a href="#">READ MORE</a>                            
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

        .section-padding {
            padding: calc($base-space * 5) 0;
        }

    }

    #leader {
        background-color: $highlight-bg;
    }

    #news {
        .container-l {
            position: relative;
        }

        figure {
            position: relative;

            span {
                padding: 8px 10px;
                background-color: $secondary-bg;
                color: #fafafa;
                font-size: 0.8rem;

                position: absolute;
                bottom: -10px;
                right: 10px;
            }

        }
        
    }

</style>