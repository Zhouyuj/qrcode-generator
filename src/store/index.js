import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 创建一个新的 store 实例
export default new Vuex.Store({
  state () {
    return {
      qrcodeType: 'url',
      qrcodeSrc: ''
    }
  },
  mutations: {
    setQrcodeType (state, type) {
      state.qrcodeType = type;
    },
    setQrcodeSrc (state, src) {
      state.qrcodeSrc = src;
    }
  }
})