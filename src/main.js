import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import  animate  from './plugins /animate.js'
import  animateleft  from './plugins /animateleft.js'
import animateright from './plugins /animateright.js'

const app = createApp(App);

app.directive('animate', animate);
app.directive('animateleft', animateleft);
app.directive('animateright', animateright);

app.mount('#app');
