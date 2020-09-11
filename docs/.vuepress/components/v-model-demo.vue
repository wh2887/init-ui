<template>
  <div class="input-wrapper">
    <i-input v-model="value"></i-input>
    <br>
    value:{{value}}
  </div>
</template>

<script>
  import Input from '../../../src/Input'

  export default {
    components:{
      'i-input':Input
    },
    data(){
      return{
        value:'双向绑定'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";
.input-wrapper{
  padding-top: $wrapper-top;
}
</style>