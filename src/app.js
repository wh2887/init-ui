import Vue from 'vue'
import Button from './Button'
import Icon from './Icon'
import ButtonGroup from './ButtonGroup'
import Input from './Input'
import Row from './Row'
import Col from './Col'
import Layout from './Layout'
import Header from './Hearder'
import Content from './Content'
import Footer from './Footer'
import Sider from './Sider'
import Toast from './Toast'
import plugin from './plugin'
import Tabs from './Tabs'
import TabsBody from './Tabs-body'
import TabsHead from './Tabs-head'
import TabsItem from './Tabs-item'
import TabsPane from './Tabs-pane'
import Popover from './Popover'
import Collapse from './Collapse'
import CollapseItem from './Collapse-item'

Vue.component('i-button', Button)
Vue.component('i-icon', Icon)
Vue.component('i-button-group', ButtonGroup)
Vue.component('i-input', Input)
Vue.component('i-row', Row)
Vue.component('i-col', Col)
Vue.component('i-layout', Layout)
Vue.component('i-header', Header)
Vue.component('i-content', Content)
Vue.component('i-footer', Footer)
Vue.component('i-sider', Sider)
Vue.component('i-toast', Toast)
Vue.use(plugin)
Vue.component('i-tabs', Tabs)
Vue.component('i-tabs-head', TabsHead)
Vue.component('i-tabs-body', TabsBody)
Vue.component('i-tabs-item', TabsItem)
Vue.component('i-tabs-pane', TabsPane)
Vue.component('i-popover', Popover)
Vue.component('i-collapse', Collapse)
Vue.component('i-collapse-item', CollapseItem)

new Vue({
  el: '#app',
  data: {
    selectedTab: ['2','1'],
    xxx: 'sports'
  },
  created() {},
  position: 'bottom',
  methods: {
    yyy() {
      console.log('yyy')
    },
    showToast(position) {
      this.$toast(`message${parseInt(Math.random() * 100)}`, {
        enableHtml: false,
        position: position,
        closeButton: {
          text: '充值',
          callback: () => {
            console.log('充值成功')
          }
        },
      })
    }
  }
})


