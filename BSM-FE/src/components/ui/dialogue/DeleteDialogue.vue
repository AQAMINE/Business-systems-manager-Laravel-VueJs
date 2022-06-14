<template>

<!-- Modal -->
<div class="modal fade" id="deleteDialogue" tabindex="-1" aria-labelledby="deleteDialogueLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content text-light rounded-0">
      <div class="modal-header">
        <h5 class="modal-title" id="deleteDialogueLabel">{{title}}</h5>
        <!-- <button type="button" class="btn-close rounded-0 btn-sm" data-bs-dismiss="modal" aria-label="Close"></button> -->
      </div>
      <div class="modal-body">
        {{content}}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary btn-sm rounded-0" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-sm rounded-0" data-bs-dismiss="modal" :class="btnType" @click="deleteData">{{confirmBtnText}}</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>


export default {
    props:['title', 'content' , 'btnType' , 'confirmBtnText'],
    emits:['deleteItem'],
    methods:{
      deleteData(){
        this.$emit('deleteItem');
      }
    }
}
</script>
<style scoped>
.modal-content{
    background-color: #1a1c24;
    border: 1px solid rgb(26 28 36);
    background-clip: border-box;
    
}
/* .btn-close{
  color: white;
  background-color: white;
} */
</style>