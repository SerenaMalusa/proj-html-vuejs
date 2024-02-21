<script>

    export default {
        data () {
            return {
                
            }
        },
        props: {
            link: Object,
        },
        
    }
</script>

<template>
    <div class="col-3">

        <h6 class="text-serif">{{ link.title }}</h6>
        <div class="divider"></div>
        <div v-for="(listItem,i) in link.listItems" :key="i" class="d-flex align-items-start">
            <div>
                <font-awesome-icon v-if="listItem.icon.kitClass" :icon="`fa-${listItem.icon.kitClass} fa-${listItem.icon.iconClass}`" class="icon"/>
            </div>
            <a :href="listItem.link" class="text-info">{{ listItem.text }}</a>
        </div>
        <slot v-if="link.extraComponent"></slot>

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
        margin-right: calc($base-space / 4);
        color: $secondary-text;
    }

    a {
        margin-bottom: calc($base-space / 2);
        font-size: 0.8rem;
    }

</style>