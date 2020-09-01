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

new Vue({
  el: '#app',
  data: {},
  created() {
  },
  position: 'bottom',
  methods: {
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
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
        onClose
      })
    }
  }
})


