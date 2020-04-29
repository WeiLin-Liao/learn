import VueRouter from 'vue-router'

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            name: 'home',
            path: '/home',
            component: () => import('@/pages/home'),
            meta: {
                index: 1
            }
        },
        {
            name: 'jingxuan',
            path: '/jingxuan',
            component: () => import('@/pages/jingxuan'),
            meta: {
                index: 2
            }
        },
        {
            name: 'faxian',
            path: '/faxian',
            component: () => import('@/pages/faxian'),
            meta: {
                index: 3
            }
        },
        {
            name: 'me',
            path: '/me',
            component: () => import('@/pages/me'),
            meta: {
                index: 4
            }
        }
    ]
})

export default router