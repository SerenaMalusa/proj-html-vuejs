// impoport createApp and App to use Vue!
import { createApp } from 'vue'
import App from './App.vue'


// use createApp to create the const app then mount it
const app = createApp(App);
// global components

app.mount('#app');
