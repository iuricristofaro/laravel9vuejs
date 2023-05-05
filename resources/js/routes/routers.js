import { createWebHistory , createRouter  } from 'vue-router';



const routes = [
    {
        path: '/TestComponent',
        component: TestComponent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});




export default router;
