<template>
  <div class="toast-wrapper" ref="wrapper" :class="toastClasses">
    <div class="toast-message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="toast-line" ref="line"></div>
    <span class="toast-close" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>
<script>

  // TODO
  // import Vue from 'vue'
  // Vue.prototype.$toast = function () {
  //   console.log('$toast')
  // }
  export default {
    name: 'InitToast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 60
      },
      closeButton: {
        type: Object,
        default() {
          return {
            text: '关闭',
            callback: undefined
          }
        }

        // TODO
        // prop 接收一个对象 如果直接写对象，会引发一个问题：
        // 一个项目中有好几个地方都用到了这个组件，那么会被同时修改。
        // 解决办法： 改成函数形式，return 一个对象。 看上面！
        // default: {
        //   text: '关闭',
        //   callback: undefined
        // }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'middle', 'bottom'].indexOf(value) >= 0
        }
      }
    },
    mounted() {
      this.updateStyles()
      this.execAutoClose()
    },
    computed: {
      toastClasses() {
        return {
          [`position-${this.position}`]: true
        }
      }
    },
    methods: {
      close() {
        this.$el.remove()
        this.$emit('beforeClose')
        this.$destroy()
      },
      updateStyles() {
        this.$nextTick(() => {
          this.$refs.line.style.height =
            `${this.$refs.wrapper.getBoundingClientRect().height}px`
        })
      },
      execAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      log() {
        console.log('测试 Toast 中 onClickClose 事件的 callback,如果要使用就传入 toast，然后toast.log()即可')
      },
      onClickClose() {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  $toast-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
  $toast-radius: 4px;
  $space-between: 16px;
  @keyframes fade-in {
    0% {opacity: 0;transform: translateY(100%)}
    100% {opacity: 1;transform: translateY(0%)}
  }

  .toast-wrapper {
    animation: fade-in 1s;
    font-size: $font-size;
    min-height: $toast-min-height;
    line-height: 1.8em;
    background: $toast-bg;
    box-shadow: $toast-box-shadow;
    padding: 0 $space-between;
    border-radius: $toast-radius;
    color: white;
    display: flex;
    align-items: center;
    position: fixed;
    left: 50%;

    &.position-top {
      top: 0;
      transform: translateX(-50%);
    }

    &.position-middle {
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.position-bottom {
      bottom: 0;
      transform: translateX(-50%);
    }

    .toast-message {
      padding: $space-between/2 0;
    }

    .toast-line {
      height: 100%;
      border-left: 1px solid #666666;
      margin-left: $space-between;
    }

    .toast-close {
      padding-left: $space-between;
      flex-shrink: 0;
    }
  }
</style>