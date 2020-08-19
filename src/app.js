import Vue from 'vue'
import Button from './Button'
import Icon from './Icon'

Vue.component('i-button', Button)
Vue.component('i-icon', Icon)

new Vue({
  el: '#app',
})