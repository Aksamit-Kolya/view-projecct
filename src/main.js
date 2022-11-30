import {createApp} from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from '@/views/Home.vue'
import Results from '@/views/Results'

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/search",
        name: "search",
        component: Results
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app')

