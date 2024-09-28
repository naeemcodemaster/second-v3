import {createWebHistory,createRouter} from 'vue-router';
import AboutPage from './components/routing/AboutPage.vue';
import ContactPage from './components/routing/ContactPage.vue';
import DataPage from './components/routing/DataPage.vue';
import PageNotFound from './components/routing/PageNotFound.vue'
const routes = [
    {
        name:'AboutPage',
        path:'/about',
        component:AboutPage

    },
    {
        name:'ContactPage',
        path:'/contact',
        component:ContactPage

    },
    {
        name:'data',
        // path:'/data/:name',
        path:'/data/:name/:age',
        component:DataPage

    },
    {
        name:'notfound',
        path:'/:pathMatch(.*)*',
        component:PageNotFound

    },
];
const router = createRouter({
    history:createWebHistory(),
    routes:routes
})
export default router;