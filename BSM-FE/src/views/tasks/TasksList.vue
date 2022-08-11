<template>
    <div class="container">
        <base-card>
            <div class="row">
                <div class="col-3" v-if="isAdmin">
                    <router-link :to="{name: 'addTask'}" class="btn btn-success rounded-0">Add New Task <i class="fa fa-plus"></i></router-link>
                </div>
                <div class="col-3"> 
                    <button to="" @click="loadTasks" class="btn btn-danger rounded-0  position-relative">
                        Undone tasks
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {{undoneTasksCounter}}+
                            <span class="visually-hidden">Undone tasks</span>
                        </span>
                    </button>
                </div>
                <div class="col-3">
                    <button @click="loadTasks(true)" class="btn btn-success rounded-0  position-relative">
                        Tasks Done
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                            {{taskDone}}+
                            <span class="visually-hidden">Tasks Dones</span>
                        </span>
                    </button>
                </div>
            </div>
        </base-card>

        <edit-task></edit-task>
        
        <delete-dialog 
        :title="'Warning!'" 
        :content="'Sure you want to delete this task?'" 
        :btnType="'btn-danger'"
        :confirmBtnText ="'Delete Task'"
        @deleteItem ="deleteTask"
        ></delete-dialog>

        <base-placeholder v-if="isLoading" class="mt-5" ></base-placeholder>
        <div class="row" v-else>
            <base-task 
            v-for="task in tasks"
            :key="task.id"   
            :user = "task.user"       
            :lastDate = "task.lastDate"
            :createdDate = "task.created_at"
            :task = "task.task"
            :id = "task.id"
            :taskState = "task.complated"
            @reLoadTasks = "loadTasks"
            ></base-task>
        </div>
    </div>
</template>

<script>
import BaseTask from './../../components/tasks/BaseTask.vue';
import DeleteDialog  from '../../components/ui/dialogue/DeleteDialogue.vue';
import EditTask from './../../components/tasks/ui/EditDialog.vue'
export default {
    components:{
    BaseTask,
    DeleteDialog,
    EditTask
    
},
    data(){
    return{
        tasks: [],
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
        undoneTasksCounter(){
            return this.undoneTasks.length;
        },
        taskDone(){
            return this.$store.getters['tasks/tasks'].length - this.undoneTasksCounter;
        }
    },
    created(){
        this.loadTasks();
    },
    methods:{
        async loadTasks(state = false){
            this.isLoading = true;
            await this.$store.dispatch('tasks/loadUserTasks');
            this.getTasks(state);
            this.isLoading = false;
        },
        getTasks(state = true){
            const complatedTasks = [];
            const incompleteTasks = [];
            const tasks = this.$store.getters['tasks/tasks'];

            for (const key  in tasks){
                if(tasks[key].complated == true){
                    complatedTasks.push({...tasks[key]});
                }else{
                    incompleteTasks.push({...tasks[key]});
                }
            }
            return state == true ? this.tasks = complatedTasks : this.tasks = incompleteTasks;
        },
        async deleteTask(){
            const taskId = this.$store.getters['tasks/deletedItem'];
            await this.$store.dispatch('tasks/deleteTask' , taskId);
            this.showAlert('success', 'Task Deleted!');
            this.$store.commit('tasks/setDeletedItem' , null);
            this.loadTasks();
        },
        showEditData(id,userId,task,lastDate,privacy){
            return console.log(id + ' ' + userId + ' ' + task + ' ' + lastDate + ' '  + privacy);
        }
    }
}
</script>