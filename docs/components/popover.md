---
title: 'Popover - 弹出层'
---
# 弹出层
## 预览
&nbsp;
<ClientOnly>
    <popover-demo></popover-demo>
</ClientOnly>
## 使用方法
```vue
<template>
  <div class="popover-wrapper">
    <i-popover position="bottom">
      <template slot="content">
        popover 中的内容
      </template>
      <i-button>下方显示内容</i-button>
    </i-popover>
    <i-popover>
      <template slot="content">
        popover 中的内容
      </template>
      <i-button>点击显示</i-button>
    </i-popover>
    <i-popover trigger="hover">
      <template slot="content">
        popover 中的内容
      </template>
      <i-button>hover 显示内容</i-button>
    </i-popover>
  </div>
</template>
```
## 选项
> Popover 组件支两个选项： position 用于设置显示位置； trigger 用于设置出发事件
#### 1. position
<span style='color:#3eaf7c;background-color:#F8F8F8'> position </span> 默认为 <span style='color:#3eaf7c;background-color:#F8F8F8'> top </span>，可选择的参数为 
<span style='color:#3eaf7c;background-color:#F8F8F8'> top </span>,<span style='color:#3eaf7c;background-color:#F8F8F8'> left </span>,<span style='color:#3eaf7c;background-color:#F8F8F8'> right </span>,<span style='color:#3eaf7c;background-color:#F8F8F8'> bottom </span>,分别设置 popover 显示的方位。
#### 2. trigger
<span style='color:#3eaf7c;background-color:#F8F8F8'> trigger </span> 默认为<span style='color:#3eaf7c;background-color:#F8F8F8'> click </span>,,用于设置触发 popover 显示的事件。 除此之外还支持<span style='color:#3eaf7c;background-color:#F8F8F8'> hover </span>
