import Vue from 'vue'
import VueRouter from 'vue-router' // 路由插件
import VueResource from 'vue-resource' // 用于发起请求并处理响应
import Vuex from 'vuex'
import VueTouch from 'vue-touch'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'animate.css'

import routerConfig from './router'
import App from './App.vue'


import util from './util'

// import initdata from "../init"
// =====================安装引入的插件==========================
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueTouch)
Vue.use(MintUI)
Vue.use(Vuex)

// ======================配置路由===============================
var router = new VueRouter()
routerConfig(router)
Vue.transition('slide', {
  enterClass: 'slideInLeft',
  leaveClass: 'hide'
})
Vue.transition('makenote', {
  enterClass: 'slideInUp',
  leaveClass: 'hide'
})
// For every new route scroll to the top of the page
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

// ====================配置http================================
Vue.http.options.root = window.location.host
Vue.http.options.timeout = 60000
Vue.http.options.emulateJSON = false // 支持发送 application/json 编码请求的Web服务器上工作

if (!localStorage.user) {
  util.init()
  setTimeout(function () {
    location.href = "."
  }, 0)
}
router.start(App, '#app')

