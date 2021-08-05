<template>
  <div class="hello">
    <h1>We have experienced an error with code: {{name}}</h1>
  </div>
  <div v-if="name==403">
      It seeems like you are not authorize to access to this resource. Please Relogin as another user. 
      <br>
      <br>
      <br>
      <Button  icon="pi pi-sign-out" label="Logout" @click="logout()"/>
  </div>
</template>

<script>
import ApplicationService from '../ApplicationService';

export default {
  name: 'protectGet',
  
  data() {
    return {
      name: "",
    }
  },
  mounted(){
     this.name = this.$route.query.type;
  },
  methods: {
    logout(){
      ApplicationService.logout();
    }
  }
}
</script>