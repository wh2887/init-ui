# init ui - 一个 Vue UI 组件
作者： McCallWang  

![npm](https://img.shields.io/npm/v/init-ui-demo)
[![Build Status](https://travis-ci.org/wh2887/init-ui.svg?branch=master)](https://travis-ci.org/wh2887/init-ui)
## 介绍
这是我在学习 Vue 的过程中做的一个 UI 框架，希望对你有用。
## 开始使用
1. 添加 CSS 样式
    使用本框架前，请在 CSS 中开启 border-box
    ```css
    *,*::before,*::after{box-sizing:border-box}
    ```
    IE 15 及以上浏览器都支持此样式
    
2. 安装 init-ui
    ```
    npm i --save init-ui
    ```
3. 引入 init-ui
    ```javascript
    import {Button, ButtonGroup, Icon} from 'init-ui'
    import 'init-ui/dist/index.css'    
     
    export default {
      name: 'app',
      components: {
        'i-button':Button,
        'i-icon':Icon,
        'i-button-group':ButtonGroup
     }
    }
    ```
## 文档
[Init UI 官网](https://wh2887.github.io/init-ui/)
## 提问
[issues](https://github.com/wh2887/init-ui/issues)
## 变更记录

## 联系方式

## 贡献代码

