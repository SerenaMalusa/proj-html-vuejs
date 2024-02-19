// impoport createApp and App to use Vue!
import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap's CSS
import "bootstrap/scss/bootstrap";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import specific icons  from the 3 free kits*/
import {  } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';
/* add icons to the library */
library.add(  );


// use createApp to create the const app then mount it
const app = createApp(App);
// global components
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
