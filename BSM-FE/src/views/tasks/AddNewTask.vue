<template>
    <div class="container">
        <base-card>
            <div class="row">
                <div class="col-3" v-if="isAdmin">
                    <router-link :to="{name: 'tasks'}" class="btn btn-success rounded-0">Tasks List <i class="fa fa-list"></i></router-link>
                </div>
            </div>
        </base-card>


        <base-card>
            <div class="row justify-content-center">
                <div class="col-8">
                    <form @submit.prevent="createTask">
                        <h4 class="text-light">Add new task</h4>
                        <hr class="bg-light">
                        <div class="mt-3">
                            <base-spinner v-if="isLodaing"></base-spinner>
                            <div v-else class="form-floating">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example" v-model="form.user_id">
                                <option selected>Select user for this task</option>
                                <option v-for="user in users" :key="user.id" :value="user.id">{{user.firstName}} {{user.lastName}}</option>
                                
                            </select>
                            <label for="floatingSelect" class="text-light">All Users</label>
                            </div>
                        </div>
                        <div class="mt-3">
                            <div class="form-floating">
                                <textarea class="form-control text-light" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" v-model="form.task"></textarea>
                                <label for="floatingTextarea2" class="text-light">Task</label>
                            </div>
                        </div>
                        <div class="mt-3">
                            <div class="form-floating">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example" v-model="form.public">
                                <option value="0">Public</option>
                                <option value="1">Private</option>
                            </select>
                            <label for="floatingSelect" class="text-light">Public (Task for all users)</label>
                            </div>
                        </div>

                        <div class="mt-3">
                            <div class="form-floating">
                                <input type="date" class="form-control" id="floatingInput" v-model="form.lastDate">
                                <label for="floatingInput" class="text-light">Last date</label>
                            </div>
                        </div>
                        <div class="mt-3 mb-3">
                            <button  class="btn btn-success btn-sm rounded-0">Add task</button>
                        </div>
                    </form>
                </div>
            </div>
        </base-card>

    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                user_id: '',
                task:  '',
                public: 0,
                lastDate: ''
            },
            isLodaing: false,
        }
    },
    created(){
        this.loadUsers();
    },
    computed:{
        users(){
            return this.$store.getters['users/users'];
        }
    },
    methods:{
        async loadUsers(){
            this.isLodaing = true;
            await this.$store.dispatch('users/loadUsers');
            this.isLodaing = false;
        },
        createTask(){
            this.$store.commit('tasks/setErrors',false);
            this.$store.dispatch('tasks/createTask' , {
                user_id: this.form.user_id,
                task: this.form.task,
                public: this.form.public,
                lastDate: this.form.lastDate
            })
            if(!this.$store.getters['tasks/errors']){
                this.showAlert('success', 'Task added Successfuly');
                this.$router.replace({name : 'tasks'});
            }else{
                this.showAlert('error', 'Check yourconnection');
            }
        }
    }
    
}
</script>
<style scoped>

.form-select, .form-control{
    background-color: #212529;
    color: white;
}
</style>