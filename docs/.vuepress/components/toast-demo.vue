<template>
  <div>
    <i-button @click="auto">设置 zIndex</i-button>&nbsp;&nbsp;
    <i-button @click="auto">会自动关闭</i-button>&nbsp;&nbsp;
    <i-button @click="auto">点击按钮才关闭</i-button>&nbsp;&nbsp;
    <i-button @click="auto">支持 HTML 语法</i-button>&nbsp;&nbsp;
    <br>
    <i-button @click="top">上方弹出</i-button>
    <i-button @click="middle">中间弹出</i-button>
    <i-button @click="bottom">下方弹出</i-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Toast from '../../../src/Toast'
  import Button from '../../../src/Button'
  import plugin from '../../../src/plugin'

  Vue.use(plugin)
  export default {
    components: {'i-toast': Toast, 'i-button': Button},
    methods: {
      auto() {
        this.$toast('我是 toast 内容', {
          zIndex:30,
          autoClose: 5,
          closeButton: {
          text:'确定',
            callback:()=>{
            console.log('回调的输出')
            }
          },
          enableHTML:true
        })
      },
      top(){
        this.$toast('我是 toast 内容', { position: 'top' })
      },
      middle(){
        this.$toast('我是 toast 内容', { position: 'middle' })
      },
      bottom(){
        this.$toast('我是 toast 内容', { position: 'bottom' })
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>