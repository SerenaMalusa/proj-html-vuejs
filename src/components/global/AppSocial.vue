<script>
    export default {
        props: {
            links: Array,
            colours: String,
        }
    }
</script>

<template>
    <div class="d-flex">        
        
        <a v-for="(link,i) in links" :key="i" :class="(colours == 'highlight') ? 'highlight-bg' : ''" class="text-center">
            <font-awesome-icon :icon="`fa-${link.kitClass} fa-${link.iconClass}`" />
        </a>

    </div>
</template>

<style lang="scss" scoped>

    //import variables and mixins
    @use '../../styles/partials/variables.scss' as *;
    @use '../../styles/partials/mixins.scss' as *;

    div {
        a {
            margin-right: 10px;
            border-radius: 50%;
            width: 25px;
            aspect-ratio: 1;
            color: $secondary-btn-text;
            background-color: $secondary-bg;

            flex-shrink: 0;

            &.highlight-bg {
                color: $footer-icon-color;
                background-color: $highlight-bg;
            }
        }
    }
</style>