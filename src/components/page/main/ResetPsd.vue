<template>
    <div class="main-container-body auth-container">
        <div class="children">
            <div class="forgot-password-container">
                <div class="forgot-password col-md-6 col-sm-12">
                    <h1 class="heading text-center mb-3">Reset password</h1>
                    <el-form :model="form" :rules="rules" ref="form" label-position="top">
                        <el-form-item class="form-group common" prop="email"
                            :error="getErrorForField('email', errors)">
                            <el-input v-model="form.email" placeholder="Email" :disabled="formProcessing"
                                ref="loginInput"></el-input>
                        </el-form-item><button id="email-login" class="btn btn-lg btn-success btn-block" @click="resetPsd('form', $event)">Send reset
                        link</button>
                    <div class="form-group text-center mt-3 common"><a class="link" href="/login">Back to Login</a>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</div></template>

<script>
export default {
    data: function() {
        return {
            rules: {
                email: {
                    required: true,
                    //validator: this.customValidator,
                    //trigger: 'blur'
                }
            },
            formProcessing: false,
            errors: [],
            form: {
                email: ''
            }
        }
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
        resetPsd(formName, e) {
            e.preventDefault();
            this.$refs[formName].validate(valid => {
                if (!valid) {
                    return false
                }
                this.formProcessing = true;

                this.$http.post('/resetPassword', {
                    email: this.form.email
                }).then(r => {
                    if (r.data.code == 200) {
                        this.$message({
                            message: '重置密码邮件发送成功',
                            type: 'success'
                        })
                    } else {
                        this.$message({
                            message: '重置密码邮件发送失败',
                            type: 'error'
                        })
                    }
                }).catch(e => {
                    this.$message({
                            message: '重置密码邮件发送失败',
                            type: 'error'
                        })
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