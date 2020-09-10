---
title: '快速上手'
---
# 快速上手

## 引入必要资源
```javascript
import {Button} from "init-ui-demo";
import "init-ui-demo/dist/index.css";
```

## 注册组件
```javascript
export default {
  name: "ComponentName",
  components: {
    "i-button": Button,
  },
}
```

## 使用
代码：
```vue
<template>
  <div>
    <i-button>默认按钮</i-button>
  </div>
</template>
```
效果：
<ClientOnly>
  <get-started-button-demo></get-started-button-demo>
</ClientOnly>

