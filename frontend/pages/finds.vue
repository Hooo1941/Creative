<!--
 * @Date: 2020-04-16 00:26:28
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-04-17 00:29:03
 -->
<template>
  <div class="container">
  <el-tabs stretch="true">
  <el-tab-pane label="约伴"><img src="../static/3.png" style = "width:85%"/></el-tab-pane>
  <el-tab-pane label="地图"><img src="../static/4.png" style = "width:85%"/></el-tab-pane>
  <el-tab-pane label="问学霸">问学霸</el-tab-pane>
</el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2: ""
    };
  }
};
</script>
<style>
.el-input {
  max-width: 90%;
}
.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 5px;
  text-align: center;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 24px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
