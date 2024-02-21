<script>
    export default {
        
    }
</script>

<template>
    <section>

        <div class="container-l">

            <img class="section-deco" src="../assets/svg/svg-4.svg" alt="decoration" >

            <div class="container-s">

                <div class="member d-flex">
                    <figure class="member_img col-7 mb-0">
                        <img src="../assets/img/h1-blog-img-04.jpg" alt="founders member 1">

                        <div class="arrows">
                            <img class="arrow arrow-left" src="../assets/svg/svg-6.svg" alt="left arrow">
                            <img class="arrow arrow-right" src="../assets/svg/svg-6.svg" alt="right arrow">
                        </div>
                    </figure>

                    <div class="member-info col-6 my-5">

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
            background-color:  $highlight-bg;
            position: relative;
            left: calc($base-space * -5);
        }
    }

</style>