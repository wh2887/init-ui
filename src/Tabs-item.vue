<template>
  <div class="tabs-item-wrapper">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'InitTabsItem'
  }
</script>

<style lang="scss" scoped>
  .tabs-item-wrapper {
      padding: 0 2em;
  }
</style>