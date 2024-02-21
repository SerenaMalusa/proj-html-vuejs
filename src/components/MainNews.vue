<script>

    // import store 
    import { store } from '../store';

    export default {
        data() {
            return {
                store,
                title: 'Latest news',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                news: [
                    {
                        imgName: 'h1-blog-img-01.jpg',
                        category: 'business leading',
                        date: 'May 5, 2019',
                        author: 'Amanda Doe',
                        title: 'next investment',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                        link: '#',
                    },
                    {
                        imgName: 'h1-blog-img-02.jpg',
                        category: 'empathy',
                        date: 'May 5, 2019',
                        author: 'Amanda Doe',
                        title: 'team Building',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                        link: '#',
                    },
                    {
                        imgName: 'h1-blog-img-03.jpg',
                        category: 'business leading',
                        date: 'May 5, 2019',
                        author: 'Amanda Doe',
                        title: 'new business day',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                        link: '#',
                    },
                    {
                        imgName: 'h1-blog-img-04.jpg',
                        category: 'business leading',
                        date: 'May 5, 2019',
                        author: 'Amanda Doe',
                        title: 'lorem ipsum',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                        link: '#',
                    },
                ],
            }
        },
        methods: {
            handleClick() {
                console.log('you want to read more');
            },
            scrollLeft() {
                const firstArticle = this.news[0];
                this.news.push(firstArticle);
                this.news.shift();
            },
            scrollRight() {
                const lastArticle = this.news[this.news.length - 1];
                this.news.unshift(lastArticle);
                this.news.pop();
            }
        },
    }
</script>

<template>
    <section class="section-padding">
            <div class="container-l">

                <img class="section-deco" src="../assets/svg/svg-4.svg" alt="decoration" >  

                <!-- <img @click="scrollLeft()" class="slider-arrow arrow-right" src="../assets/svg/svg-6.svg" alt="right arrow">
                <img @click="scrollRight()" class="slider-arrow arrow-left" src="../assets/svg/svg-6.svg" alt="left arrow"> -->
                <app-slider-arrows 
                :isBlack="true"
                @right-click="scrollLeft"
                @left-click="scrollRight"
                />

                <div class="container-s">
                    <section-title 
                    :title="title"
                    :text="text"
                    titleSize="h2"
                    :hasFinishDot="true"
                    :hasDivider="true"
                    :isTextCentered="true"
                    />

                    <div class="d-flex justify-content-between mt-5 overflow-hidden">

                        <div v-for="(article,i) in news" :key="i" class="col-4 px-3">
                            <figure>
                                <img :src="store.getPath(article)" alt="#">
                                <span>{{ article.category }}</span>
                            </figure>

                            <span class="me-2">
                                <font-awesome-icon icon="fa-solid fa-clock" class="text-secondary" />
                                <span class="ms-2 text-info">{{ article.date }}</span>
                            </span>
                            <span>
                                <font-awesome-icon icon="fa-solid fa-user" class="text-secondary" />
                                <span class="ms-2 text-info">{{ article.date }}</span>
                            </span>

                            <h6 class="text-serif text-capitalize mt-2">{{ article.title }}</h6>
                            <p class="text-info">{{ article.text }}</p>
                            
                            <app-read-more :link="article.link" @read-more="handleClick"/>                           
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

            .section-deco {
                position: absolute;
                top: calc(-9 * $base-space);
            }
        }
        
        span {
            font-size: 0.8rem;
        }

        figure {
            position: relative;

            span {
                padding: 8px 10px;
                background-color: $secondary-bg;
                color: #fafafa;

                position: absolute;
                bottom: -10px;
                right: 10px;
            }

        }
        
    }

</style>