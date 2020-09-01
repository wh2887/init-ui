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
  data: {
    loading1: true,
    loading2: false,
    loading3: true,
    loading4: false,
    message: 'hi'
  },
  created() {
  },
  position: 'bottom',
  methods: {
    showToast() {
      this.$toast(`message${parseInt(Math.random()* 100) }`, {
        enableHtml: false,
      })
    }
  }
})


