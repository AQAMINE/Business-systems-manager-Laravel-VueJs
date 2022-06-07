<template>
    <div class="container">
        <base-card v-if="isAdmin"><button class="btn btn-success btn-sm rounded-0">Add New Task</button></base-card>
        <div class="row">
            <base-task 
            v-for="task in tasks"
            :key="task.id"   
            :user = "task.user"       
            :lastDate = "task.lastDate"
            :createdDate = "task.created_at"
            :task = "task.task"
            :id = "task.id"
            ></base-task>
        </div>
    </div>
</template>

<script>
import BaseTask from './../../components/tasks/BaseTask.vue';
export default {
    components:{
    BaseTask,
    
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