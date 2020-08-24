<template>
  <button class="i-button" :class="{[`icon-${iconPosition}`]:true}"
          @click="xxx"
  >
    <i-icon v-if="!loading" class="icon" :icon-name="icon"></i-icon>
    <i-icon class="loading" v-if="loading" icon-name="loading"></i-icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>

<script lang="js">
  import Icon from './Icon'

  export default {
    components: {
      'i-icon': Icon
    },
    name: 'Button.vue',
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right'
        }
      }
    },
    methods: {
      xxx(e) {
        console.log(e)
        this.$emit('click')
        let inX = e.clientX - e.target.offsetLeft
        let inY = e.clientY - e.target.offsetTop
        let button = document.querySelector('.i-button')
        if (e) {
          document.styleSheets[1].addRule('.i-button::after', 'display:block')
        }
      },
      yyy() {
      }
    }
  }
</script>

<style lang="scss">
  @keyframes spin {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }

  .i-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    &:after {
      content: 'xxx';
      color: red;
      display: none;
    }

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      border-color: var(--border-active-bg);
    }

    &:focus {
      outline: none;
    }

    > .icon {
      margin-right: .1em;
      order: 1;
    }

    > .loading {
      animation: spin 1s infinite linear;
    }

    > .content {
      line-height: 1em;
      order: 2;
    }

    &.icon-right {
      > .icon {
        margin-right: 0;
        margin-left: .1em;
        order: 2;
      }

      > .content {
        line-height: 1em;
        order: 1;
      }

    }

  }

</style>