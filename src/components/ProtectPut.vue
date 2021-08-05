<template>
  <div class="hello">
    <h1>Please enter your content here: </h1>
  </div>

  <div class="p-pb-4">
    <span class="p-float-label" style="padding-buttom:30px;">
    <InputText id="username" type="text" v-model="putData" />
    <label for="username">Enter Text</label>
  </span>
  </div>
  <div>
    <Button label="Send" @click="submit()"/>
  </div>

  <div> 
    <h4 v-if="name">{{name}}</h4>
  </div>
</template>

<script>
import ApplicationService from '../ApplicationService'
export default {
  name: 'protectGet',
  
  data() {
    return {
      name: null,
      putData: null,
    }
  },
  methods: {
    submit(){
      ApplicationService.putSample(this.putData).then(response=> this.name = response.data);
    }
  }
}
</script>