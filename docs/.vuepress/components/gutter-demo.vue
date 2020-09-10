<template>
  <div class="gutter-wrapper">
    <i-row gutter="30">
      <i-col class="item" span="8"> <span> col-8; gutter-30;</span> </i-col>
      <i-col class="item" span="8"> <span> col-8; gutter-30;</span> </i-col>
      <i-col class="item" span="8"> <span> col-8; gutter-30;</span> </i-col>
    </i-row>
    <i-row gutter="20">
      <i-col class="item" span="8"> <span> col-8; gutter-20;</span> </i-col>
      <i-col class="item" span="8"> <span> col-8; gutter-20;</span> </i-col>
      <i-col class="item" span="8"> <span> col-8; gutter-20;</span> </i-col>
    </i-row>
    <i-row gutter="10">
      <i-col class="item" span="8"> <span> col-8; gutter-10;</span> </i-col>
      <i-col class="item" span="8"> <span> col-8; gutter-10;</span> </i-col>
      <i-col class="item" span="8"> <span> col-8; gutter-10;</span> </i-col>
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
    },
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";

  .gutter-wrapper { padding-top: $wrapper-top;
    .item { text-align: center; color: $font-color;
      > span { display: block; background: $background; }
    }
  }

</style>