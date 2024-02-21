<script>
    export default {
        data() {
            return {
                title: 'Creative leader',
                link: '#',
                skills: [
                    {
                        name: 'Mentorship',
                        perc: '78',
                    },
                    {
                        name: 'Education',
                        perc: '95',
                    },
                    {
                        name: 'Learning',
                        perc: '65',
                    },
                    {
                        name: 'Motivation',
                        perc: '83',
                    },
                ],
            }
        },
        methods: {
            handleClick() {
                console.log('you want to read more');
            }
        },
    }
</script>

<template>
    
    <section class="section-padding">
            <div class="container-l">
                <div class="container-s d-flex">

                    <div class="col-6 p-3">
                        <section-title 
                        :title="title"
                        titleSize="h2"
                        :hasFinishDot="true"
                        :hasDivider="true"
                        :isTextCentered="false"
                        />

                        <p class="text-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis quas dolorum omnis eos totam labore vero sint eligendi maxime? Hic enim ea quidem et commodi illum perferendis dignissimos laborum!</p>
                        
                        <app-read-more :link="link" @read-more="handleClick"/>
                    </div>

                    <div class="col-6 d-flex flex-column align-items-stretch pt-4">

                        <div v-for="(skill,i) in skills" :key="i" class="flex-grow-1">
                            <div class="d-flex justify-content-between text-serif skill-info">
                                <h6 class="text-capitalize">{{ skill.name }}</h6>
                                <span class="h6">{{ skill.perc }}%</span>
                            </div>

                            <div class="bars pb-2">
                                <div class="bar base-bar">
                                    
                                    <div :style="`width: ${skill.perc}%;`" class="bar progress-bar"></div>

                                </div>
                            </div>
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
        background-color: $highlight-bg;

        .bar {
            border-radius: 25px;
            height: 3px;
            &.base-bar {
                width: 100%;
                background-color: $bar-colour ;
            }

            &.progress-bar {
                background-color: $secondary-bg ;
            }

        }

    }

</style>