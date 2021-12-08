export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "AuthLayout" */ '@/modules/auth/layouts/AuthLayout.vue'),
    children: [
        {
            path: '',
            name: 'login',
            component: () => import(/* webpackChunkName: "AuthLogin" */ '@/modules/auth/views/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName: "AuthRegister" */ '@/modules/auth/views/Register.vue')
        }
    ]
}