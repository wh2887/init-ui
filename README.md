<p align="center"><a href="https://wh2887.github.io/init-ui/" target="_blank" rel="noopener noreferrer"><img width="100" src="https://gitee.com/hellow2887/blogimage/raw/master/img/db06fddc-c078-41e4-b574-13810657fccf_200x200%20(1).png" alt="Init UI logo"></a></p>  

<p align="center">
    <a href="https://badge.fury.io/js/init-ui"><img src="https://badge.fury.io/js/init-ui.svg" alt="npm version" height="18"></a>
    <img alt="Travis (.org)" src="https://img.shields.io/travis/wh2887/init-ui">
</p>

作者： McCallWang  

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
    import {Button, ButtonGroup, Icon,Col, Collapse, CollapseItem, Content, Footer, Header, Input, Layout, Popover
             , Row, Sider, Tabs, TabsHead, TabsBody, TabsItem, TabsPane, Toast,plugin
           } from 'init-ui'
    import 'init-ui/dist/index.css'    
    import Vue from 'vue'
    Vue.use(plugin)
    
    export default {
      name: 'app',
      components: {
            'i-button':Button,
            'i-icon':Icon,
            'i-button-group':ButtonGroup,
            'i-col':Col,
            'i-collapse':Collapse,
            'i-collapse-item':CollapseItem,
            'i-content': Content,
            'i-footer': Footer,
            'i-header': Header,
            'i-input': Input,
            'i-layout': Layout,
            'i-popover': Popover,
            'i-row': Row,
            'i-sider': Sider,
            'i-tabs': Tabs,
            'i-tabs-head': TabsHead,
            'i-tabs-body': TabsBody,
            'i-tabs-item': TabsItem,
            'i-tabs-pane': TabsPane,
            'i-toast': Toast,
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

