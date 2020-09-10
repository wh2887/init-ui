<template>
  <div class="offset-wrapper">
    <i-row class="row">
      <i-col class="item" span="8"> <span>col-8</span> </i-col>
      <i-col class="item" span="8"> <span>col-8</span> </i-col>
      <i-col class="item" span="4" offset="4"> <span>col-4</span> </i-col>
    </i-row>
    <i-row class="row">
      <i-col class="item" span="8"> <span>col-8</span> </i-col>
      <i-col class="item" span="5" offset="3"> <span>col-5</span> </i-col>
      <i-col class="item" span="4" offset="4"> <span>col-4</span> </i-col>
    </i-row>
    <i-row class="row">
      <i-col class="item" span="2" offset="6"> <span>col-2</span> </i-col>
      <i-col class="item" span="5" offset="3"> <span>col-5</span> </i-col>
      <i-col class="item" span="4" offset="4"> <span>col-4</span> </i-col>
    </i-row>
  </div>
</template>

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

<style lang="scss" scoped>
  @import "../styles/helper";
  .offset-wrapper { padding-top: $wrapper-top;
    > .row {
      > .item { text-align: center; color: $font-color;
        > span { display: block; background: $background; }
      }
    }
  }
</style>