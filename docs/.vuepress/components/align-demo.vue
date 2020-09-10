<template>
  <div class="align-wrapper">
    <i-row class="row" align="left">
      <i-col class="item" span="8">left</i-col>
      <i-col class="item" span="8">left</i-col>
    </i-row>
    <i-row class="row" align="center">
      <i-col class="item" span="8">center</i-col>
      <i-col class="item" span="8">center</i-col>
    </i-row>
    <i-row class="row" align="right">
      <i-col class="item" span="8">right</i-col>
      <i-col class="item" span="8">right</i-col>
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
  .align-wrapper{ text-align: center; color: $font-color;
    .row{ padding-top: $wrapper-top;
      > .item { text-align: center;
        &:nth-child(odd){ background: $background; }
        &:nth-child(even){ background: lighten($background,20%); color: $font-color; }
      }
    }
  }
</style>