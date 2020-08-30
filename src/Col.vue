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
    @for $i from 1 through 100 {
      .#{$class}#{$i} {
        background-color: darken(cornflowerblue, 0% + ($i / 2));
      }
    }
  }
</style>