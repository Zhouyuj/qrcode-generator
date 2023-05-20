<template>
    <div class="header sticky">
        <div class="container">
            <div class="navigation-bar">
                <div class="container-fluid px-0">
                    <div class="cover-header">
                        <!-- <div class="menu-mobile"><i class="qr-open-menu pointer"></i></div>
                        <div class="logo-flex"><a href="/"><img src="/static/img/MainHeader/qrtiger_logo.svg"
                                    alt="qr code generator" width="137px" height="42px"></a>
                            <div class="main-menu-mobile"></div>
                        </div>
                        <div class="menu-flex">
                            <ul class="menu d-none d-lg-block">
                                <li class="d-lg-none close"><a class="pointer"><i class="qr-close"></i></a></li>
                                <li><a class="pointer"><span class="underline">Bulk QR</span></a></li>
                                <li><a class="pointer" target="_blank" href="/api-documentation"><span class="underline">QR
                                            code API</span></a></li>
                                <li><a class="pointer" href="/payment"><span class="underline">Pricing</span></a></li>
                                <li><a class="pointer"><span class="underline">FAQ</span></a></li>
                                <li><a class="pointer" target="_blank" href="/blog"><span class="underline">BLOG</span></a>
                                </li>
                            </ul>
                        </div> -->
                        <div class="login-menu">
                            <div class="d-flex align-items-center">
                                <div class="btn-cover"><a class="pointer btn-login" href="/login"><span
                                            class="underline">{{ $t("login.login") }}</span></a><a class="pointer btn-register"
                                        href="/register">{{$t("login.register")}}</a></div>
                                <div class="language">
                                    <div class="button language-toggle"><span class="lang"><svg width="17" height="16"
                                                viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M6.61594 14.6765C6.03923 13.9515 5.56194 12.9639 5.23127 11.8034C4.66649 12.0836 4.14202 12.4329 3.66884 12.8404C4.47186 13.6791 5.48148 14.3184 6.61594 14.6765ZM5.94013 10.4378C6.66428 10.2034 7.43097 10.0635 8.22559 10.0328V8.5H5.73453C5.75813 9.18 5.82938 9.82977 5.94013 10.4378ZM5.73453 7.5C5.75813 6.82 5.82938 6.17023 5.94013 5.5622C6.66428 5.79661 7.43097 5.9365 8.22559 5.96725V7.5H5.73453ZM9.22559 8.5V10.052C10.1617 10.1245 11.0554 10.3488 11.882 10.7001C12.0217 10.0179 12.1113 9.27878 12.1383 8.5H9.22559ZM12.1383 7.5H9.22559V5.94801C10.1617 5.87546 11.0554 5.65121 11.882 5.2999C12.0217 5.98209 12.1113 6.72122 12.1383 7.5ZM13.1388 8.5C13.1083 9.44017 12.9924 10.3364 12.8055 11.161C13.3398 11.4696 13.8373 11.8346 14.2898 12.2478C15.0957 11.1938 15.6089 9.90407 15.708 8.5H13.1388ZM15.708 7.5H13.1388C13.1083 6.55983 12.9924 5.6636 12.8055 4.839C13.3398 4.5304 13.8373 4.16539 14.2898 3.75215C15.0957 4.80619 15.6089 6.09593 15.708 7.5ZM4.73398 7.5H1.74317C1.83678 6.17364 2.29991 4.9493 3.03024 3.9293C3.61978 4.43471 4.27949 4.86085 4.99274 5.19108C4.84954 5.91655 4.7602 6.69205 4.73398 7.5ZM1.74317 8.5H4.73398C4.7602 9.30795 4.84954 10.0835 4.99274 10.8089C4.27949 11.1392 3.61978 11.5653 3.03024 12.0707C2.29991 11.0507 1.83678 9.82636 1.74317 8.5ZM0.740957 8.5C0.999055 12.6854 4.47523 16 8.72559 16C8.77172 16 8.81777 15.9996 8.86371 15.9988C8.8879 15.9996 8.91213 16 8.93641 16C9.01502 16 9.09312 15.9959 9.17066 15.9878C13.3819 15.7569 16.7256 12.2689 16.7256 8C16.7256 3.74965 13.411 0.273469 9.22559 0.015371V0H8.93641H8.72559H8.22559V0.015371C4.20558 0.263272 0.988858 3.47999 0.740957 7.5H0.725661L0.725661 7.96496C0.725611 7.97663 0.725586 7.98831 0.725586 8C0.725586 8.01169 0.725611 8.02337 0.725661 8.03504L0.725661 8.5H0.740957ZM6.16184 11.4177C6.8142 11.1978 7.50672 11.0651 8.22559 11.0336V14.7962C7.77533 14.5437 7.29065 14.0397 6.84404 13.1911C6.57603 12.6819 6.34399 12.0842 6.16184 11.4177ZM9.22559 11.0554V14.9649C9.78154 14.8325 10.4384 14.3128 11.0288 13.1911C11.2607 12.7505 11.4656 12.2437 11.6347 11.6834C10.8885 11.3476 10.0775 11.1303 9.22559 11.0554ZM11.6347 4.31664C10.8885 4.65244 10.0775 4.86971 9.22559 4.94459V1.03508C9.78154 1.16746 10.4384 1.6872 11.0288 2.80889C11.2607 3.2495 11.4656 3.75632 11.6347 4.31664ZM6.84404 2.80889C7.29065 1.96032 7.77533 1.45626 8.22559 1.20378V4.96639C7.50672 4.93488 6.8142 4.80222 6.16184 4.58225C6.34399 3.91578 6.57603 3.31811 6.84404 2.80889ZM5.23127 4.19656C5.56194 3.03612 6.03923 2.04855 6.61594 1.3235C5.48148 1.68163 4.47186 2.32091 3.66884 3.15961C4.14201 3.56706 4.66649 3.91637 5.23127 4.19656ZM12.5325 3.83651C12.2437 2.93783 11.8641 2.15587 11.4181 1.53656C12.2474 1.88242 12.9959 2.38323 13.6274 3.00282C13.2894 3.3128 12.923 3.59215 12.5325 3.83651ZM12.5325 12.1635C12.923 12.4079 13.2894 12.6872 13.6274 12.9972C12.9959 13.6168 12.2474 14.1176 11.4181 14.4634C11.8641 13.8441 12.2437 13.0622 12.5325 12.1635Z"
                                                    fill="white"></path>
                                            </svg></span>
                                        <div class="btn-show-language d-md-flex align-items-center">
                                            <el-dropdown @command="lang_change">
                                                <span class="el-dropdown-link">
                                                    {{ current_lang }}<i class="el-icon-arrow-down el-icon--right"></i>
                                                </span>
                                                <el-dropdown-menu slot="dropdown">
                                                    <el-dropdown-item command="english">English</el-dropdown-item>
                                                    <el-dropdown-item command="fanti">繁体中文</el-dropdown-item>
                                                    <el-dropdown-item command="jianti">简体中文</el-dropdown-item>
                                                </el-dropdown-menu>
                                            </el-dropdown>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current_lang: '简体中文'
        }
    },
    computed: {
        username() {
            let username = sessionStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    methods: {
        handleCommand(command) {
            if (command == 'loginout') {
                sessionStorage.removeItem('ms_username')
                sessionStorage.removeItem('ms_userId')
                this.$router.push('/login');
            } else if (command == 'userCenter') {
                this.$router.push('/userCenter');
            }
        },
        lang_change(value){
            console.log(value)
            if(value=='english'){
                this.$i18n.locale = "en";
                localStorage.setItem('lang',"en");
            }else if(value === 'fanti'){
                this.$i18n.locale = "zh_cn";
                localStorage.setItem('lang',"zh_cn");
            }else if(value === 'jianti'){
                this.$i18n.locale = "zh";
                localStorage.setItem('lang',"zh");
            }
        }
    }
}
</script>
<style scoped>

.header.sticky {
    position: fixed;
    top: 0;
    z-index: 1030;
    width: 100%;
}

.header {
    z-index: unset;
    background: #1675dd;
    padding: 0 30px;
}
.header {
    z-index: 4;
    position: relative;
    background-color: #1675dd;
}
/* @media (min-width: 992px)
.container, .container-lg, .container-md, .container-sm {
    max-width: 960px;
}

@media (min-width: 768px)
.container, .container-md, .container-sm {
    max-width: 720px;
}
@media (min-width: 576px)
.container, .container-sm {
    max-width: 540px;
} */
.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.header .navigation-bar {
    font-family: Manrope;
    padding: 11px 0;
}
.header .container-fluid {
    margin: 0!important;
    max-width: 100%!important;
}

.header .container-fluid {
    max-width: 1100px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
}
.header .navigation-bar .cover-header {
    display: flex;
    justify-content: space-between;
}
.header .navigation-bar .cover-header .login-menu {
    border-radius: 8px;
    padding: 0 0 0 10px;
    display: flex;
    font-family: Poppins;
}
.header .navigation-bar .cover-header .btn-cover {
    display: flex;
}
.header .navigation-bar .cover-header .login-menu .btn-login {
    text-transform: capitalize;
    font-weight: 500;
    margin-right: 15px;
    display: flex;
    align-items: center;
}

.header .navigation-bar .cover-header .login-menu a {
    font-size: 14px;
    padding: 0 4px;
    color: #fff!important;
    text-transform: uppercase;
}
.header a.pointer {
    color: #000!important;
}
.pointer {
    cursor: pointer;
}
a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
}
.header .navigation-bar .cover-header .login-menu .btn-register {
    border: 1px solid #fff;
    border-radius: 2px;
    font-weight: 600;
    padding: 6px 20px;
}

.header .navigation-bar .cover-header .login-menu a {
    font-size: 14px;
    padding: 0 4px;
    color: #fff!important;
    text-transform: uppercase;
}
.header a.pointer {
    color: #000!important;
}
.pointer {
    cursor: pointer;
}
a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
}
.language {
    padding: 6px 2px;
}
.header .navigation-bar .cover-header .login-menu .language-toggle {
    display: flex;
}

.language .button {
    cursor: pointer;
    font-size: 12px;
}
.language-toggle {
    color: #fff;
    margin-left: 16px;
}
.language .button span {
    padding: 0 4px;
    font-size: 14px;
    font-weight: 500px;
    line-height: 0%;
}
.language .button svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
    margin: auto;
}

svg {
    overflow: hidden;
}
img, svg {
    vertical-align: middle;
}
.language .button span {
    padding: 0 4px;
    font-size: 14px;
    font-weight: 500px;
    line-height: 0%;
    color: white;
}
</style>
