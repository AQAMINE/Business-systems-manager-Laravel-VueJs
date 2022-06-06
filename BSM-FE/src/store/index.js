import { createStore } from 'vuex'
import authModule from './modules/auth/index'
import tasksModule from './modules/tasks/index'

export default createStore({
    state: { id: 1 },
    mutations: {},
    actions: {},
    modules: {
        auth: authModule,
        tasks: tasksModule,
    }
})