<template>
  <div class="home">
    <analytical-card title="Users registered" number="22" change="+4" logo="fa-users"></analytical-card>
    <base-card title="This the base card">hello </base-card>
    <button @click="testToken">ClickMe</button>
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
    testToken(){
      console.log(this.$config.app_url + '/api/v1/tasks');
      window.axios.get(this.$config.app_url + '/api/v1/tasks').then(response  => {
        console.log(response.data);
      })
    }
  }
}
</script>
