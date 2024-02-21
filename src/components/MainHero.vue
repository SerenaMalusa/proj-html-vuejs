<script>

    // import store
    import { store } from '../store';

    export default {
        data() {
            return {
                store,
                slides: [
                    {
                        title: 'Our team',
                        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quae adipisci sunt voluptatum reprehenderit blanditiis?',
                        imgName: 'rev-slider-main-home-img-03.jpg', 
                        canBePurchased: true,

                    },
                    {
                        title: 'Lorem',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque animi quam veniam dolorum architecto hic?',
                        imgName: 'rev-slider-main-home-img-02.png', 
                        canBePurchased: false,
                    },
                ],
                activeIndex: 0,
            } 
        },
        computed: {
            activeSlide() {
                return this.slides[this.activeIndex];
            }
        },
        methods: {
            printClick(buttonText) {
                console.log('the '+buttonText+' button was clicked!');
            }
        },
    }
</script>

<template>

    <section id="hero">
            <!-- <figure>
                <img src="../assets/img/rev-slider-main-home-img-03.jpg" alt="#">
            </figure> -->

            <figure v-for="(slide,i) in slides" :key="i" :class="(slide != activeSlide) ? 'd-none' : ''">
                <img :src="store.getPath(slide)" alt="#">
            </figure>
            
            <div class="container-l">
    
                <div class="arrows">
                    <img @click="activeIndex = store.goToNext(slides,activeIndex)" class="slider-arrow arrow-right" src="../assets/svg/svg-6.svg" alt="right arrow">
                    <img @click="activeIndex = store.goToPrev(slides,activeIndex)" class="slider-arrow arrow-left" src="../assets/svg/svg-6.svg" alt="left arrow">
                </div>
    
                <div class="container-s">
    
                    <!-- <div>
                        <h2 class="text-serif h1">Lorem</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, neque? Unde.</p>
                    </div> -->

                    <div 
                    v-for="(slide,i) in slides" 
                    :key="i"
                    :class="(slide != activeSlide) ? 'd-none' : ''"
                    class="col-6 slide-content"
                    >
                        <section-title 
                        :title="slide.title"
                        :text="slide.text"
                        titleSize="h1"
                        :hasFinishDot="true"
                        :hasDivider="false"
                        :isTextCentered="false"
                        />
                        <!-- <h2 class="text-serif h1">{{ slide.title }}<b class="text-secondary">.</b></h2>
                        <p class="text-info">{{ slide.text }}</p> -->
                        <app-button @button-clicked="printClick" buttonType="primary" text="read more"/>
                        <app-button v-if="slide.canBePurchased" @button-clicked="printClick" text="purchase" buttonType="secondary"/>
                    </div>
    
                </div>
    
            </div>
        </section>
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    section {        
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

            .container-s {
                height: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                .slide-content {
                    transform: translate(0, calc($base-space * 4));
                }
            }
        }
    }

</style>