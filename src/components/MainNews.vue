<script>
    export default {
        data() {
            return {
                title: 'Latest news',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            }
        },
    }
</script>

<template>
    <section class="section-padding">
            <div class="container-l">

                <img class="slider-arrow arrow-right" src="../assets/svg/svg-6.svg" alt="right arrow">
                <img class="slider-arrow arrow-left" src="../assets/svg/svg-6.svg" alt="left arrow">
                
                <div class="container-s">
                    <section-title 
                    :title="title"
                    :text="text"
                    titleSize="h2"
                    :hasFinishDot="true"
                    :hasDivider="true"
                    :isTextCentered="true"
                    />

                    <div class="d-flex justify-content-between gap-4 mt-5">
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
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    section {
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