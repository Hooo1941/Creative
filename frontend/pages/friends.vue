<!--
 * @Date: 2020-04-16 00:26:28
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-04-17 00:59:39
 -->
<template>
  <div class="container" >
    <el-tabs stretch = "true">
      <el-tab-pane label="聊天">
        <div class="top" v-if="$store.state.token">
          <el-row>
            <el-input placeholder="请输入内容" v-model="input2" class="ss"></el-input>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button icon="el-icon-plus" circle></el-button>
            <img src="../static/2.png"/>
		  </el-row>
        </div>
		<p v-else>要查看聊天请先<a href="/login">登录</a></p>
      </el-tab-pane>
      <el-tab-pane label="好友">
        <div class="top">
          <el-row>
            <el-input placeholder="请输入内容" v-model="input2" class="ss"></el-input>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button icon="el-icon-plus" circle></el-button>
			<img src="../static/1.png"/>
		  </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="圈子">
		  <Comment article_id="1"/>
	  </el-tab-pane>
      <el-tab-pane label="校园">
		  <div v-show = "show">
		            <el-row>
				你已经认证为武汉大学的学生了,看看校友在讨论什么吧。
            <el-button icon="el-icon-close" @click="closetab" circle></el-button>
			</el-row>
			</div>
		  <Comment article_id="2"/>
	  </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Comment from '../components/Comment.vue'
    export default {
        transition: 'bounce',
        name: "desktopDescription",
        components: {
            Comment
		},
		data() {
			return {
show : true
			}
			
		},
		methods: {
			closetab: function() {
				return {
			show : false
			}
			}
		}
}
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
