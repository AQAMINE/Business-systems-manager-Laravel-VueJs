export default {
    setTask(state, payload) {
        state.tasks = payload;
    },
    setErrors(state, payload) {
        state.errors = payload;
    },
    setSuccess(state, payload) {
        state.success = payload;
    },
    setDeletedItem(state, payload) {
        state.deletedItem = payload;
    }
}