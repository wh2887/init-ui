const expect = chai.expect
import TabsHead from '../src/Tabs-head'
import Vue from 'vue'
import Tabs from '../src/Tabs'
import TabsBody from '../src/Tabs-body'
import TabsItem from '../src/Tabs-item'
import TabsPane from '../src/Tabs-pane'

Vue.component('i-tabs', Tabs)
Vue.component('i-tabs-head', TabsHead)
Vue.component('i-tabs-body', TabsBody)
Vue.component('i-tabs-item', TabsItem)
Vue.component('i-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('存在', () => {
    expect(Tabs).to.be.exist
  })

  describe('props', () => {
    it('接收 selected', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <i-tabs selected="sports">
          <i-tabs-head>
            <i-tabs-item name='sports'> 体育 </i-tabs-item>
            <i-tabs-item name='finance'>财经</i-tabs-item>
            <i-tabs-item name='military'>军事</i-tabs-item>
          </i-tabs-head>
          <i-tabs-body>
            <i-tabs-pane name='sports'>体育相关资讯</i-tabs-pane>
            <i-tabs-pane name='finance'>财经相关资讯</i-tabs-pane>
            <i-tabs-pane name='military'>军事相关资讯</i-tabs-pane>
          </i-tabs-body>
        </i-tabs>
      `
      let vm = new Vue({
        el: div
      })

      vm.$nextTick(() => {
        let x = vm.$el.querySelector(`.tabs-item-wrapper[data-name="sports"]`)
        expect(x.classList.contains('active')).to.be.true
        done()
      })
    })

    it('可以接受 direction prop', () => {

    })

  })


})