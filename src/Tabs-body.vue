<template>
  <div class="tabs-body-wrapper">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'InitTabsBody',
    inject: ['eventBus'],
    created() {
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-body-wrapper {

  }
</style>