<!--
 * @Date: 2020-04-16 15:06:26
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-04-16 19:22:04
 -->
<template>
    <div class="menu">
        <el-container>
            <el-main v-if="!$store.state.token">
				<br/><br/><br/><br/><br/><br/><br/><br/><br/>
                您尚未登录<br/><br/><a href="/login">
                <el-button type="primary">登录</el-button></a><br/><br/>	
                <el-button type="primary" plain>注册</el-button>
            </el-main>
            <el-main v-if="$store.state.token">
                用户中心<br/><br/><br/>
				<img alt="friends" class="img1" src="../static/head.png"/>
				<br/><br/>
				用户名: <div id = "uname"></div>
				<br/>学校：武汉大学
				<br/>学号：2019
				<br/><br/>
                <el-button @click="clearCookie()" index="/login">注销</el-button>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import Cookies from 'js-cookie'

    export default {
		name: "myMenu",
		mounted:function(){
      this.getCookie();//需要触发的函数
    },
        methods: {
            handleSelect(key, keyPath) {
                window.console.log(key, keyPath);
            },
            clearCookie: function () {
                Cookies.remove('token');
                Cookies.remove('vuex');
//location.reload();
                window.location.href = "/login";
			},
			getCookie: function ()
			{
				let name = Cookies.get('name');
				//document.getElementById("uname").innerHTML = name;
			}
        }
    }
</script>


<style>
    .menu {
        text-align: center;
    }
</style>