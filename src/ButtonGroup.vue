<template>
  <div class="i-button-group">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'ButtonGroup'
  }
</script>

<style lang="scss" scoped>

  .i-button-group{
    display: inline-flex;
    vertical-align: middle;
  }

</style>