<template>
  <div class="input-wrapper">
    <i-input></i-input>
    <i-input disabled></i-input>
    <i-input readonly></i-input>
    <i-input error="错误信息"></i-input>
    <br>
    <i-input :value="xxx"></i-input>
    <br>
    <span>value:&nbsp;{{xxx}}</span>
  </div>
</template>

<script>
  import Input from '../../../src/Input'

  export default {
    data(){
      return{ xxx:'双向绑定' }
    },
    components: { 'i-input': Input }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";

  .input-wrapper {
    padding-top: $wrapper-top;
  }
</style>