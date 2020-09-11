<template>
  <div class="tabs-head-wrapper" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InitTabsHead',
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (itemName, vm) => {
        let {width, left} = vm.$el.getBoundingClientRect()
        let headLeft =  this.$refs.head.getBoundingClientRect().x
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left - headLeft}px`
      })
    }

  }
</script>

<style lang="scss" scoped>
  $blue: #3eaf7c;
  $tab-height: 40px;
  $border-color: #ddd;
  .tabs-head-wrapper {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $border-color;

    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      transition: all 350ms;
    }

    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1em;
    }
  }
</style>