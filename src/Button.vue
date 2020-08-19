<template>
  <div>
    <button class="i-button" :class="{[`icon-${iconPosition}`]:true}">
      <i-icon v-if="icon" class="icon" :icon-name="icon"></i-icon>
      <div class="content">
        <slot/>
      </div>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Button.vue',
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right';
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  .i-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: flex;
    justify-content: center;
    align-items: center;

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