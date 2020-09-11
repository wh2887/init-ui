<template>
  <div class="tabs-wrapper">
    <i-tabs selected.sync="selectedTab">
      <i-tabs-head>
        <i-tabs-item name='sports'>
          <i-icon icon-name="settings"></i-icon>
          体育
        </i-tabs-item>
        <i-tabs-item name='finance'>财经</i-tabs-item>
        <i-tabs-item name='military'>军事</i-tabs-item>
        <template slot="actions">
          按钮
        </template>
      </i-tabs-head>

      <i-tabs-body>
        <i-tabs-pane name='sports'>体育相关资讯</i-tabs-pane>
        <i-tabs-pane name='finance'>财经相关资讯</i-tabs-pane>
        <i-tabs-pane name='military'>军事相关资讯</i-tabs-pane>
      </i-tabs-body>
    </i-tabs>
  </div>
</template>

<script>
  import Tabs from '../../../src/Tabs'
  import TabsBody from '../../../src/Tabs-body'
  import TabsHead from '../../../src/Tabs-head'
  import TabsItem from '../../../src/Tabs-item'
  import TabsPane from '../../../src/Tabs-pane'
  import Icon from '../../../src/Icon'

  export default {
    components: {
      'i-tabs': Tabs,
      'i-tabs-head': TabsHead,
      'i-tabs-body': TabsBody,
      'i-tabs-item': TabsItem,
      'i-tabs-pane': TabsPane,
      'i-icon': Icon
    }
  }
</script>

<style lang="scss" scoped>

</style>