<template>
    <div class="col-lg-3 col-md-6 col-ms-12">
        <div class="card text-light mt-2  " style="width: 18rem;">
        <base-spinner v-if="isLoading"></base-spinner>
            <div class="card-body" v-else>
                <h6 class="card-title mb-3"> <img class="rounded avatar" :src="profilePicture" alt=""> {{fullName}} </h6>
                <hr>
                <h6 class="card-subtitle mb-2 createdDate"><i class="fa fa-calendar-days"></i> Create At {{createdDate}}</h6>
                <h6 class="card-subtitle mb-2 lastDate"><i class="fa fa-calendar-xmark"></i> Last Date {{lastDate}}</h6>
                <p class="card-text">{{task}}</p>
                <hr>
                <div class="text-right action-btn">
                    <a v-if="isAdmin" class="btn btn-danger btn-sm rounded-0  " data-bs-toggle="modal" data-bs-target="#deleteDialogue" @click="setDeleteTaskId">Delete <i class="fa fa-trash-can"></i></a>
                    <a v-if="isAdmin" class="btn btn-success btn-sm rounded-0 ">Edit <i  class="fa fa-edit"></i></a>
                    <a v-if="taskState" class="btn btn-warning btn-sm rounded-0 " @click="taskStateChenge">Undone <i class="fa fa-hourglass"></i></a>
                    <a v-else class="btn btn-success btn-sm rounded-0" @click="taskStateChenge">Done <i class="fa fa-check"></i></a></div>
                
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props:['user', 'lastDate', 'createdDate', 'task', 'id','taskState'],
    emits:['reLoadTasks'],
    data(){
        return{
            isLoading: false
        }
    },
    computed:{
        fullName(){
            const convertedUser = { ...this.user};
            return convertedUser.firstName + ' ' + convertedUser.lastName;
        },
        profilePicture(){
            const convertedUser = {...this.user};
            return convertedUser.profilePicture;
        }
    },
    methods:{
        async taskStateChenge(){
            this.isLoading = true;
            await this.$store.dispatch('tasks/taskStateChenge' , {id: this.id});
            this.isLoading = false;
            this.reLoadTasks();
            this.showAlert('success', this.$store.getters['tasks/success']);
        },
        async reLoadTasks(){
            await this.$emit('reLoadTasks');
        },
        setDeleteTaskId(){
            this.$store.commit('tasks/setDeletedItem' , {id: this.id});
        }
    }
}
</script>
<style scoped>

.card{
    background-color: #1a1c24;
    border: 1px solid rgb(26 28 36); 
    

}
.avatar{
    max-height: 30px;

}
.lastDate{
    color: #eb2020c2;
    font-size:12px;
    font-weight: bold !important;
}
.createdDate{
    color: gray;
    font-size: 12px;
}
.card-text{
    background-color: #ffffff2e;
    padding: 5px !important;
    border-radius: 5px;
}
.action-btn a{
    margin-left: 5px !important;
}
</style>