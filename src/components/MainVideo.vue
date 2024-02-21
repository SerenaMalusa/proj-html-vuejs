<script>
    export default {
        
    }
</script>

<template>
    <section class="d-flex align-items-center justify-content-center">

        <font-awesome-icon icon="fa-solid fa-play" class="icon"/>

    </section>
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    section {
        height: 100vh;
        background-image: url(../assets/img/h1-img-04.jpg);
        background-size: cover;
        background-repeat: no-repeat;

        .icon {
            font-size: 4rem;
            color: $highlight-bg;
        }
    }

</style>