<script>
    export default {
        data() {
            return {
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
            getImgPath(slide) {
                const url = new URL ('../assets/img/' + slide.imgName, import.meta.url);
                return url;
            },
            goToNextSlide() {
                this.activeIndex ++;
                if (this.activeIndex == this.slides.length) this.activeIndex = 0;
            },
            goToPrevSlide() {
                this.activeIndex --;
                if (this.activeIndex < 0) this.activeIndex = this.slides.length - 1;
            },
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

            <figure v-for="slide in slides" :class="(slide != activeSlide) ? 'd-none' : ''">
                <img :src="getImgPath(slide)" alt="#">
            </figure>
            
            <div class="container-l">
    
                <div>
                    <img @click="goToNextSlide()" class="slider-arrow arrow-right" src="../assets/svg/svg-6.svg" alt="right arrow">
                    <img @click="goToPrevSlide()" class="slider-arrow arrow-left" src="../assets/svg/svg-6.svg" alt="left arrow">
                </div>
    
                <div class="container-s">
    
                    <!-- <div>
                        <h2 class="text-serif h1">Lorem</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, neque? Unde.</p>
                    </div> -->

                    <div 
                    v-for="slide in slides" 
                    :class="(slide != activeSlide) ? 'd-none' : ''"
                    class="col-6"
                    >
                        <h2 class="text-serif h1">{{ slide.title }}<b class="text-secondary">.</b></h2>
                        <p class="text-info">{{ slide.text }}</p>
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

                div {
                    transform: translate(0, 2rem);
                }
            }
        }
    }

</style>