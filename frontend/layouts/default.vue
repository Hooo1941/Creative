<!--
 * @Date: 2020-04-16 00:14:23
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-04-16 19:23:39
 -->
<template>
  <div class="page">
    <div class="body">
      <nuxt />
    </div>
    <div class="footer">
      <el-menu mode="horizontal">
        <el-menu-item index="1">
          <a href="\friends">
		  <img alt="friends" class="img1" src="../static/friends.png"/>
		  </a>
        </el-menu-item>
        <el-menu-item index="2">
          <a href="\finds">
          <img alt="finds" class="img2" src="../static/finds.png"/>
          </a>
        </el-menu-item>
        <el-menu-item index="3">
          <a href="\article">
        <img alt="article" class="img3" src="../static/article.png"/>
          </a>
        </el-menu-item>
        <el-menu-item index="4">
          <a href="\tools">		 
			   <img alt="tools" class="img4" src="../static/tools.png"/>

          </a>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabPosition: "bottom"
    };
  }
};
</script>
<style>
.page {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.body {
  flex: 1;
}
.footer {
  flex: 0;
}
.el-menu-item {
	width:25%;
}
.img1 {
  width: 50%;
}

.img2 {
  width: 50%;
}

.img3 {
  width: 50%;
}

.img4 {
  width: 50%;
}

</style>