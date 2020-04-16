<!--
 * @Date: 2020-04-16 14:11:13
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-04-16 23:19:23
 -->
<template>
    <div class="register">
        <el-form :model="ruleForm" :rules="rules" label-width="100px" ref="ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input autocomplete="off" type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="passwordConfirm">
                <el-input autocomplete="off" type="password" v-model="ruleForm.passwordConfirm"></el-input>
            </el-form-item>
			<el-form-item label="性别" prop="sex">
  <el-radio v-model="radio" label="1">男</el-radio>
  <el-radio v-model="radio" label="2">女</el-radio>
  </el-form-item>
            <el-form-item label="学校" prop="school">
                <el-input v-model="ruleForm.school"></el-input>
            </el-form-item>
			<el-form-item label="学号" prop="id">
                <el-input v-model="ruleForm.id"></el-input>
            </el-form-item>
            <el-form-item label="入学时间" prop="time">
				<el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
            </el-form-item>
            <el-form-item>
                <el-button @click="submitForm('ruleForm')" type="primary">立即注册</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>
<script>
    import axios from 'axios'

    export default {
        name: 'register',
        data() {
            const validatePass = (rule, value, callback) => {
                if (value !== this.ruleForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
        options: [{
          value: '选项1',
          label: '2020'
        }, {
          value: '选项2',
          label: '2019'
        }, {
          value: '选项3',
          label: '2018'
        }, {
          value: '选项4',
          label: '2017'
        }, {
          value: '选项5',
          label: '2016'
        }],
        value: '2020'
      ,
                ruleForm: {
                    username: '',
                    password: '',
                    passwordConfirm: ''
				},
				radio: '1',
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'},
                    ],
                    passwordConfirm: [
                        {required: true, message: '请再次输入密码', trigger: 'blur'},
                        {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'},
                        {validator: validatePass, trigger: 'blur'},
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post("/register", {
                            username: this.ruleForm.username,
                            password: this.ruleForm.password,
                            passwordConfirm: this.ruleForm.passwordConfirm
                        }).then(rep => {
                            console.log(rep);
                            if (rep.data.status === 200) {
                                this.$message.success("注册成功");
                                setInterval(() => {
                                    location.href = "/login"
                                }, 1000)
                            } else if (rep.data.status === 40002) {
                                this.$message.error("用户名已被注册")
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
    .register {
        margin: 100px auto;
        width: 80%;
    }
</style>
