<template>
  <div class="toast-wrapper">
    <slot></slot>
  </div>
</template>
<script>
  // import Vue from 'vue'
  // Vue.prototype.$toast = function () {
  //   console.log('$toast')
  // }
  export default {
    name: 'InitToast'
  }
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  $toast-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
  $toast-radius: 4px;
  .toast-wrapper {
    font-size: $font-size;
    height: $toast-height;
    line-height: 1.8em;
    background: $toast-bg;
    box-shadow: $toast-box-shadow;
    padding: 0 16px;
    border-radius: $toast-radius;
    color: white;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
</style>