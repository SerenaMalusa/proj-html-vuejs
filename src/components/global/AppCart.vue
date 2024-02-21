<script>
    export default {
        emits: [
            'clicked-cart',
        ]
    }
</script>

<template>
    <div @click="$emit('clicked-cart')">
            <img src="../../assets/svg/svg-7.svg" alt="cart">
    </div>
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../../styles/partials/variables.scss' as *;
    @use '../../styles/partials/mixins.scss' as *;

    div {
        padding: 5px;
        width: 30px;
        aspect-ratio: 1;
        background-color: $highlight-bg;
        text-align: center;

        position: fixed;
        bottom: calc($base-space * 5);
        right: 0;
        z-index: 2;

        &:hover {
            cursor: pointer;
        }
        
        // img {
        //     width: 25px;
        // }

    }

</style>