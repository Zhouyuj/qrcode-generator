<template>
    <div class="main-container-body auth-container">
        <div class="children">
            <div class="login-container">
                <el-form :model="form" :rules="rules" ref="form" label-position="top">
                    <div class="login col-md-6 col-sm-12">
                        <p class="heading text-center mb-3">Log in to your QR account</p>
                        <div id="google-login" class="text-center mb-3"><button type="button" class="w-full"
                                style="width: 100%; justify-content: 'center'; background-color: rgb(255, 255, 255); display: inline-flex; align-items: center; color: rgba(0, 0, 0, 0.54); box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px; padding: 0px; border-radius: 2px; border: 1px solid transparent; font-size: 14px; font-weight: 500; font-family: Roboto, sans-serif;">
                                <div
                                    style="margin-right: 10px; background: rgb(255, 255, 255); padding: 10px; border-radius: 2px;">
                                    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#000" fill-rule="evenodd">
                                            <path
                                                d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                                                fill="#EA4335"></path>
                                            <path
                                                d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                                                fill="#4285F4"></path>
                                            <path
                                                d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                                                fill="#FBBC05"></path>
                                            <path
                                                d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                                                fill="#34A853"></path>
                                            <path fill="none" d="M0 0h18v18H0z"></path>
                                        </g>
                                    </svg>
                                </div><span style="padding: 10px 10px 10px 0px; font-weight: 500;">Login with
                                </span>
                                <el-dropdown @command="signWithThird">
                                    <span class="el-dropdown-link">
                                        {{ current_lang }}<i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item command="google">Google</el-dropdown-item>
                                        <el-dropdown-item command="github">Github</el-dropdown-item>
                                        <el-dropdown-item command="facebook">Facebook</el-dropdown-item>
                                        <el-dropdown-item command="microsoft">Microsoft</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>

                            </button></div>
                        <!-- <div id="github-login" class="text-center mb-3"><button type="button" class="w-full"
                                @click="signWithThird('github')"
                                style="width: 100%; justify-content: 'center'; background-color: rgb(255, 255, 255); display: inline-flex; align-items: center; color: rgba(0, 0, 0, 0.54); box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px; padding: 0px; border-radius: 2px; border: 1px solid transparent; font-size: 14px; font-weight: 500; font-family: Roboto, sans-serif;">
                                <div
                                    style="margin-right: 10px; background: rgb(255, 255, 255); padding: 10px; border-radius: 2px;">
                                    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#000" fill-rule="evenodd">
                                            <path
                                                d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                                                fill="#EA4335"></path>
                                            <path
                                                d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                                                fill="#4285F4"></path>
                                            <path
                                                d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                                                fill="#FBBC05"></path>
                                            <path
                                                d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                                                fill="#34A853"></path>
                                            <path fill="none" d="M0 0h18v18H0z"></path>
                                        </g>
                                    </svg>
                                </div><span style="padding: 10px 10px 10px 0px; font-weight: 500;">Login with
                                    Github</span>
                            </button></div>
                            <div id="facebook-login" class="text-center mb-3"><button type="button" class="w-full"
                                @click="signWithThird('facebook')"
                                style="width: 100%; justify-content: 'center'; background-color: rgb(255, 255, 255); display: inline-flex; align-items: center; color: rgba(0, 0, 0, 0.54); box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px; padding: 0px; border-radius: 2px; border: 1px solid transparent; font-size: 14px; font-weight: 500; font-family: Roboto, sans-serif;">
                                <div
                                    style="margin-right: 10px; background: rgb(255, 255, 255); padding: 10px; border-radius: 2px;">
                                    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#000" fill-rule="evenodd">
                                            <path
                                                d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                                                fill="#EA4335"></path>
                                            <path
                                                d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                                                fill="#4285F4"></path>
                                            <path
                                                d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                                                fill="#FBBC05"></path>
                                            <path
                                                d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                                                fill="#34A853"></path>
                                            <path fill="none" d="M0 0h18v18H0z"></path>
                                        </g>
                                    </svg>
                                </div><span style="padding: 10px 10px 10px 0px; font-weight: 500;">Login with
                                    Facebook</span>
                            </button></div> -->
                        <el-form-item class="form-group common" prop="email" :error="getErrorForField('email', errors)">
                            <el-input v-model="form.email" placeholder="Email address" ref="loginInput"></el-input>
                        </el-form-item>
                        <el-form-item class="form-group common" prop="password"
                            :error="getErrorForField('password', errors)">
                            <el-input type="password" v-model="form.password" placeholder="Password"
                                ref="loginInput"></el-input>
                        </el-form-item>
                        <!-- <div class="form-group common">
                        <div class="d-flex flex-column"><input name="email" id="email" class="form-control" type="text"
                                placeholder="Email address" v-model="form.name"></div>
                    </div>
                    <div class="form-group common">
                        <div class="d-flex flex-column"><input name="password" id="password" class="form-control"
                                type="password" placeholder="Password" v-model="form.password"></div>
                    </div> -->
                        <div class="checkbox"><label class="d-flex align-items-center" for="checkbox"><input type="checkbox"
                                    v-model="rememberMe" @change="toggleRem"><span class="ml-1 common">Remember
                                    me</span></label></div><button id="email-login" class="btn btn-lg btn-success btn-block"
                            @click="signIn('form', $event)">Sign in</button>
                        <div class="form-group text-center mt-3 common"><a class="link" href="/reset-password">Forgot
                                password</a></div>
                        <div class="form-group text-center mt-2 mb-0 common"><span class="mr-2">Don't have an
                                account?</span><a class="link" href="/register">Sign up</a></div>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, OAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
