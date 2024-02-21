<script>

    //import store
    import { store } from '../store';

    export default {
        data() {
            return {
                store,
                activeIndex: 0,
                testimonials: [
                    {
                        imgName: 'h3-img-04.png',
                        name: 'Cynthia Clark',
                        quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptas quisquam soluta asperiores. Consequuntur blanditiis facere, perferendis deserunt quasi atque!',
                    },
                    {
                        imgName: 'h3-img-07.png',
                        name: 'Hanna Anna',
                        quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptas quisquam soluta asperiores. Consequuntur blanditiis facere, perferendis deserunt quasi atque!',
                    },
                    {
                        imgName: 'h3-img-08.png',
                        name: 'Lory Friend',
                        quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptas quisquam soluta asperiores. Consequuntur blanditiis facere, perferendis deserunt quasi atque!',
                    },
                ],
            }
        },
    }
</script>

<template>
    <section class="section-padding">
        <h2 class="text-serif mb-0">
                Testimonials.
            </h2>

        <div class="container-l text-info">
            
            <app-slider-arrows @right-click="activeIndex = store.goToNext(testimonials,activeIndex)" @left-click="activeIndex = store.goToPrev(testimonials,activeIndex)" />
            
            <div class="container-s d-flex justify-content-center">
                
                <div 
                v-for="(person, i) in testimonials" 
                :key="i" 
                :class="i == activeIndex ? '':'d-none'"
                class="col-6 text-center">
                    <figure>
                        <img :src="store.getPath(person)" alt="portrait">
                    </figure>
                    <h6 class="text-serif">{{ person.name }}</h6>
                    <p>{{ person.quote }}</p>

                    <div class="col-4 d-flex justify-content-between align-items-center mx-auto">
                        <span>{{ `0${i+1}` }}</span>
                        <div class="bar base-bar flex-grow-1 mx-2 d-flex">
                            <div 
                            v-for="(person,index) in testimonials" 
                            :key="index"
                            :class="index == i ? 'active' : ''"
                            class="bar progress-bar flex-grow-1"
                            ></div>
                        </div>
                        <span>{{ '0'+testimonials.length }}</span>
                    </div>

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
        background-color: $testimonial-bg;
        position: relative;

        h2 {
            color: $testimonial-title;
            font-size: 11rem;

            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, 0);
            z-index: 0;
        }
        .container-l {
            position: relative;
            z-index: 1;
        }


        figure {
            margin: 30px auto;
            border-radius: 50%;
            border: 4px solid white;
            width: 100px;
            aspect-ratio: 1;

            img {
                width: 100%;
                height: auto;
                object-fit: contain;
            }
        }

        .bar {
            border-radius: 25px;
            height: 3px;
            
            &.base-bar {
                background-color: $testimonial-bar-bg;
            }

            .active {
                background-color: $testimonia-bar-higlight;
            }
        }
    }
</style>