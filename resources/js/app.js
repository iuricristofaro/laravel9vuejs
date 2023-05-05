import './bootstrap';
import { createApp } from 'vue';

import router from './routes/routers';


const app = createApp({});

// import TestComponent from './components/TestComponent.vue';
app.component('test-component', TestComponent);


app.mount('#app');
app.use(router);



