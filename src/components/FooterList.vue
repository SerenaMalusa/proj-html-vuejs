<script>
    export default {
        props: {
            link: Object,
        }
    }
</script>

<template>
    <div class="col-3">

        <h6 class="text-serif">{{ link.title }}</h6>
        <div class="divider"></div>
        <div v-for="listItem in link.listItems" class="d-flex align-items-start">
            <div>
                <font-awesome-icon v-if="listItem.icon.kitClass" :icon="`fa-${listItem.icon.kitClass} fa-${listItem.icon.iconClass}`" class="icon"/>
            </div>
            <p class="text-info">{{ listItem.text }}</p>
        </div>

    </div>
</template>

<style lang="scss" scoped>

    //import varibles and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    h6 {
        margin-bottom: calc($base-space / 1.5);
    }

    .divider {
        margin-bottom: calc($base-space / 1.5);
        width: calc($base-space * 1.5);
        height: 1px;
        background-color: $secondary-bg;
    }

    .icon {
        margin-right: 5px;
        color: $secondary-text;
    }

    p {
        font-size: 0.8rem;
    }

</style>