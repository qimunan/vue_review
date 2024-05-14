import {type RouteRecordRaw } from "vue-router";


const router:RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component:()=>import('@/components/homeView.vue')
    },
    {
        path:'/table',
        component:()=>import('@/components/tableData.vue')
    }
]

export default router