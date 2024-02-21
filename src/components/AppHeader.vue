<script>

  // import Axios
  import axios from 'axios';

  // import store
  import { store } from '../store';

  // import components
  import HeaderNavBar from './HeaderNavBar.vue';

  export default {
    data () {
      return {
        store,
        menuLinks: [], 
        links: [],       
      }
    },
    components: { HeaderNavBar },
    methods: {
      fetchData() {
        axios.get( store.apiUri + 'headerLinks').then((res) => {
          this.menuLinks = res.data;
        });
      }
    },
    created() {
      this.fetchData();
    },
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

      img {
        width: 120px;
        margin-bottom: 5px;
      }
    }

</style>