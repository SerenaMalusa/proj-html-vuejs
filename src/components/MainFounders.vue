<script>

    //import store
    import { store } from '../store';

    export default {
        data() {
            return {
                store,
                founders: [
                    {
                        imgName: 'h1-img-01.jpg',
                        name: 'Jason Bickford',
                        role: 'Founder and Executive Director',
                        quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio qui totam, fuga quaerat amet adipisci eum placeat officia praesentium.',
                    },
                    {
                        imgName: 'h1-img-02.jpg',
                        name: 'John Smith',
                        role: 'Founder and',
                        quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio qui totam, fuga quaerat amet adipisci eum placeat officia praesentium.',
                    },
                    {
                        imgName: 'h1-img-03.jpg',
                        name: 'Pinco Pallo',
                        role: 'Founder and',
                        quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio qui totam, fuga quaerat amet adipisci eum placeat officia praesentium.',
                    },
                ],
                activeIndex: 0,
            }
        },
        // methods: {
        //     goNext() {
        //         this.activeIndex = store.goToNext(this.founders,this.activeIndex);
        //         // this.activeIndex ++;

        //     }
        // }
    }
</script>

<template>
    <section>

        <div class="container-l">

            <img class="section-deco" src="../assets/svg/svg-4.svg" alt="decoration" >    

            <div class="container-s">

                <div class="member d-flex align-items-start">
                    <figure class="member_img col-7 mb-0">
                        <!-- <img src="../assets/img/h1-blog-img-04.jpg" alt="founders member 1"> -->
                        <img 
                        v-for="(founder,i) in founders" 
                        :key="i" :src="store.getPath(founder)" 
                        :class="i == activeIndex ? '' : 'd-none'"
                        :alt="`picture of ${founder.name}`"
                        >

                        <div class="arrows">
                            <img @click="activeIndex = store.goToPrev(founders,activeIndex)" class="arrow arrow-left" src="../assets/svg/svg-6.svg" alt="left arrow">
                            <img @click="activeIndex = store.goToNext(founders,activeIndex)" class="arrow arrow-right" src="../assets/svg/svg-6.svg" alt="right arrow">
                        </div>
                    </figure>

                    <div v-for="(founder,i) in founders" :key="i" :class="i == activeIndex ? '' : 'd-none'" class="member-info col-7 my-5">
                        
                        <section-title                         
                        :title="founder.name"
                        :text="founder.role"
                        titleSize="h3"
                        pRem="0.8"
                        :hasFinishDot="false"
                        :hasDivider="true"
                        :isTextCentered="false"
                        />

                        <p class="text-info"> {{ founder.quote }}</p>

                        <app-social />

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
        .container-l {
            position: relative;
            padding-bottom: calc($base-space * 5);
        }
        .section-deco {
            width: 380px;
            position: absolute;
            top: calc($base-space * -3.5);
            right: 0;
        }

        figure {
            position: relative;
            .arrows {
                padding: calc($base-space / 2);
                background-color: $secondary-bg;

                position: absolute;
                bottom: 0;
    
                &:hover {
                    cursor: pointer;
                }
                .arrow {
                    height: $base-space;
                }
                .arrow-left {
                    margin-bottom: calc($base-space / 7.5);
                    margin-right: calc($base-space / 2);
                }
            }
        }

        .member-info {
            padding: calc($base-space * 4) calc($base-space * 3);
            background-color:  $highlight-bg;
            position: relative;
            left: calc($base-space * -5);
        }
    }

</style>