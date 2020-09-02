<template>
  <div class="tabs-head-wrapper">
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
    created() {
      this.eventBus.$on('update:selected', (itemName,vm) => {
        console.log(itemName,vm.$el)
      })
    }

  }
</script>

<style lang="scss" scoped>
  $blue: blue;
  $tab-height: 40px;
  .tabs-head-wrapper {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    position: relative;

    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      width: 100px;
    }

    > .actions-wrapper {
      margin-left: auto;
      margin-right: 2em;
    }


  }

</style>