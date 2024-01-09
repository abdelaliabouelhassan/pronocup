import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import  animate  from './plugins /animate.js';

const app = createApp(App);

app.directive('animate', animate);

app.mount('#app');
