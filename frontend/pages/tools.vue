<!--
 * @Date: 2020-04-16 08:22:57
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-04-17 00:45:50
 -->
<template>
  <div class="container">
  <el-tabs stretch="true" @tab-click="handleClick">
  <el-tab-pane label="公式库"><img src="../static/5.png" style = "width:85%"/></el-tab-pane>
  <el-tab-pane label="题库"><img src="../static/6.png" style = "width:85%"/></el-tab-pane>
  <el-tab-pane label="单词本"><img src="../static/7.png" style = "width:85%"/></el-tab-pane>
  <el-tab-pane label="设置" name = "set"></el-tab-pane>
</el-tabs>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
        if(tab.name == 'set'){
        	window.location.href = "/my";
        }
      },
  },
  }
</script>