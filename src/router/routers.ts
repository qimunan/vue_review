import { type RouteRecordRaw } from "vue-router";


const router: RouteRecordRaw[] = [
    {
        path:'/base',
        component:()=>import('@/views/BaseRef.vue')
    }
]

export default router