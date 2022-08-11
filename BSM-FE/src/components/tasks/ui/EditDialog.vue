<template>
    <div class="modal fade" id="editTskDaialogue" tabindex="-1" aria-labelledby="editTskDaialogueLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content text-light rounded-0">
      <form>
        <div class="modal-header">
          <h5 class="modal-title" id="editTskDaialogueLabel">Edit Taask</h5>
          <!-- <button type="button" class="btn-close rounded-0 btn-sm" data-bs-dismiss="modal" aria-label="Close"></button> -->
        </div>
        <div class="modal-body">
          <!--Starat Edit Form-->
              <base-card>
                <div class="row justify-content-center">
                            <div class="">
                                <base-spinner v-if="isLodaing"></base-spinner>
                                <div v-else class="form-floating">
                                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected>Select user for this task</option>
                                    <option v-for="user in users" :key="user.id" :value="user.id">{{user.firstName}} {{user.lastName}}</option>
                                    
                                </select>
                                <label for="floatingSelect" class="text-light">All Users</label>
                                </div>
                            </div>
                            <div class="mt-3">
                                <div class="form-floating">
                                    <textarea class="form-control text-light" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" ></textarea>
                                    <label for="floatingTextarea2" class="text-light">Task</label>
                                </div>
                            </div>
                            <div class="mt-3">
                                <div class="form-floating">
                                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option value="0">Public</option>
                                    <option value="1">Private</option>
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
                </div>
            </base-card>
          <!--End Edit Form-->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-sm rounded-0" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-sm btn-primary rounded-0" data-bs-dismiss="modal" >Edit Tasl</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>


<script>
export default {
  data(){
    return{
      isLodaing: false
    }
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
        }
  },created(){
        this.loadUsers();
    },
}


</script>
<style scoped>
.modal-content{
    background-color: #1a1c24;
    border: 1px solid rgb(26 28 36);
    background-clip: border-box;
    
}
.form-select, .form-control{
    background-color: #212529;
    color: white;
}
</style>