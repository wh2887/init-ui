<template>
  <div class="tabs-item-wrapper" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'InitTabsItem',
    inject: ['eventBus'],
    props: {
      disable: {
        type: Boolean,
        default: false
      },
      name: {
        type: [String, Number],
        required: true   // 必须给 item 一个 name
      }
    },
    data() {
      return {
        active: false
      }
    },
    computed: {
      classes () {
        return {
          active: this.active
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    },
    methods: {
      xxx() {
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-item-wrapper {
    padding: 0 2em;
    &.active {
      background: red;
    }
  }
</style>