<template>
    <div class="row">
        <div class="col-sm-4">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title text-light text-muted">{{title}}</h6>
                    <div class="row">
                        <div class="col-8 containt">
                            <p class="text-light">{{number}} <span>{{change}} This week</span></p> 
                        </div>
                        
                        <div class="col-3 text-center logo">
                            <div>
                                <i class="fa" :class="logo"></i>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['title','number','change','logo']
}
</script>
<style scoped>
.card{
    background-color: #1a1c24;
    border: 1px solid rgb(26 28 36);
    background-clip: border-box;
}
.card-title{
    font-weight: bold;
}
.card .card-body h3{
    font-weight: bold;
}
.card .card-body .containt p{
    font-size: 35px;
    font-weight: bold;
}
.card .card-body .containt p span{
    font-size: 18px;
    color: #0fbe55;
}


.card .card-body .logo div{
    color: #0fbe55 ;
    font-size: 25px;
    padding: 10px;
    background-color: #1d302b ;
    border-radius: 10px;
}
</style>