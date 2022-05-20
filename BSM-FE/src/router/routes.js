// import dashboardPage from '../views/dashboardPage.vue';

const DashboardPage = () =>
    import ('../views/DashboardPage.vue');

const login = () =>
    import ('../views/auth/LoginPage.vue');

const register = () =>
    import ('../views/auth/RegisterPage.vue');
const settings = () =>
    import ('../views/settings/SettingsPage.vue');

const routes = [{
        path: '/',
        redirect: '/dashboard'
    },
    {
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
        path: '/settings',
        component: settings,
        name: 'settings',
        meta: { requiresAuth: true }
    },
    {
        path: '/dashboard',
        component: DashboardPage,
        name: 'dashboard',
        meta: { requiresAuth: true }
    },
]
export default routes