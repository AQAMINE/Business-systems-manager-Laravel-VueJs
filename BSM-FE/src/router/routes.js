// import dashboardPage from '../views/dashboardPage.vue';

const DashboardPage = () =>
    import ('../views/DashboardPage.vue');

const login = () =>
    import ('../views/auth/LoginPage.vue');

const register = () =>
    import ('../views/auth/RegisterPage.vue');

const routes = [{
        path: '/auth/login',
        name: 'login',
        component: login,
        meta: { requiresUnauth: true }
    },
    {
        path: '/auth/register',
        name: 'register',
        component: register,
        meta: { requiresUnauth: true }
    },
    {
        path: '/',
        name: 'dashboard',
        component: DashboardPage,
        meta: { requiresAuth: true }
    },
]
export default routes