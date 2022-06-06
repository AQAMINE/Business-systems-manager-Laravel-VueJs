<template>
  <div class="home">
    <div class="row">
      <analytical-card class="col" title="Users Registered" number="56" change="+12" logo="fa-users"></analytical-card>
      <analytical-card class="col" title="Uncompleted Tasks" number="10" change="+4" logo="fa-list-check"></analytical-card>
      <analytical-card class="col" title="This Week Orders" number="300" change="+200" logo="fa-boxes-stacked"></analytical-card>
    </div>
    
    <base-card title="This the base card">hello </base-card>
    <button @click="testIt">click me to get id</button>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return {
      
    }
  },
  methods:{
    testIt(){
      this.$store.dispatch('tasks/loadUserTasks');
    }
  }
}
</script>
