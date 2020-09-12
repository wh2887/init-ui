<template>
  <div class="single-wrapper">
    <i-collapse :selected.sync="selected" single>
      <i-collapse-item title="标题1" name="1">1</i-collapse-item>
      <i-collapse-item title="标题2" name="2">2</i-collapse-item>
      <i-collapse-item title="标题3" name="3">3</i-collapse-item>
    </i-collapse>
  </div>
</template>

<script>
  import Collapse from '../../../src/Collapse'
  import CollapseItem from '../../../src/Collapse-item'

  export default {
    components:{
      'i-collapse': Collapse,
      'i-collapse-item': CollapseItem,
    },
    data(){
      return{
        selected : ['1']
      }
    },
  }
</script>

<style lang="scss" scoped>
.single-wrapper{
  padding: 10px 0;
}
</style>