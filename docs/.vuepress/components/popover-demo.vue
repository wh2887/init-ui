<template>
  <div class="popover-wrapper">
    <i-popover position="bottom">
      <template slot="content">
        popover 中的内容
      </template>
      <i-button>下方显示内容</i-button>
    </i-popover>
    <i-popover>
      <template slot="content">
        popover 中的内容
      </template>
      <i-button>点击显示</i-button>
    </i-popover>
    <i-popover trigger="hover">
      <template slot="content">
        popover 中的内容
      </template>
      <i-button>hover 显示内容</i-button>
    </i-popover>
  </div>
</template>

<script>
  import Popover from '../../../src/Popover'
  import Button from '../../../src/Button'

  export default {
    components:{
      'i-popover':Popover,
      'i-button': Button
    }
  }
</script>

<style lang="scss" scoped>

</style>