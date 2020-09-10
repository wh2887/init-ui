<template>
  <div class="grid-wrapper">
    <i-row class="row">
      <i-col class="item" span="24">col-24</i-col>
    </i-row>
    <i-row>
      <i-col class="item" span="12">col-12</i-col>
      <i-col class="item" span="12">col-12</i-col>
    </i-row>
    <i-row class="row">
      <i-col class="item" span="8">col-8</i-col>
      <i-col class="item" span="8">col-8</i-col>
      <i-col class="item" span="8">col-8</i-col>
    </i-row>
    <i-row class="row">
      <i-col class="item" span="6">col-6</i-col>
      <i-col class="item" span="6">col-6</i-col>
      <i-col class="item" span="6">col-6</i-col>
      <i-col class="item" span="6">col-6</i-col>
    </i-row>
  </div>
</template>

<style lang="scss" scoped>
  @import "../styles/helper";

  .grid-wrapper{
    > .row{ padding: .2em;
      > .item { text-align: center; color: $font-color;
        &:nth-child(odd){ background: $background; }
        &:nth-child(even){ background: lighten($background,20%); color: $font-color; }
      }
    }
  }
</style>

<script>
  import Col from '../../../src/Col'
  import Row from '../../../src/Row'

  export default {
    components: {
      'i-col': Col,
      'i-row': Row
    }
  }
</script>