import Vue from 'vue'
import Button from './Button'
import Icon from './Icon'
import ButtonGroup from './ButtonGroup'
import Input from './Input'

Vue.component('i-button', Button)
Vue.component('i-icon', Icon)
Vue.component('i-button-group', ButtonGroup)
Vue.component('i-input', Input)

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: false,
    loading3: true,
    loading4: false,
    message: 'hi'
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value)
    }
  }
})


