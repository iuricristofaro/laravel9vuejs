import './bootstrap';
// import { createApp } from 'vue';



// import router from './routes/routers';


// const app = createApp({});

// import TestComponent from './components/TestComponent';
// app.component('test-component', TestComponent);


// app.mount('#app');
// app.use(router);


import Vue from'vue';
window.Vue = require('vue');
 
import App from '../components/App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes';
 
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
 
const router = new VueRouter({
    mode: 'history',
    routes: routes
});
 
const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});



