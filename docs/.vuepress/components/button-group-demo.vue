<template>
  <div class="group-wrapper">
    <i-button-group>
      <i-button>默认按钮</i-button>
      <i-button>默认按钮</i-button>
      <i-button>默认按钮</i-button>
    </i-button-group>
  </div>
</template>

<script>
  import ButtonGroup from '../../../src/ButtonGroup'
  import Button from '../../../src/Button'
  export default {
    components:{
      'i-button':Button,
      'i-button-group':ButtonGroup
    }
  }
</script>
<style lang="scss" scoped>
  @import "../styles/helper";
  .group-wrapper{
    padding-top: $wrapper-top;
  }
</style>