<template>
  <div class="wrapper">
    <i-layout>
      <i-header> header </i-header>
      <i-layout>
        <i-sider> sider </i-sider>
        <i-content> content </i-content>
      </i-layout>
      <i-footer> footer </i-footer>
    </i-layout>
    <br>
    <i-layout>
      <i-header> header </i-header>
      <i-content> content </i-content>
      <i-footer> footer </i-footer>
    </i-layout>
    <br>
    <i-layout>
      <i-header> header </i-header>
      <i-layout>
        <i-sider> sider </i-sider>
        <i-layout>
          <i-content> content </i-content>
          <i-footer> footer </i-footer>
        </i-layout>
      </i-layout>
    </i-layout>
  </div>
</template>

<script>
  import Layout from '../../../src/Layout'
  import Header from '../../../src/Hearder'
  import Sider from '../../../src/Sider'
  import Content from '../../../src/Content'
  import Footer from '../../../src/Footer'

  export default {
    components: {
      'i-layout': Layout,
      'i-header': Header,
      'i-sider': Sider,
      'i-content': Content,
      'i-footer': Footer
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";

  .wrapper {
    > .layout-wrapper { height: 30vh;
      > .header-wrapper { height: 3em; background: $background; }
      > .content-wrapper { background: lighten($background, 40%); }
      > .layout-wrapper { height: 6em;
        > .sider-wrapper { width: 3em; background: lighten($background, 15%); }
        > .content-wrapper { background: lighten($background, 40%); }
        > .layout-wrapper{
          > .content-wrapper{ background: lighten($background, 40%); }
          > .footer-wrapper { background: $background; }
        }
      }
      > .footer-wrapper { background: $background; }
    }
  }
</style>