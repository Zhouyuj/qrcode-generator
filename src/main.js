import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';    // 默认主题
import 'element-ui/lib/theme-chalk/index.css'
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import SIdentify from './components/page/Identify';    //自定义组件
import "babel-polyfill";
import store from './store/index'
import i18n from './assets/language';

Vue.component("SIdentify", SIdentify);
Vue.use(ElementUI);

// const axios = require('axios');
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.baseURL = "http://localhost:3000/api";
const instance = axios.create({
    baseURL: 'http://localhost:3000/api'
})

instance.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem("token");
  
      if (token) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${token}`,
        };
      }
  
      return config;
    },
    (error) => Promise.reject(error)
  );
// respone拦截器
instance.interceptors.response.use(
    response => {
        console.log(response)
        return response
    },
    error => {
        console.log(error)
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    router.replace({
                        path: 'login',
                        query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
                    })
            }
        }
        return Promise.reject(error.response)
    }
)

Vue.prototype.$http = instance;

// Vue.use(axios);
new Vue({
    store,
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');