<template>
    <div class="container text-center">
        <div class="spinner-grow " :class="color" role="status" style="width: 3rem; height: 3rem;">
        <span class="sr-only">Loading...</span>
</div>
    </div>
</template>

<script>
export default {
    props:['color']
}
</script>