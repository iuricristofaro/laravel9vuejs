import './bootstrap'

import { createApp } from 'vue';

import App from './components/App.vue';
import router from './routes/routers';
import store from './vuex/store';



createApp({
    components: {
        App
    }
})
    .use(store)
    .use(router)
    .mount('#app')

