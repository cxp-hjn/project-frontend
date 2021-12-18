// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.prototype.$bus = new Vue();// 兄弟组件通信的总线实例
//axios 配置
// Axios挂载到Vue原型，全局可以使用this.$axios访问
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = "application/json;charset=UTF-8"

// http request 拦截器
axios.interceptors.request.use(
    config => {
        let token;
        if ((token = sessionStorage.getItem("token"))) {
            store.state.token = token;
            // 判断是否有token，若存在，每个http header加上token
            // eslint-disable-next-line no-template-curly-in-string
            config.headers.Authorization = 'Bearer ' + store.state.token;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.hasOwnProperty("state")) {
      const stateCode = response.data.state;
      if (stateCode === 401) {
        router.replace('/login')
      }
    }
    return response
  },
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
