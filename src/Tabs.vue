<template>
  <div class="tabs-wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'InitTabs',
    data() {
      return {eventBus: new Vue()}
    },
    provide() {
      return {eventBus: this.eventBus}
    },
    created() {
      this.$emit('update:selected', '这是 Tabs组件中 this.$emit 抛出的数据')
      this.eventBus.$emit('update:selected','这是 this.eventBus 抛出来的数据')
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-wrapper {
  }
</style>