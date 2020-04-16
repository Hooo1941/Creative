<!--
 * @Date: 2020-04-16 15:06:26
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-04-17 01:09:27
 -->
<template>
    <div class="menu">
            <div v-if="$store.state.token">
                用户中心<br/><br/><br/>
				<img alt="friends" class="img1" src="../static/head.png"/>
				<br/><br/>
				用户名: <div id = "uname"></div>
				<br/>学校：武汉大学
				<br/>学号：2019
				<br/><br/>
                <el-button @click="clearCookie()" index="/login">注销</el-button>
            </div>
				<p v-else>请先<a href="/login">登录</a>或<a href="/register">注册</a></p>
    </div>
</template>

<script>
    import Cookies from 'js-cookie'

    export default {
		name: "myMenu",
		mounted:function(){
      this.getCookie();
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
				let t = document.getElementById("uname");
				if (!(typeof t == "undefined" || t == null || t == ""))
				t.innerHTML = name;
			}
        }
    }
</script>


<style>
    .menu {
        text-align: center;
    }
</style>