<template>
  <div class="col" :class="[`col-${span}`]">

  </div>
</template>

<script>
  export default {
    props: {
      span: {
        type: [Number, String]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .col {
    width: 50%;
    height: 50px;
    border: 1px solid #333333;
    background: #bbbbbb;
    $class: col-;
    @for $n from 1 through 24 {

      // for each $col_#{i}
      &.#{$class}#{$n} {
        width: ($n / 24)*100%;
      }
    }
  }
</style>