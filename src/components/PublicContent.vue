<template>
  <div class="hello">
    <h1>{{name}}</h1>
  </div>
</template>

<script>
import ApplicationService from '../ApplicationService'
export default {
  name: 'HelloWorld',
  
  data() {
    return {
      name: "",
    }
  },
  mounted(){
      ApplicationService.getPublicContent().then(response=>{
        this.name = response.data;
      })
  }
}
</script>