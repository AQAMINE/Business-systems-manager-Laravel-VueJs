export default {
    async loadUsers(context) {
        const url = this.$app_url + '/api/v1/users';
        await window.axios.get(url).then(response => {

            const users = [];
            const responsData = response.data.data;

            for (const key in responsData) {
                const user = {
                    id: responsData[key].id,
                    firstName: responsData[key].firstName,
                    lastName: responsData[key].lastName,
                }

                users.push(user);
            }
            context.commit('setUsers', users);

        })

    }
}