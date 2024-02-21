<script>
    export default {
        data() {
            return {
                title: 'Creative leader',
                link: '#',
            }
        }
    }
</script>

<template>
    
    <section class="section-padding">
            <div class="container-l">
                <div class="container-s d-flex">

                    <div class="col-6">
                        <section-title 
                        :title="title"
                        titleSize="h2"
                        :hasFinishDot="true"
                        :hasDivider="true"
                        :isTextCentered="false"
                        />

                        <p class="text-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis quas dolorum omnis eos totam labore vero sint eligendi maxime? Hic enim ea quidem et commodi illum perferendis dignissimos laborum!</p>
                        
                        <app-read-more :link="link" @read-more="handleClick()"/>
                    </div>

                    <div class="col-6 debug"></div>
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
    }

</style>