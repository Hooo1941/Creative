<!--
 * @Date: 2020-04-16 00:14:23
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-04-16 13:44:34
 -->
<template>
  <div class="page">
    <div class="body">
      <nuxt />
    </div>
    <div class="footer">
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
          <a href="\friends">
            <!--
			<i
              style="font-size: 25px; font-weight: bold; text-align:center;"
              class="el-icon-chat-dot-round"
            ></i><br/>
			社交
          -->
		  <img alt="friends" class="img1" src="../static/friends.png"/>
		  </a>
        </el-menu-item>
        <el-menu-item index="2">
          <a href="\finds">
            <i
              style="font-size: 25px; font-weight: bold; text-align:center;"
              class="el-icon-search"
            ></i>
          </a>
        </el-menu-item>
        <el-menu-item index="3">
          <a href="\article">
            <i
              style="font-size: 25px; font-weight: bold; text-align:center;"
              class="el-icon-notebook-2"
            ></i>
          </a>
        </el-menu-item>
        <el-menu-item index="4">
          <a href="\tools">
            <i
              style="font-size: 25px; font-weight: bold; text-align:center;"
              class="el-icon-s-tools"
            ></i>
          </a>
        </el-menu-item>
      </el-menu>
      <!--
      <el-tabs :tab-position="tabPosition" style="height: 50px;" stretch="true">
        <el-tab-pane>
          <span slot="label">
            <a href="\friends">
              <i
                style="font-size: 25px; font-weight: bold; text-align:center;"
                class="el-icon-chat-dot-round"
              ></i>
            </a>
          </span>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">
            <a href="\finds">
              <i
                style="font-size: 25px; font-weight: bold; text-align:center;"
                class="el-icon-search"
              ></i>
            </a>
          </span>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">
            <a href="\article">
              <i
                style="font-size: 25px; font-weight: bold; text-align:center;"
                class="el-icon-chat-dot-round"
              ></i>
            </a>
          </span>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">
            <a href="\tools">
              <i
                style="font-size: 25px; font-weight: bold; text-align:center;"
                class="el-icon-chat-dot-round"
              ></i>
            </a>
          </span>
        </el-tab-pane>
      </el-tabs>
      -->
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
</style>