const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/Tabs'
import TabsBody from '../src/Tabs-body'
import TabsItem from '../src/Tabs-item'
import TabsPane from '../src/Tabs-pane'
import TabsHead from '../src/Tabs-head'

Vue.component('i-tabs', Tabs)
Vue.component('i-tabs-head', TabsHead)
Vue.component('i-tabs-body', TabsBody)
Vue.component('i-tabs-item', TabsItem)
Vue.component('i-tabs-pane', TabsPane)
Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {

  it('存在.', () => {
    expect(TabsItem).to.exist
  })

  it('接受 name 属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'xxx',
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
  })
  it('接受 disabled 属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        disabled: true,
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
})