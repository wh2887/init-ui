<template>
  <div class="content-wrapper">
    <slot />
  </div>
</template>

<script>
  export default {
    name:'InitContent'
  }

</script>

<style lang="scss" scoped>
  .content-wrapper{
    flex-grow: 1;
  }

</style>