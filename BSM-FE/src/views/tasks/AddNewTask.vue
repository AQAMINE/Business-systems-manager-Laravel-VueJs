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
                    <form action="">
                        <h4 class="text-light">Add new task</h4>
                        <hr class="bg-light">
                        <div class="mt-3">
                            <div class="form-floating">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option selected>Select user for this task</option>
                                <option value="1">amine aqebli</option>
                                <option value="2">kamal aqebli</option>
                                <option value="3">tariq aqebli</option>
                            </select>
                            <label for="floatingSelect" class="text-light">All Users</label>
                            </div>
                        </div>
                        <div class="mt-3">
                            <div class="form-floating">
                                <textarea class="form-control text-light" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                                <label for="floatingTextarea2" class="text-light">Task</label>
                            </div>
                        </div>
                        <div class="mt-3">
                            <div class="form-floating">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option value="0">Private</option>
                                <option value="1">Public</option>
                            </select>
                            <label for="floatingSelect" class="text-light">Public (Task for all users)</label>
                            </div>
                        </div>

                        <div class="mt-3">
                            <div class="form-floating">
                                <input type="date" class="form-control" id="floatingInput">
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
            
        }
    },
    
}
</script>
<style scoped>

.form-select, .form-control{
    background-color: #212529;
    color: white;
}
</style>