import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

export default {
    namespaced: true,
    state: {
        tasks: [{}],
        errors: false,
        success: null,
        deletedItem: null
    },
    mutations,
    actions,
    getters
}