import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import  animate  from './plugins /animate.js'
import  animateleft  from './plugins /animateleft.js'
import animateright from './plugins /animateright.js'
import accordion from './plugins /accordion.js'

const app = createApp(App);

app.directive('animate', animate);
app.directive('animateleft', animateleft);
app.directive('animateright', animateright);
app.directive('accordion', accordion);

import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';
import '@splidejs/vue-splide/css/core';

app.mount('#app');
