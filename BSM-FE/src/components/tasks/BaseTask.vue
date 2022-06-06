<template>
    <div class="col-lg-3 col-md-6 col-ms-12">
        <div class="card text-light mt-2 " style="width: 18rem;">
            <div class="card-body">
                <h6 class="card-title mb-3"> <img class="rounded avatar" :src="avatar" alt=""> {{firstName}} {{lastName}}</h6>
                <hr>
                <h6 class="card-subtitle mb-2 createdDate"><i class="fa fa-calendar-days"></i> Create At {{createdDate}}</h6>
                <h6 class="card-subtitle mb-2 lastDate"><i class="fa fa-calendar-days"></i> Last Date {{lastDate}}</h6>
                <p class="card-text">{{task}}</p>
                <hr>
                <div class="text-right"><a class="btn btn-danger btn-sm rounded-0 pull-left">Delete <i class="fa fa-trash-can"></i></a> <a class="btn btn-success btn-sm rounded-0 pull-left">Done <i class="fa fa-check"></i></a></div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['firstName', 'lastName','lastDate', 'createdDate', 'task', 'avatar', 'id'],
    computed:{
        
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
</style>