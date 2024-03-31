import { createRouter, createWebHistory } from "vue-router";
import Home from "./containers/Home.vue";
import Help from "./containers/Help.vue";
import AboutUs from "./containers/AboutUs.vue";


const options = {
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about-us', component: AboutUs },
        { path: '/help', component: Help },
    ]
}

export const router = createRouter(options)