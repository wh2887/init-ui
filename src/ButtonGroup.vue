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

<style lang="scss">

  .i-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .i-button{
      border-radius: 0;
      &:first-child{
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child{
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }
  }

</style>