<template>
  <svg class="icon" aria-hidden="true" v-if="iconName">
    <use :xlink:href=" `#icon-${iconName}` "></use>
  </svg>
</template>

<script>
  import './svg.js'

  export default {
    name: 'InitIcon',
    props: ['iconName']
  }
</script>

<style lang="scss" scoped>

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
  }

</style>