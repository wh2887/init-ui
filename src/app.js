import Vue from 'vue'
import Button from './Button'
import Icon from './Icon'
import ButtonGroup from './ButtonGroup'

Vue.component('i-button', Button)
Vue.component('i-icon', Icon)
Vue.component('i-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: false,
    loading3: true,
    loading4: false,
  }
})


// 单元测试
import chai from 'chai'

const expect = chai.expect

{
  // 未挂载状态
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })   // vm : Vue 实例

  // 若不提供挂载参数，将被渲染到文档之外的元素
  vm.$mount('#test')
  const useElement = vm.$el.querySelector('use')
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#icon-settings')
  vm.$el.remove()
  vm.$destroy()
}
