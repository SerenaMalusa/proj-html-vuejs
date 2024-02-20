<script>
    export default {
        props: {
            buttonType: String,
            text: String,
        },
        emits: [
            'button-clicked',
        ],
        methods: {
            handleClick() {
                console.log(this.text);
            }
        }
    }
</script>

<template>
    <button 
    :class="(buttonType) ? buttonType : 'd-none'" 
    @click="$emit('button-clicked', text);"
    class="btn"
    >
        <a class="text-uppercase" href="#"> {{ text }}</a>
        <img class="arrow-right" src="../../assets/svg/svg-6.svg" alt="right arrow">
    </button>
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../../styles/partials/variables.scss' as *;
    @use '../../styles/partials/mixins.scss' as *;

    button {
        margin-right: $base-space;
        border-radius: 0;
        padding: 3px 20px;
        height: 50px;
        font-size: 0.7rem;
        font-weight: 600;

        a {
            margin-right: calc($base-space / 2);
            padding: 8px 15px;
        }

        img {
            height: 25px;
        }

        &.primary {
            background-color: $highlight-bg;

            a {
                border-right: 1px solid black;
            }

            img {
                filter: invert(100%);
            }
        }

        &.secondary {
            background-color: $secondary-bg;
            color: $secondary-btn-text;

            a {
                border-right: 1px solid $secondary-btn-text;
            }
        }
    }

</style>