<template>
  <div class="layout-wrapper" :class="layoutClass">
    <slot/>
  </div>
</template>

<script>

  export default {
    name: 'InitLayout',
    data() {
      return {
        layoutClass: {
          hasSider: false
        }
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        if (vm.$options.name === 'InitSider') {
          this.layoutClass.hasSider = true
        }
      })
    }
  }

</script>

<style lang="scss" scoped>
  .layout-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.hasSider{
      flex-direction: row;
    }
  }

</style>