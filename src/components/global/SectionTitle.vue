<script>
    export default {
       props: {
        title: String,
        text: String,
        titleSize: String,
        hasFinishDot: Boolean,
        hasDivider: Boolean,
        isTextCentered: Boolean,
       } 
    }
</script>

<template>
    <div :class="(isTextCentered) ? 'text-center' : ''">
        <h2 :class="titleSize" class="text-serif">{{ title }}<b v-if="hasFinishDot" class="text-secondary">.</b></h2>
        <p class="text-info">{{ text }}</p>
        <div v-if="hasDivider" :class="(isTextCentered) ? 'centered' : ''" class="divider"></div>
    </div>
</template>

<style lang="scss" scoped>

    //import varibles and mixins
    @use '../../styles/partials/variables.scss' as *;
    @use '../../styles/partials/mixins.scss' as *;

    
    .divider {
        margin-bottom: calc($base-space / 1.5);
        width: calc($base-space * 2.5);
        height: 1px;
        background-color: $secondary-bg;

        &.centered {
            margin: 0 auto;
        }
    }

</style>