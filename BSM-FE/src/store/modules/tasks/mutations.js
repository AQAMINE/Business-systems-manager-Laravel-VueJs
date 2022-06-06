export default {
    setTask(state, payload) {
        state.tasks = payload;
    },
    setErrors(state, payload) {
        state.errors = payload;
    }
}