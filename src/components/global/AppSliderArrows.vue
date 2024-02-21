<script>
    export default {
        emits: [
            'right-click',
            'left-click',
        ]
    }
</script>

<template>
    
    <img @click="$emit('right-click')" class="slider-arrow arrow-right" src="../../assets/svg/svg-6.svg" alt="right arrow">
    <img @click="$emit('left-click')" class="slider-arrow arrow-left" src="../../assets/svg/svg-6.svg" alt="left arrow">

</template>

<style lang="scss" scoped>

</style>