import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },         
                {
                    path: '/userCenter',
                    component: resolve => require(['../components/page/UserCenter.vue'], resolve)    // 拖拽列表组件 
                },
                {
                    path: '/modifyUser',
                    component: resolve => require(['../components/page/ModifyUser.vue'], resolve)
                },
                {
                    path: '/modifyPassword',
                    component: resolve => require(['../components/page/ModifyPassword.vue'], resolve)
                },
                {
                    path: '/success',
                    component: resolve => require(['../components/page/Success.vue'], resolve)
                }
            ]
        },
        {
            path: '/register',
            component: resolve => require(['../components/page/main/Register.vue'], resolve)
        },
        {
            path: '/register-success',
            component: resolve => require(['../components/page/RegisterSuccess.vue'], resolve)
        },
        {
            path: '/reset-password',
            component: resolve => require(['../components/page/main/ResetPsd.vue'], resolve)
        },
        {
            path: '/change-password',
            component: resolve => require(['../components/page/main/ChangePsd.vue'], resolve)
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/main/Login.vue'], resolve)
        },
        {
            path: '/index',
            component: resolve => require(['../components/page/main/Main.vue'], resolve),
            // beforeEnter(to, from, next) {
            //     var token = localStorage.getItem('token');
            //     if (token) {

            //     } else {
            //         window.location.href = "/login";
            //     }
            // }
        },
    ],
    mode: 'history'
})
