<script>
  // import components 
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';

  export default {
    data() {
      return {

      }
    },
    components: {
      AppHeader,
      AppMain,
      AppFooter,
    },
  }
</script>

<template>
  
  <app-header />

  <app-main id="main"/>

  <app-footer />

</template>

<style lang="scss">

  // import file general.scss
  @use  './styles/general.scss';

  #main {
    background-color: #b6e0f0;
  }

</style>