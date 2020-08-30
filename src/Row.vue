<template>
  <div class="row">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
  .row {
    display: flex;
    $class: col-;
    @for $n from 1 through 24 {

      // for each $col_#{i}
      .#{$class}#{$n} {
        width: ($n / 24)*100%;
      }
    }
  }

</style>