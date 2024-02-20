<script>
    export default {
        data() {
            return {
                sectionTitle: 'Our specialties',
                sectionText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas!',
                skills: [
                    {
                        title: 'Knowing',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        imgName: 'svg-0.svg',
                    },
                    {
                        title: 'Selling',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        imgName: 'svg-1.svg',
                    },
                    {
                        title: 'Learning',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        imgName: 'svg-2.svg',
                    },
                    {
                        title: 'Contact',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        imgName: 'svg-3.svg',
                    },
                ],
            }
        },
        methods: {
            getSvgPath(item) {
                const url = new URL ('../assets/svg/' + item.imgName, import.meta.url);
                return url;
            }
        },
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
                    titleSize="h2"
                    :hasFinishDot="true"
                    :hasDivider="true"
                    :isTextCentered="true"
                    id="title"
                    />
        
                    <div class="skills d-flex justify-content-between">
                        <!-- <div class="skill text-center col-3">
                            <img class="mb-4" src="../assets/svg/svg-1.svg" alt="#">
                            <h6 class="text-serif">Lorem</h6>
                            <p class="text-info">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div> -->

                        <div v-for="(skill,i) in skills" :key="i" class="skill text-center col-3">
                            <img class="mb-4" :src="getSvgPath(skill)" alt="#">
                            <h6 class="text-serif">{{ skill.title }}</h6>
                            <p class="text-info">{{ skill.text }}</p>
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