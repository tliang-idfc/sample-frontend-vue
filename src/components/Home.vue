<template>
  <div class="hello">
    <div v-if="name">
    <h1 >Hello! {{name}}</h1>
    </div>
    <div v-else>
      <h1> Please Login to the system to access protected features</h1>
      <Button @click="login" label="Login" icon="pi pi-sign-in" />
    </div>
  </div>
</template>

<script>
import ApplicationService from '../ApplicationService';

export default {
  name: 'HelloWorld',
  
  data() {
    return {
      name: null,
      showName: false,
    }
  },
  mounted(){
      this.name = localStorage.getItem("sub");
  },
  methods: {
    login(){
      ApplicationService.getProfile();
    }
  }
}
</script>