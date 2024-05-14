import { type RouteRecordRaw } from "vue-router";


const router: RouteRecordRaw[] = [
    {
        path: '/base',
        component: () => import('@/views/BaseRef.vue')
    },
    {
        path: '/model',
        component: () => import('@/views/modelL.vue')
    }
]

export default router