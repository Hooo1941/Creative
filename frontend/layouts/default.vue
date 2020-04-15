<!--
 * @Date: 2020-04-16 00:14:23
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-04-16 01:28:13
 -->
<template>
<div class = "page">
<div class="body">
<nuxt />
</div>
<div class = "footer">
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">好友</el-menu-item>
   <el-menu-item index="2">发现</el-menu-item>
  <el-menu-item index="3" disabled>文章</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">工具</a></el-menu-item>
</el-menu>
</div>
</div>
</template>

<style>
.page
{
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
}
.page
{display: flex;flex-direction: column;min-height: 100%;}
.body{flex: 1;}
.footer{flex: 0;}
.el-menu-item
{
	width:25%;
	text-align:center;
}
</style>