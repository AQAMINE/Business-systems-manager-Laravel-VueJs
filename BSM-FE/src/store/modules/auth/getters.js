export default {
    user(state) {
        return state.user;
    },
    userId(state) {
        return state.userId;
    },
    getRole(state) {
        return state.role;
    },
    getErrors(state) {
        return state.errors;
    },
    token(state) {
        return state.token;
    },
    isAuthenticated(state) {
        //!! to convert value to a boolen 
        return !!state.token;
    },
    didAutoLogout(state) {
        return state.didAutoLogout;
    }
}