export default {
    mounted() {
        if (localStorage.getItem('email')) {
            try {
                this.rememberMe = JSON.parse(localStorage.getItem('rememberMe'));
            } catch (e) {
                this.rememberMe = false;
            } finally {

            }

            this.form.email = localStorage.getItem('email');
            this.form.password = localStorage.getItem('password');
        }
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyBGMDJ_dhXjkbJMuM5mP6HCRGKl4T-pE4o",
            authDomain: "vivid-access-389008.firebaseapp.com",
            projectId: "vivid-access-389008",
            storageBucket: "vivid-access-389008.appspot.com",
            messagingSenderId: "78774932154",
            appId: "1:78774932154:web:96c85b78e9e4ce4c32a883"
        };

        // Initialize Firebase
        initializeApp(firebaseConfig);
    },
    methods: {
        getErrorForField(field, errors) {
            if (!errors && !errors.length) {
                return false
            }
            let filtered = errors.filter(error => {
                return error.path[0] === field
            })
            if (filtered.length) {
                return filtered[0].message
            }
        },
        toggleRem(e) {
            // console.log(e.target.checked, this.rememberMe)
            // localStorage.setItem('rememberMe', e.target.checked);
        },
        async signIn(formName, e) {
            e.preventDefault();
            const options = {
                method: 'POST',
                url: 'https://qrcode-monkey.p.rapidapi.com/qr/custom',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': 'e3df55841amsh34f20d9822c2612p1fa036jsn9ad85883e1e8',
                    'X-RapidAPI-Host': 'qrcode-monkey.p.rapidapi.com'
                },
                data: {
                    data: 'https://www.qrcode-monkey.com',
                    config: {
                        body: 'rounded-pointed',
                        eye: 'frame14',
                        eyeBall: 'ball16',
                        erf1: [],
                        erf2: ['fh'],
                        erf3: ['fv'],
                        brf1: [],
                        brf2: ['fh'],
                        brf3: ['fv'],
                        bodyColor: '#5C8B29',
                        bgColor: '#FFFFFF',
                        eye1Color: '#3F6B2B',
                        eye2Color: '#3F6B2B',
                        eye3Color: '#3F6B2B',
                        eyeBall1Color: '#60A541',
                        eyeBall2Color: '#60A541',
                        eyeBall3Color: '#60A541',
                        gradientColor1: '#5C8B29',
                        gradientColor2: '#25492F',
                        gradientType: 'radial',
                        gradientOnEyes: false,
                        logo: ''
                    },
                    size: 300,
                    download: false,
                    file: 'png'
                }
            };

            try {
                const response = await this.$http.request(options);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
        // signIn: function (formName, e) {
        //     e.preventDefault();
        //     this.$refs[formName].validate(valid => {
        //         if (!valid) {
        //             return false
        //         }


        //         this.formProcessing = true;
        //         this.$http.post('/login', {
        //             email: this.form.email,
        //             password: this.form.password
        //         }).then(r => {
        //             var code = r.data.code;
        //             if (code == 200) {
        //                 localStorage.setItem('token', r.data.token);
        //                 localStorage.setItem('isLogged', true);
        //                 this.$store.commit('setIsLogged', true);
        //                 this.$store.commit('setUserInfo', r.data.info);
        //                 this.$router.push('/index');

        //                 if (this.rememberMe) {
        //                     localStorage.setItem('email', this.form.email);
        //                     localStorage.setItem('password', this.form.password);
        //                     localStorage.setItem('rememberMe', this.rememberMe);
        //                 } else {
        //                     localStorage.removeItem('email');
        //                     localStorage.removeItem('password');
        //                     localStorage.removeItem('rememberMe');
        //                 }
        //             } else {
        //                 this.$message({
        //                     message: r.data.msg,
        //                     type: 'error'
        //                 })
        //             }
        //         }).catch(e => {
        //             this.$message({
        //                 message: '系统出错',
        //                 type: 'error'
        //             })
        //         })
        //     });
        // },
        signWithThird(type) {
            var provider;
            switch (type) {
                case 'github':
                    provider = new GithubAuthProvider();
                    break;
                case 'google':
                    provider = new GoogleAuthProvider();
                    break;
                case 'facebook':
                    provider = new FacebookAuthProvider();
                    break;
                case 'microsoft':
                    provider = new OAuthProvider('microsoft.com');
            }

            const auth = getAuth();
            signInWithPopup(auth, provider)
                .then((result) => {
                    console.log(auth, result);
                    if (result.user) {
                        var user = result.user;
                        this.$http.post('/thirdLogin', {
                            email: user.email,
                            username: user.displayName
                        }).then(r => {
                            localStorage.setItem('token', r.data.token);
                            localStorage.setItem('isLogged', true);
                            this.$store.commit('setIsLogged', true);
                            this.$store.commit('setIsThirdLogged', true);
                            this.$store.commit('setUserInfo', r.data.info);
                            this.$router.push('/index');
                        }).catch(e => {
                            this.$message({
                                message: '系统出错',
                                type: 'error'
                            })
                        })
                    }
                }).catch((error) => {
                    console.log(error)
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                });
        }
    },
    data: function () {
        return {
            form: {
                email: '',
                password: ''
            },
            rememberMe: false,
            rules: {
                email: {
                    required: true,
                    //validator: this.customValidator,
                    //trigger: 'blur'
                },
                password: {
                    required: true,
                    //validator: this.customValidator,
                    //trigger: 'blur'
                }
            },
            formProcessing: false,
            errors: []
        }
    }
}
</script>

