<script>
  // import components 
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';

  export default {
    data() {
      return {

      }
    },
    components: {
      AppHeader,
      AppMain,
    },
  }
</script>

<template>
  
  <app-header/>

  <app-main />

</template>

<style lang="scss">

  // import file general.scss
  @use  './styles/general.scss';


</style>