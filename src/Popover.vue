<template>

  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'InitPopover',
    data() {
      return {
        visible: false
      }
    },
    methods: {
      xxx() {
        this.visible = !this.visible
        console.log('xxx执行了，所以 变为了 true，')
        if (this.visible === true) {
          this.$nextTick(() => {
            let eventHandler = () => {
              this.visible = false
              console.log('document执行了 ， 所以又变为了 false，')
              document.removeEventListener('click', eventHandler)
            }
            document.addEventListener('click', eventHandler)
          })
        }else {
          console.log('vm 隐藏 popover')
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;

    > .content-wrapper {
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid red;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);

    }
  }
</style>