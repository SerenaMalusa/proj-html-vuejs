<script>
    export default {
        methods: {
            backToTop() {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }
    }
</script>

<template>
    <div @click="backToTop()" class="back-arrow">
            <img class="arrow-top" src="../../assets/svg/svg-6.svg" alt="top arrow">
    </div>
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../../styles/partials/variables.scss' as *;
    @use '../../styles/partials/mixins.scss' as *;
    .back-arrow {
        border-radius: 50%;
        padding-left: 1px;
        width: 30px;
        aspect-ratio: 1;
        background-color: $highlight-bg;
        text-align: center;

        position: fixed;
        bottom: $base-space;
        right: $base-space;
        z-index: 2;

        &:hover {
            cursor: pointer;
        }
        
        .arrow-top {
            width: 25px;
            transform: rotate(-90deg);
            filter: brightness(0) saturate(100%) invert(38%) sepia(42%) saturate(4896%) hue-rotate(351deg) brightness(99%) contrast(105%);
        }

    }

</style>