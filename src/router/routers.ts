import { type RouteRecordRaw } from "vue-router";


const router: RouteRecordRaw[] = [
    {
        path: '/base',
        component: () => import('@/views/BaseRef.vue')
    },
    {
        path: '/model',
        component: () => import('@/views/modelL.vue')
    },
    {
        path: '/father',
        component: () => import('@/views/fatherS.vue')
    }
]

export default router