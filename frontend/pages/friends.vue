<!--
 * @Date: 2020-04-16 00:26:28
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-04-16 14:06:14
 -->
<template>
  <div class="container">
    <el-tabs stretch="true">
      <el-tab-pane label="聊天">
        <div class="top">
          <el-row>
            <el-input placeholder="请输入内容" v-model="input2" class="ss"></el-input>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button icon="el-icon-plus" circle></el-button>
          <!--
		    <i style="font-size: 30px; font-weight: bold; text-align:center;vertical-align:middle;" class="el-icon-plus"></i>
          -->
		  </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="好友">
        <div class="top">
          <el-row>
            <el-input placeholder="请输入内容" v-model="input2" class="ss"></el-input>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button icon="el-icon-plus" circle></el-button>
          <!--
		    <i style="font-size: 30px; font-weight: bold; text-align:center;vertical-align:middle;" class="el-icon-plus"></i>
          -->
		  </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="圈子">

	  </el-tab-pane>
      <el-tab-pane label="校园">
		  
	  </el-tab-pane>
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
.ss {
  max-width: 74%;
  height: 50px;
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
