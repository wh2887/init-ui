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
  })


})