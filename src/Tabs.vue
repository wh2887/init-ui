<template>
  <div class="tabs-wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'InitTabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {eventBus: new Vue()}
    },
    provide() {
      return {eventBus: this.eventBus}
    },
    mounted() {
      if (this.$children.length === 0) {
        console && console.warn && console.warn('i-tabs 组件必须有子组件！')
      }
      this.$children && this.$children.forEach((vm) => {
        if (vm.$options.name === 'InitTabsHead') {
          vm.$children.forEach((childVm) => {
            if (childVm.$options.name === 'InitTabsItem' && childVm.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-wrapper {
  }
</style>