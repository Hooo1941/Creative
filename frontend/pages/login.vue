<!--
 * @Date: 2020-04-16 13:45:02
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-04-17 01:19:15
 -->
<template>
    <div class="login">
		<img src="../static/logo.png" style="width:80%;margin: 0px 40px;"/>
        <el-form :model="ruleForm" :rules="rules" label-width="80px" ref="ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input autocomplete="off" type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="submitForm('ruleForm')" type="primary">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
		<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		
		<el-button @click="gotoregister" type="warning">注册</el-button>
    </div>

</template>
<script>
    import axios from 'axios'
    import Cookies from 'js-cookie'

    export default {
        name: 'login',
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'},
                    ],
                }
            };
        },
        methods: {
			gotoregister() {
				window.location.href = "/register";
			},
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post("/login", {
                            username: this.ruleForm.username,
                            password: this.ruleForm.password,
                        }).then(rep => {
                            console.log(rep);
                            if (rep.data.status === 200) {
								const token = rep.data.data.token;
                                this.$store.commit('setToken', token);
								Cookies.set('token', token, {expires: 30});
								Cookies.set('name', this.ruleForm.username, {expires: 30});
                                location.href = "/friends"
                            } else {
                                this.$message.error("用户名或密码不正确")
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
</style>