<style scoped>
.main-container-body.auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-container-body {
    min-height: calc(100vh - 175px);
}

.children {
    z-index: 2;
}

.login-container {
    padding: 16px;
}

.login {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    max-width: 400px;
}

.login .heading {
    font-family: Metropolis;
    font-size: 22px;
    font-weight: 600;
}

.login .common {
    font-family: Metropolis;
}

.login .form-group {
    background: none;
}

.form-group {
    margin-bottom: 8px;
}

.form-group {
    margin-bottom: 1rem;
}

.login #email,
.login #password {
    border: 1px solid #d4d4d4;
    border-radius: 4px;
    padding: 20px 16px;
    font-size: 14px;
}

input[type=checkbox],
input[type=radio] {
    box-sizing: border-box;
    padding: 0;
}

button,
input {
    overflow: visible;
}

button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

.login #email-login {
    font-family: Metropolis;
    font-weight: 700;
    font-size: 16px;
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

.login .btn-block {
    display: flex;
    justify-content: center;
    align-items: center;
}

.login .common {
    font-family: Metropolis;
}

.login .form-group {
    background: none;
}

.login .common a,
.login .common span {
    font-weight: 700;
    font-size: 14px;
}

.link {
    color: #1675dd !important;
    cursor: pointer;
    font-weight: 400;
}

a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
}

.login .common a,
.login .common span {
    font-weight: 700;
    font-size: 14px;
}
</style>
