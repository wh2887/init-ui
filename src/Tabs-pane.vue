<template>
  <div class="tabs-pane-wrapper">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'InitTabsPane',
    inject: ['eventBus'],
    props: {
      name: {
        type: [String, Number],
        required: true
      }
    },
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