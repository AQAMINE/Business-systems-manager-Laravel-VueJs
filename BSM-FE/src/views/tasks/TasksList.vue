<template>
    <div class="container">
        <base-card>
            <div class="row">
                <div class="col-3" v-if="isAdmin">
                    <button class="btn btn-success btn-sm rounded-0">Add New Task <i class="fa fa-plus"></i></button>
                </div>
                <div class="col-3">
                    <h6 class="text-light"><span class="badge bg-secondary">Total tasks: {{totalTasks}}</span> </h6>
                </div>
                <div class="col-3">
                    <h6 class="text-light badge bg-danger">Undone tasks: {{undoneTasksCounter}}</h6>
                </div>
                <div class="col-3">
                    <h6 class="text-light badge bg-success">Tasks Done: {{taskDone}}</h6>
                </div>
            </div>
        
        
        </base-card>
        <base-placeholder v-if="isLoading" class="mt-5" ></base-placeholder>
        <div class="row" v-else>
            <base-task 
            v-for="task in undoneTasks"
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
    data(){
    return{
        isLoading : false
    }
}
,
    computed:{
        undoneTasks(){
            const  result  = [];
            const tasks = this.$store.getters['tasks/tasks'];
            for (const key  in tasks){
                if(tasks[key].complated == false){
                    result.push(tasks[key])
                }
            }
            
            return result;
        },
        totalTasks(){
            return this.$store.getters['tasks/tasks'].length;
        },
        undoneTasksCounter(){
            return this.undoneTasks.length;
        },
        taskDone(){
            return this.totalTasks - this.undoneTasksCounter;
        }
    },
    created(){
        this.loadTasks();
    },
    methods:{
        async loadTasks(){
            this.isLoading = true;
            await this.$store.dispatch('tasks/loadUserTasks');
            this.isLoading = false;
        }
    }
}
</script>