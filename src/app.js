import Vue from 'vue'
import Button from './Button'
import Icon from './Icon'
import ButtonGroup from './ButtonGroup'

Vue.component('i-button', Button)
Vue.component('i-icon', Icon)
Vue.component('i-button-group',ButtonGroup)

new Vue({
  el: '#app',
  data:{
    loading1:true,
    loading2:false,
    loading3:true,
    loading4:false,
  }
})