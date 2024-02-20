<script>
    export default {
        
    }
</script>

<template>
    <div>
        
        <div class="container-l">
            <div class="container-s">

            </div>
        </div>

        <div class="copyright">
            Copyrigth Everlead©MikadoTeams
        </div>
    </div>
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    div {
        background-color: #181515;
        color: $footer-text;

        .copyright {
            padding: calc($base-space / 3);
            background-color: $secondary-bg;
            text-align: center;
            font-size: 0.5rem;
        }
    }

</style>