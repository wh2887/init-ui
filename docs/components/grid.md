---
title: 'Grid - 栅格'
---
# 栅格
24 栅格系统。

## 预览
&nbsp;
<ClientOnly>
  <grid-demo></grid-demo>
</ClientOnly>

## 使用方法
```vue
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
  *{
    box-sizing: border-box;
  }
  .grid-wrapper{
    $background: #3eaf7c;
    > .row{ padding: .2em;
      > .item { text-align: center; color: white;
        &:nth-child(odd){ background: $background; }
        &:nth-child(even){ background: lighten($background,20%); color: black; }
      }
    }
  }
</style>
```
## 选项
### Row 选项
#### 1. gutter（排水沟；槽）
通过给 Row 设置<span style='color:#3eaf7c;background-color:#F8F8F8'> gutter </span>属性, 可以让栅格有间隔。单位为<span style='color:#3eaf7c;background-color:#F8F8F8'> px </span>。    
预览  
<ClientOnly>
  <gutter-demo></gutter-demo>
</ClientOnly>

代码
```vue
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
<style lang="scss" scoped>
  * { box-sizing: border-box; }
  .gutter-wrapper { padding-top: 10px;
    .item { text-align: center; color: white;
      > span { display: block; background: #3eaf7c; }
    }
  }
</style>
```
#### 2. align
通过给 Row 设置<span style='color:#3eaf7c;background-color:#F8F8F8'> align </span>属性, 可以定义其子组件在该节点里面的排版方式。  
预览  
<ClientOnly>
  <align-demo></align-demo>
</ClientOnly>

代码
```vue
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
<style lang="scss" scoped>
  $background: #3eaf7c;
  * { box-sizing: border-box; }
  .align-wrapper{ text-align: center; color: white;
    .row{ padding-top: 10px;
      > .item { text-align: center; color: white;
        &:nth-child(odd){ background: $background; }
        &:nth-child(even){ background: lighten($background,20%); color: black; }
      }
    }
  }
</style>
```

### Col 选项
> Col 的选项有 span, offset 以及响应式相关的 ipad, narrowPc, pc, widePc 这些。
#### 1. span
栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> span </span>属性来实现。
例如：三个等宽的列可以使用`<i-col span="8">列</i-col>` 来创建其中一个，其余两个再复制两份。

#### 2. offset
使用<span style='color:#3eaf7c;background-color:#F8F8F8'> offset </span>属性,可以将列向右侧偏。  
例如，`offset="4"` 将元素向右侧偏移了 4 个列（column）的宽度。  
预览
<ClientOnly>
    <offset-demo></offset-demo>
</ClientOnly>
代码
```vue
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
<style lang="scss" scoped>
  $background: #3eaf7c;
  $wrapper-top: 10px;
  $font-color: white;
  * { box-sizing: border-box; }
  .offset-wrapper { padding-top: $wrapper-top;
    > .row {
      > .item { text-align: center; color: $font-color;
        > span { display: block; background: $background; }
      }
    }
  }
</style>
```


#### 3. 响应式
支持ipad 、narrowPc 、pc 、widePc 四种设备的响应式设置。  
若不给 Col 这四个属性，默认为 手机端响应，span值为24。  
<span style='color:red;'>注意： 若设置这四个属性，则需要对应属性 + offset 的值的和为24，具体看代码。</span>  
预览
<ClientOnly>
    <response-demo></response-demo>
</ClientOnly>

代码
```vue
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
<style lang="scss" scoped>
  $background: #3eaf7c;
  $wrapper-top: 10px;
  $font-color: white;
  * { box-sizing: border-box; }
  .response-wrapper { padding-top: $wrapper-top;
    > .row {
      > .item { text-align: center; color: $font-color;
        > span { display: block; background: $background; }
      }
    }
  }
</style>

```

