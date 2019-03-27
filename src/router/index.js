import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: () => import('@/pages/Login.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/pages/Home.vue')
        }
    ]
})
