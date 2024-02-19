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

  <app-main />

  <app-footer />

</template>

<style lang="scss">

  // import file general.scss
  @use  './styles/general.scss';


</style>