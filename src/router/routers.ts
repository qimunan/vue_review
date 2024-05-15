import { type RouteRecordRaw } from "vue-router";


const routes: RouteRecordRaw[] = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/homePage.vue')
    },
    {
        path: '/news',
        name: 'news',
        component: () => import('@/views/newsPage.vue'),
        children: [
            {
                // query传参
                // path: 'newsList',
                // params传参 加问号表示可传可不传
                // path: 'newsDetail/:id/:title?',
                path: 'newsDetail',
                name: 'newsDetail',
                component: () => import('@/components/newsDital.vue'),

                // 将路由收到所有的params参数作为props传递给路由组件
                // props: true

                // 函数写法可以自己决定将什么作为props给路由组件
                props(router) {
                    return router.query

                }

                // 对象写法
                // props: {
                //     id: 1,
                //     title: '默认标题'
                // }
            }
        ]
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/aboutPage.vue')
    }
]

export default routes