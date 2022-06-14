export default {
    async loadUserTasks(context) {
        const userId = localStorage.getItem('userId');
        const url = this.$app_url + '/api/v1/tasks/' + userId;
        await window.axios.get(url).then(response => {
            const tasksData = response.data.data;
            context.commit('setTask', tasksData);

        }).catch(errors => context.commit('setErrors', errors));
    },
    async taskStateChenge(context, payload) {
        const url = this.$app_url + '/api/v1/tasks/taskState/' + payload.id;
        await window.axios.patch(url).then(response => {
            context.commit('setSuccess', response.data);
        }).catch(errors => context.commit('setErrors', errors));
    },
    async deleteTask(context, payload) {
        const url = this.$app_url + '/api/v1/tasks/' + payload.id;
        await window.axios.delete(url).catch(errors => context.commit('setErrors', errors));

    }
}