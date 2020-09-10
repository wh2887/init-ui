<template>
  <button class="i-button" :class="{[`icon-${iconPosition}`]:true}"
          @click="$emit('click')"
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
    name: 'InitButton',
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
  }
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $button-height: 32px;
  $button-bg: white;
  $button-active-bg: #eee;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;


  @keyframes spin {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }

  .i-button { font-size: $font-size; height: $button-height; padding: 0 1em;
    border-radius: $border-radius; border: 1px solid $border-color; background: $button-bg;
    display: inline-flex; justify-content: center; align-items: center;
    vertical-align: middle;

    &:after { content: ''; color: red; display: none; }

    &:hover { border-color: $border-color-hover; }

    &:active { border-color: $border-color; }

    &:focus { outline: none; }

    > .content { line-height: 1em; order: 2; }
    > .icon { margin-right: .1em; order: 1; }

     .loading { animation: spin 1s infinite linear; }


    &.icon-right {
      > .icon { margin-right: 0; margin-left: .1em; order: 2; }

      > .content { line-height: 1em; order: 1; }
    }
  }

</style>