<template>
  <div class="tabs-wrapper">
    <i-tabs :selected.sync="selectedTab">
      <i-tabs-head>
        <i-tabs-item name='tab1'>
          <i-icon icon-name="settings"></i-icon>
          Tab1
        </i-tabs-item>
        <i-tabs-item name='tab2'>Tab2</i-tabs-item>
        <i-tabs-item name='tab3'>Tab3</i-tabs-item>
        <i-tabs-item name='tab4' disabled>Tab4</i-tabs-item>
      </i-tabs-head>
      <i-tabs-body>
        <i-tabs-pane name='tab1'>内容1</i-tabs-pane>
        <i-tabs-pane name='tab2'>内容2</i-tabs-pane>
        <i-tabs-pane name='tab3'>内容3</i-tabs-pane>
        <i-tabs-pane name='tab4'>内容4</i-tabs-pane>
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
      'i-tabs': Tabs, 'i-tabs-head': TabsHead, 'i-tabs-body': TabsBody, 'i-tabs-item': TabsItem,
      'i-tabs-pane': TabsPane, 'i-icon': Icon
    },
    data() { return { selectedTab: 'tab1' } }
  }
</script>

<style lang="scss" scoped>

</style>