import { createStore } from 'vuex'
import authModule from './modules/auth/index'
import tasksModule from './modules/tasks/index'
import usersModule from './modules/users/index'

export default createStore({
    state: { id: 1 },
    mutations: {},
    actions: {},
    modules: {
        auth: authModule,
        tasks: tasksModule,
        users: usersModule
    }
})