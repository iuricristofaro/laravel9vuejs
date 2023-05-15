import { createRouter, createWebHistory } from 'vue-router'

import CategoriesComponent from '../components/admin/pages/categories/CategoriesComponent.vue'



const routes = [
    {
        name: 'CategoriesComponent',
        path: '/categories',
        component: CategoriesComponent
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default routes