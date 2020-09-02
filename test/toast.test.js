const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/Toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在', () => {
    expect(Toast).to.be.exist
  })
  describe('props', () => {
    it('接收 autoClose', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: 1,
        }
      }).$mount(div)
      vm.$on('beforeClose', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
        vm.$el.remove()
        vm.$destroy()
      })
    })
    it('接收 closeButton', (done) => {
      const callback = sinon.fake()
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: '关闭吧',
            callback
          },
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.toast-close')
      expect(closeButton.textContent.trim()).to.eq('关闭吧')
      setTimeout(() => {
        closeButton.click()
        expect(callback).to.have.been.called
        done()
      }, 200)
    })
    it('接收 enableHtml', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = [' <strong id="test1234"> hi </strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('#test1234')
      expect(strong).to.exist
    })
    it('接收 position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })


})