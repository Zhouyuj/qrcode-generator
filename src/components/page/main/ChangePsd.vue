<template>
    <div class="main-container-body auth-container">
        <div class="children">
            <div class="forgot-password-container">
                <div class="forgot-password col-md-6 col-sm-12">
                    <h1 class="heading text-center mb-3">Change password</h1>
                    <el-form :model="form" :rules="rules" ref="form" label-position="top">
                        <el-form-item class="form-group common" prop="password"
                            :error="getErrorForField('password', errors)">
                            <el-input v-model="form.password" placeholder="Password" type="password"
                                ref="loginInput"></el-input>
                        </el-form-item>
                        <el-form-item class="form-group common" prop="confirmPassword"
                            :error="getErrorForField('confirm-password', errors)">
                            <el-input v-model="form.confirmPassword" placeholder="Confirm password" type="password"
                                ref="loginInput"></el-input>
                        </el-form-item><button id="email-login" class="btn btn-lg btn-success btn-block" @click="changePsd('form', $event)">change password</button>
                    
                </el-form>
            </div>
        </div>
    </div>
</div></template>

<script>
export default {
    computed: {
        user_info: function() {
            return this.$store.state.userInfo
        }
    },
    data: function() {
        const customValidator = (rule, value, callback) => {
            if (rule.field === 'confirmPassword') {
                if (!value) {
                    callback('请输入确认密码')
                } else if (value && value !== this.form.password) {
                    callback('两次输入的密码不一致')
                } else {
                    callback();
                }
            }else if (['password'].includes(rule.field)) {
                if (!value) {
                    callback('请输入密码')
                } else if (value && this.form.confirmPassword && value !== this.form.confirmPassword) {
                    callback('两次输入的密码不一致')
                } else {
                    callback();
                }
            }
        }
        return {
            rules: {
                password: {
                    required: true,
                    validator: customValidator,
                    //trigger: 'blur'
                },
                confirmPassword: {
                    required: true,
                    validator: customValidator,
                    //trigger: 'blur'
                },
            },
            formProcessing: false,
            errors: [],
            form: {
                password: '',
                confirmPassword: ''
            }
        }
    },
    methods: {
        getErrorForField(field, errors) {
            console.log(field, errors)
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
        changePsd(formName, e) {
            e.preventDefault();
            this.$refs[formName].validate(valid => {
                if (!valid) {
                    return false
                }
                this.formProcessing = true;
                

                this.$http.post('/changePassword', {
                    password: this.form.password,
                    id: this.user_info.id
                }).then(r => {
                    if (r.data.code == 200) {
                        this.$message({
                            message: '密码修改成功',
                            type: 'success'
                        });
                        localStorage.removeItem('token');
                        this.$store.commit('setIsLogged', false);
                        localStorage.removeItem('isLogged');
                        this.$store.commit('setUserInfo', {});
                        this.$router.push('/login');
                    } else {
                        this.$message({
                            message: '密码修改失败',
                            type: 'error'
                        })
                    }
                }).catch(e => {
                    // this.$message({
                    //         message: '密码修改失败',
                    //         type: 'error'
                    //     })
                })
            })
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
.forgot-password {
    background-color: #fff;
    border-radius: 5px;
    padding: 16px;
    max-width: 400px;
    min-width: 400px;
}
.forgot-password .heading {
    font-family: Metropolis;
    font-size: 22px;
    font-weight: 600;
}
.forgot-password .common {
    font-family: Metropolis;
}

.forgot-password .form-group {
    background: none;
}
.forgot-password #email-login {
    font-family: Metropolis;
    font-weight: 700;
    font-size: 16px;
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
.forgot-password .btn-block {
    display: flex;
    justify-content: center;
    align-items: center;
}
.forgot-password .common a, .forgot-password .common span {
    font-weight: 700;
    font-size: 14px;
}

.link {
    color: #1675dd!important;
    cursor: pointer;
    font-weight: 400;
}
a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
}
</style>