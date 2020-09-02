<template>
  <div class="tabs-pane-wrapper">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'InitTabsPane',
    inject: ['eventBus'],
    created() {
      this.eventBus.$on('update:selected', (name) => {
        console.log(name)
      })
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-pane-wrapper {

  }
</style>