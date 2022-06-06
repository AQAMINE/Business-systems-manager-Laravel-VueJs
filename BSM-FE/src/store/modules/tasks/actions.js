export default {
    async loadUserTasks(context) {
        const userId = localStorage.getItem('userId');
        const url = this.$app_url + '/api/v1/tasks/' + userId;
        await window.axios.get(url).then(response => {
            const tasksData = response.data.data;
            context.commit('setTask', tasksData);

        }).catch(errors => context.commit('setErrors', errors));


    }
}