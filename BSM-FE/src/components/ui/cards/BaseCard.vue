<template>
    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title text-light text-muted">{{title}}</h5>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:['title']
}
</script>

<style scoped>
.card{
    background-color: #1a1c24;
    border: 1px solid rgb(26 28 36);
    background-clip: border-box;
}
.card-title{
    
    font-weight: bold !important;
}
</style>