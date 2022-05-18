<template>
  <router-view/>
</template>


<script>
export default{
  
  created(){
    //auth
    this.$store.dispatch('tryLogin');
  },
  computed:{
    //auth
    didAutoLogout(){
          return this.$store.getters.didAutoLogout;
        },
    //show/hide sideBar and NaveBar
    isAuthenticated(){
          return this.$store.getters.isAuthenticated;
    }
    
  },
  watch:{
    //auth
    didAutoLogout(curValue, oldValue){
        if(curValue && curValue !== oldValue){
          this.$router.replace({name : 'dashboard'}); 
        }
    }
  }
}


</script>

<style scoped>

</style>
