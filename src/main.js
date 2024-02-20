// impoport createApp and App to use Vue!
import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap's CSS
import * as bootstrap from 'bootstrap';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons  from the 3 free kits*/
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
/* add icons to the library */
library.add( faTwitter, faLocationDot, faPhone, faEnvelope );

// import globall components
import AppSocial from './components/AppSocial.vue';
import AppSearchBar from './components/AppSearchBar.vue';

// use createApp to create the const app then mount it
const app = createApp(App);
// global components
app
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('AppSocial', AppSocial)
    .component('AppSearchBar', AppSearchBar);

app.mount('#app');
