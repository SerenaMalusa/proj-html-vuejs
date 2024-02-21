<script>
    export default {
        props: {
            link: String,
        },
        emits: [
            'read-more',
        ],
    }
</script>

<template>
    <a @click="$emit('read-more')" class="text-uppercase" target="_blank">read more</a>
</template>


<style lang="scss" scoped>

    a {
        font-size: 0.8rem;
        font-weight: 600;    
    }

</style>