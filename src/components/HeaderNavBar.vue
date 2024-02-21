<script>
    export default {
        props: {
            menu: Array,
        },
        data() {
            return {
                activeIndex: 0,
            }
        },
        methods: {
            activateLink(index) {
                this.activeIndex = index;
                setTimeout(() => {
                this.activeIndex = 0;
                }, 1000 * 20);
            },
        },
    }
</script>

<template>

        <nav>
            <ul class="d-flex mb-0">
                <!-- <li class="text-uppercase ms-4">Lorem</li> -->
                <li 
                v-for="(link, i) in menu"
                :key="i"
                @mouseenter="activateLink(i)"
                class="text-uppercase ms-4 d-flex align-items-end"
                > 
                <img 
                :class="(activeIndex == i && activeIndex != menu.length - 1 && activeIndex != menu.length - 2) ? '' : 'd-none'" 
                class="arrow arrow-right" src="../assets/svg/svg-6.svg" alt="right arrow">
                <a v-if="link.text" :class="(activeIndex == i) ? 'active' : ''" href="link.link">{{ link.text }}</a>
                <a v-else href="link.link">
                    <font-awesome-icon :icon="`fa-${link.icon.kitClass} fa-${link.icon.iconClass}`" />
                </a>
                </li>
                
            </ul>
        </nav>

</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    .active {
        color: $secondary-text;
    }

    .arrow {
        margin: 5px 5px 0 0;
        height: 20px;
        width: auto;
        filter: brightness(0) saturate(100%) invert(44%) sepia(95%) saturate(4667%) hue-rotate(354deg) brightness(101%) contrast(99%);
    }

    a {
        font-size: 0.9rem;
        font-weight: 600;
    }

</style>