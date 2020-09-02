<template>
  <div class="tabs-head-wrapper">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InitTabsHead'
  }
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  .tabs-head-wrapper {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;

    > .actions-wrapper {
      margin-left: auto;
      margin-right: 2em;
    }


  }

</style>