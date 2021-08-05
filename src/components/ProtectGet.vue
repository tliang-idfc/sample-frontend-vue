<template>
  <div class="hello">
    <h1>{{name}}</h1>
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
      ApplicationService.getSample().then(response=>{
        this.name = response.data;
      })
  }
}
</script>