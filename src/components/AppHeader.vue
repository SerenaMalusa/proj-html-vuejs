<script>
  export default {
    data () {
      return {
        menu: [
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
        ]
      }
    }
  }
</script>

<template>
  <div class="container-l d-flex justify-content-between align-items-end">

    <img src="../assets/img/logo-img-01.png" alt="Everleadlogo">
    
    <!-- <a class="h4 text-serif mb-0" href="#">Everlead<b class="text-secondary">.</b></a> -->

    <nav>
      <ul class="d-flex mb-0">
        <!-- <li class="text-uppercase ms-4">Lorem</li> -->
        <li v-for="link in menu" class="text-uppercase ms-4"> 
          <a v-if="link.text" href="link.link">{{ link.text }}</a>
          <a v-else href="link.link">
            <font-awesome-icon :icon="`fa-${link.icon.kitClass} fa-${link.icon.iconClass}`" />
          </a>
        </li>
        
      </ul>
    </nav>

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
        
      img {
        width: 120px;
        margin-bottom: 5px;
      }

      a {
        font-size: 0.9rem;
        font-weight: 600;
      }
    }


</style>