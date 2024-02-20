<script>
    export default {
        data() {
            return {
                sectionTitle: 'Our specialties',
                sectionText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas!',
            }
        }
    }
</script>

<template>
    <section>
            <div class="container-l">
    
                <div class="container-s">
                    <!-- <div class="section-title text-center">
                        <h2 class="text-serif h3 mb-0">Lorem</h2>
                        <p class="text-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, neque? Unde.</p>
                    </div> -->
                    <section-title 
                    :title="sectionTitle"
                    :text="sectionText"
                    titleSize="h3"
                    :hasFinishDot="true"
                    :hasDivider="true"
                    :isTextCentered="true"
                    id="title"
                    />
        
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
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    section {
            .container-l {
                padding: calc($header-h * 1.5) 0;
                background-color: $highlight-bg;
                position: relative;
                top: calc(-2 * $header-h);
            }

            #title {
                margin-bottom: 50px;
            }
    }

</style>