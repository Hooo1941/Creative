<!--
 * @Date: 2020-04-16 00:26:28
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-04-16 01:09:40
 -->
<template>
  <div class="container">
	  <div class="top">
<el-row>
	<el-input
    placeholder="请输入内容" v-model="input2" class="ss">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
   <!--
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  <el-button icon="el-icon-search" circle></el-button>
   -->
     <i style="font-size: 25px; font-weight: bold; text-align:center;" class="el-icon-plus"></i>
</el-row>
</div>
	<el-row :gutter="15">
  <el-col :span="6"><div class="grid-content bg-purple">聊天</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">好友</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">圈子</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">校园</div></el-col>
</el-row>
  </div>
</template>

<script>

export default {
    data() {
    return {
      input2: ''
    }
  }
}
</script>
<style>
.el-input{
	max-width:90%;
}
  .el-row {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 5px;
	text-align:center;
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
