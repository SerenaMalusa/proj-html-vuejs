<script>

    // import components
    import MainHero from './MainHero.vue';
    import MainSpecialties from './MainSpecialties.vue';
    import MainFounders from './MainFounders.vue';
    import MainEvents from './MainEvents.vue';
    import MainLeader from './MainLeader.vue';
    import MainNews from './MainNews.vue';
    import MainTestimonials from './MainTestimonials.vue';
    import MainVideo from './MainVideo.vue';
    import MainContacts from './MainContacts.vue';
    import MainLogos from './MainLogos.vue';

    export default {
        components: {
            MainHero,
            MainSpecialties,
            MainFounders,
            MainEvents,
            MainLeader,
            MainNews,
            MainTestimonials,
            MainVideo,
            MainContacts,
            MainLogos,
        }
    }
</script>

<template> 
    <div class="wrapper">

        <!-- freccina per tornare su -->
        <app-back-arrow />

        <!-- SECTION HERO -->
        <main-hero />

        <!-- SECTION SPECIALTIES  -->
        <main-specialties />

        <!-- SECTION FOUNDER -->
        <main-founders />

        <!-- SECTION EVENTS -->
        <main-events />

        <!-- SECTION LEADER -->
        <main-leader />

        <!-- SECTION NEWS -->
        <main-news />

        <!-- SECTION TESTIMONIALS -->
        <main-testimonials />

        <!-- SECTION VIDEO -->
        <main-video />

        <!-- SECTION CONTACTS -->
        <main-contacts />

        <!-- SECTION LOGOS -->
        <main-logos />

    </div>
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    .wrapper {
        background-color: $main-bg;

        .section-padding {
            padding: calc($base-space * 5) 0;
        }

    }

</style>