<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'initRow',
    props: {
      gutter: {
        type: [Number, String]
      },
      align: {
        type: String,
        validator(value) {
          return ['left', 'right', 'center'].includes(value)
        }
      }
    },
    mounted() {
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    },
    computed: {
      rowClass() {
        let {align} = this
        return [align && `align-${align}`]
      },
      rowStyle() {
        let {gutter} = this
        return {
          marginLeft: -gutter / 2 + 'px',
          marginRight: -gutter / 2 + 'px'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    display: flex;

    &.align-left {
      justify-content: flex-start;
    }

    &.align-right {
      justify-content: flex-end;
    }

    &.align-center {
      justify-content: center;
    }
  }
</style>