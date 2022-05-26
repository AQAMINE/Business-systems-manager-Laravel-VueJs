export default {
    computed: {
        isAdmin() {
            return this.$store.getters.getRole == 'admin' ? true : false;
        },
        isAdminOrEditor() {
            return this.$store.getters.getRole == 'admin' || this.$store.getters.getRole == 'editor' ? true : false;
        }
    }
}