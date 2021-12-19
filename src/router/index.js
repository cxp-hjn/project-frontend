import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import test from "../components/test";
import FixStore from "../components/FixStore";
import AdminstrationCarBasicInformation from "../components/AdminstrationCarBasicInformation";
import AdminstrationCarUpload from "../components/AdminstrationCarUpload";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/FixStore',
        name: 'FixStore',
        component: FixStore
    },
    {
        path: '/AdminstrationCarBasicInformation',
        name: 'AdminstrationCarBasicInformation',
        component: AdminstrationCarBasicInformation
    },
    {
        path: '/AdminstrationCarUpload',
        name: 'AdminstrationCarUpload',
        component: AdminstrationCarUpload
    },
    {
        path: '/test',
        name: 'test',
        component: test
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
