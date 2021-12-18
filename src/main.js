import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import {router} from "@/router"
import store from "@/store"

Vue.config.productionTip = false
Vue.use(ElementUI);
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
        config.headers.Authorization = 'Bearer ' + store.state.token;
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
);

new Vue({
  render: h => h(App),
    router,
    store
}).$mount('#app')
