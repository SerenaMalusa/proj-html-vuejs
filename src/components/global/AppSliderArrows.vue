<script>
    export default {
        props: {
            isBlack: Boolean,
        },
        emits: [
            'right-click',
            'left-click',
        ]
    }
</script>

<template>
    
    <img @click="$emit('right-click')" :class="isBlack ? 'black':''" class="slider-arrow arrow-right" src="../../assets/svg/svg-6.svg" alt="right arrow">
    <img @click="$emit('left-click')" :class="isBlack ? 'black':''" class="slider-arrow arrow-left" src="../../assets/svg/svg-6.svg" alt="left arrow">

</template>

<style lang="scss" scoped>

    .slider-arrow {
        
        &.black {
            filter: invert(100%);
        }

        position: absolute;
        top: 50%;

        &:hover {
            cursor: pointer;
        }

        &.arrow-right {
            right:  0;
        }

    }

</style>