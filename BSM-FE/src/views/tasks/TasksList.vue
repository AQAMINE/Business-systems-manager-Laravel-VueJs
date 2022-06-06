<template>
    <div class="container">
        <div class="row">
            <base-task v-for="task in tasks"
            :key="task.id"
            :avatar="task.user.profilePicture"
            :firstName = "task.user.firstName"
            :lastName = "task.user.lastName"
            :lastDate = "task.lastDate"
            :createdDate = "task.created_at"
            :task = "task.task"
            :id = "task.id"
            ></base-task>
        </div>
    </div>
</template>

<script>
import BaseTask from './../../components/tasks/BaseTask.vue'
export default {
    components:{
        BaseTask
    },
    computed:{
        tasks(){
            return this.$store.getters['tasks/tasks'];
        }
    },
    created(){
        this.loadTasks();
    },
    methods:{
        async loadTasks(){
            await this.$store.dispatch('tasks/loadUserTasks');
        }
    }
}
</script>