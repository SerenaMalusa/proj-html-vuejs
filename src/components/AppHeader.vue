<script>

  import HeaderNavBar from './HeaderNavBar.vue';

  export default {
    data () {
      return {
        menuLinks: [
          {
            link: '#',
            text: 'Home',
            icon: {
              kitClass: '',
              iconClass: '',
            },
          },
          {
            link: '#',
            text: 'Pages',
            icon: {
              kitClass: '',
              iconClass: '',
            },
          },
          {
            link: '#',
            text: 'Blog',
            icon: {
              kitClass: '',
              iconClass: '',
            },
          },
          {
            link: '#',
            text: 'Shop',
            icon: {
              kitClass: '',
              iconClass: '',
            },
          },
          {
            link: '#',
            text: 'Events',
            icon: {
              kitClass: '',
              iconClass: '',
            },
          },
          {
            link: '#',
            text: 'Elements',
            icon: {
              kitClass: '',
              iconClass: '',
            },
          },
          {
            link: '#',
            text: '',
            icon: {
              kitClass: 'solid',
              iconClass: 'magnifying-glass',
            },
          },
          {
            link: '#',
            text: '',
            icon: {
              kitClass: 'solid',
              iconClass: 'bars',
            },
          },
        ],
        
      }
    },
    components: {
      HeaderNavBar,
    }
  }
</script>

<template>
  <div class="container-l d-flex justify-content-between align-items-end">

    <img src="../assets/img/logo-img-01.png" alt="Everleadlogo">
    
    <!-- <a class="h4 text-serif mb-0" href="#">Everlead<b class="text-secondary">.</b></a> -->
    <header-nav-bar :menu="menuLinks"/>

  </div>
</template>

<style lang="scss" scoped>

    // import varibales and mixins
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    .container-l {
      height: $header-h;
      position: relative;
      z-index: 1;
    }


</style>