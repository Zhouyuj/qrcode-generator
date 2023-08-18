import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 创建一个新的 store 实例
export default new Vuex.Store({
  state () {
    return {
      qrcodeType: 'URL',
      qrcodeSrc: 'data:image/png;base64,UklGRroEAABXRUJQVlA4TK4EAAAvT8ATEO/DuLZtF++9L1OA/qszY5S9e+XQAdtIkpzsa+FR5B8jWK/gdhm5bRvJSdpZ/jn/nzl1ndiOG0lSpKzuhT+j/8asA7x7fC++c2AZBEAA/SSAXydKI8g/JVH6Umop3SnJLc+UROkDMqEkAd6U5JYG8gBSID8gRUkCJCAlwMstzS2Nkigt4xoBSFF6gsxBPt2yoPRY/9/c0tb/N5Aa1ximPX3a00Fq/X+bz3IBbiA7t7x37xfPZ3n7vNd+tGD9f5vPcpAa1wib6+nVGZYCC04WQJQL9X0THIhikCRHAapeSaITBVD1Qp4r6oB5ELxTlqBoQfBOEh3zhjlR9QLlRNFRAHWgqIWqV/IEIH//P6VtCiGQUCClpLAQGpbSXZLVZS5171zqOrfOffvn4eR7d5n8GNF/RpKkBtmFIi5RL5YBntDx/0uFxTZQVFXNkVRVNRUkKzktr+sGTl3PazlMkKRgOaNoWrZTyujYllk0slQmyFjl9YJpOa7XE1TCjJWgx3MdyyzoeeELbGWYdpfn3527ODSMMA4PX1q4X/G9Lts0sIXgVafT7a+fayEmW+dvhH6304kvhLlmmI63MU0oAGFmM/Ac09AEWaYWLDe40EAcbFztDVyrkIkiXNPNUnmuhTg5sFQtl0w9FQW4YbkbI0gAx7dSMdslwL11QuUWb4YeZpxesL3pBhLExmzVswup8a3t8jQSyNmobGdLvmzqYo0nqSg5HXPBVvUsPacowJg33fWGaDRvha6ZVxXoE0obLSScA9tBKXsASDOs8giSwIla2TJSCabNIQZ+PqXzxXeoLVcxCRKdgKX9Oj6k89kbqA3EgZMFduz0LiAGvh2y8BZs13q9TnbI4kaDG2Br7mCBne+eRtyA23zUnaUZUbf9Fj/gNhD7tk4PiqIVutYRPzjsdthV0BSFce2dEwDcPkFwueall3Tolt/ixhMcb19/gF1aOh05w7mLuHH4nLSviM0HFfrNiqoV3TkQgNzbewfASuQWNVWhZy7KxXU8Qc8MycUonqB+9aeGJaN+KvvyqTsrCIyXKR6dEHwFBkrSjXSUQjBOzp4cHv4+S/IEjrAkCsfvj9MNXwh+PgajHwJRskCIkrnQ5rJTGZYrj2G3tfF3r+qWf0muPBX7ls76byzIlVeZ/w2t6N6XKz8k/mv0jS2Z8mAf8d+lJ87LxBXyXKAnbsjEHfzcYp2rYUseBhP8XGWe+zPysIif++y6ZLMhC81dWl1Cvzm4KgtTp7O6CVTX9Q4w60QYDvb2f7DyZ2B1HRaW2HUshI+Pjj4iBtaIuhNUF1fHkQROJnhdDKzbtwbEY3CXqNuBfUVwU3yfci+m9RUgKZwVjcU63vdw9GXVWcHeR/RlPH1jNCvWib6Rr6+NZpvC7ljsI/pa3r67emtA0Ivu1Rl9N08y3J4Q8r3vxqEnatDgBrXlAW51LakFLuaC5irV+BrXI5tTZ2JyriJu7tO7Mz8A3rG4e5oy9xE5lwqi+PblAYBy5U4SR5S5lOi5WViLH6xcHx0lipnRqdWHfXGNOjeTMderRLW4niT9/f1JUo9rEX2u13Zzx3abi7bZ3LbN5srtNvf+32AH',
      showGeneratedCode: true,
      isLogged: localStorage.getItem('isLogged'),
      isThirdLogged: false,
      userInfo: {}
    }
  },
  mutations: {
    setQrcodeType (state, type) {
      state.qrcodeType = type;
    },
    setQrcodeSrc (state, src) {
      state.qrcodeSrc = src;
    },
    setShowGeneratedCode(state, show) {
      state.showGeneratedCode = show;
    },
    setIsLogged(state, logged) {
      state.isLogged = logged;
    },
    setIsThirdLogged(state, logged) {
      state.isThirdLogged = logged;
    },
    setUserInfo(state, info) {
      state.userInfo = info;
    }
  }
})