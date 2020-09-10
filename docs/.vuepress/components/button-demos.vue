<template>
  <div class="button-wrapper">
    <i-button>默认按钮</i-button>
    <i-button icon="settings">默认按钮</i-button>
    <i-button icon="settings" icon-position="right">默认按钮</i-button>
    <i-button :loading="true">默认按钮</i-button>
    <i-button disabled>默认按钮</i-button>
  </div>
</template>

<script>
  import Button from '../../../src/Button'

  export default {
    components: {
      'i-button': Button,
    },
  }

</script>

<style lang="scss" scoped>
  .button-wrapper{
    padding: 0 10px;
  }
</style>