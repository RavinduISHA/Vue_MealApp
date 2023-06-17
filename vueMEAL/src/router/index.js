import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import MbyLetter from '../views/MbyLetter.vue'
import MbyName from '../views/MbyName.vue'
import MbyIgt from '../views/MbyIgt.vue'
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';

const routes =[
    {
        path: '/',
        component: DefaultLayout,
        children:[
            {
                path: '/',
                name: "home",
                component: Home,
            },
            {
                path: '/by-Name:name?',
                name: "byName",
                component: MbyName,
            },
            {
                path: '/by-igt:igt?',
                name: "byIgt",
                component: MbyIgt,
            },
            {
                path: '/letter/:letter?',
                name: "byLetter",
                component: MbyLetter,
            },
            {
                path: '/colour',
                name: "colour",
                component: Colour,
            }
        ]
    },
    {
        path: '/guest',
        component: GuestLayout
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;