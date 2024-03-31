import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Help from "./components/Help.vue";
import AboutUs from "./components/AboutUs.vue";


const options = {
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about-us', component: AboutUs },
        { path: '/help', component: Help },
    ]
}

export const router = createRouter(options)