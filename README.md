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
  
    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
    IE 8 及以上浏览器都支持此样式
    ```css
        html {
          --button-height: 32px;
          --font-size: 14px;
          --button-bg: white;
          --button-active-bg: #eee;
          --border-radius: 4px;
          --color: #333;
          --border-color: #999;
          --border-color-hover: #666;
        }
    ```
    IE 15 及以上浏览器都支持此样式
    
2. 安装 init-ui-demo
    ```
    npm i --save init-ui-demo
    ```
3. 引入 init-ui-demo
    ```javascript
    import {Button, ButtonGroup, Icon} from 'init-ui-demo'
    import 'init-ui-demo/dist/index.css'    
     
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

## 提问

## 变更记录

## 联系方式

## 贡献代码

