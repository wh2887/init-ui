<template>
  <button class="i-button">按钮</button>
</template>

<script>
  export default {
    name: 'Button.vue'
  }
</script>

<style lang="scss">

  .i-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      border-color: var(--border-active-bg);
    }

    &:focus {
      outline: none;
    }
  }

</style>