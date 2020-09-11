---
title: 'Tabs - 标签'
---
# 标签
## 预览
&nbsp;
<ClientOnly>
    <tabs-demo></tabs-demo>
</ClientOnly>

## 使用方法
此组件的 i-tabs i-tabs-item i-tabs-pane 必须有一一对应的 name。
```vue
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
        <i-tabs-item name='tab4'>Tab4</i-tabs-item>
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
  export default {
    data() { return { selectedTab: 'tab1' } }
  }
</script>
```

## 选项
1. 默认高亮状态
i-tabs 需要设置<span style='color:#3eaf7c;background-color:#F8F8F8'> selected </span>属性来确定默认标签。  
你可以这样：`:selected.sync="selectedTab"`,其中 <span style='color:#3eaf7c;background-color:#F8F8F8'>selectedTab </span>是你需要传递的默认值。  
并且该标签的子组件应该是 i-tabs-head 和 i-tabs-body ，否则你会得到一个警告。
2. disabled 状态
 <span style='color:#3eaf7c;background-color:#F8F8F8'>disabled</span> 属性用于 i-tabs-item 标签，可以设置该标签的不可用状态。