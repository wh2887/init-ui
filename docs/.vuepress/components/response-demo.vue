<template>
  <div class="response-wrapper">
    <i-row class="row">
      <i-col class="item"
              span="24"
             :ipad="{span:8}"
             :narrow-pc="{span:4}"
             :pc="{span: 2}"
             :wide-pc="{span:1}"
      >
        col
      </i-col>
      <i-col class="item"
              span="24"
             :ipad="{span:16}"
             :narrow-pc="{span:20}"
             :pc="{span: 20,offset:2}"
             :wide-pc="{span:21}"
      >
        col
      </i-col>
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
  .response-wrapper { padding-top: $wrapper-top;
    > .row {
      > .item { text-align: center; color: $font-color;
        > span { display: block; background: $background; }
      }
    }
  }
</style>