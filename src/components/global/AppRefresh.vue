<script>
    export default {
        emits: [
            'clicked-refresh',
        ]
    }
</script>

<template>
    <div @click="$emit('clicked-refresh')" class="d-flex align-items-center">
            <img src="../../assets/svg/svg-5.svg" alt="cart">
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
        background-color: $cart-bg;
        text-align: center;

        position: fixed;
        bottom: calc($base-space * 7.3);
        right: 0;
        z-index: 2;

        &:hover {
            cursor: pointer;
        }

    }

</style>