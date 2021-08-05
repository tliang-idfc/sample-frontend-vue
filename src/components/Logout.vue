<template>
  <div class="hello">
    <h1>You have successfully logged off.</h1>
  </div>
  <div>
     Login again to the system. 
      <br>
      <br>
      <br>
      <Button  icon="pi pi-sign-in" label="Login" @click="login()"/>
  </div>
</template>

<script>
import ApplicationService from '../ApplicationService'
export default {
  name: 'protectGet',
  
  data() {
    return {
      name: "",
    }
  },
  mounted(){
      ApplicationService.logout();
  },
  methods: {
    login(){
      ApplicationService.getProfile().then(response=>{
              this.name = response.data;
            })
    }
  }
}
</script>