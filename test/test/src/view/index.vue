<template>
  <el-container class="con_container">
    <el-header>
      <!-- 头部开始 -->
      <el-row>
        <el-col :span="12"
          ><div class="font_left">浙江泰铭玻璃科技有限公司</div></el-col
        >
        <el-col :span="12" class="xzh">
          <div id="font_right-main">
            <div class="font_right">
              <i class="el-icon-s-home" style="font-size: 24px"></i>
              <p>日志</p>
            </div>
            <div class="font_right">
              <i class="el-icon-s-home" style="font-size: 24px"></i>
              <p>日志</p>
            </div>
            <div class="font_right">
              <i class="el-icon-s-home" style="font-size: 24px"></i>
              <p>日志</p>
            </div>
            <div class="font_right">
              <i class="el-icon-s-home" style="font-size: 24px"></i>
              <p>日志</p>
            </div>
            <div class="font_right">
              <i class="el-icon-s-home" style="font-size: 24px"></i>
              <p>日志</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- 头部结束 -->
    </el-header>
    <el-container>
      <!-- 左侧菜单开始 -->
      <el-aside :width="isCollapse ? '64px' : '210px'">
        <el-menu
          :unique-opened="true"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="rgb(21, 23, 53)"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse-transition="false"
          :collapse="isCollapse"
          router
        >
          <div class="icon">
            <i
              :class="{
                'el-icon-s-fold': isCollapse,
                'el-icon-s-unfold': !isCollapse,
              }"
              @click="isCollapse = !isCollapse"
            ></i>
          </div>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-marketing"></i>
              <span>主工作台</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index_work">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-marketing"></i>
              <span>销售管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index_work">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>生产管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-house"></i>
              <span>仓库管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-edit-outline"></i>
              <span>财务管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>数据中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-document-copy"></i>
              <span>基础数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 左侧菜单结束 -->
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

.con_container {
  height: 100% !important;
}
.el-menu {
  width: auto;
}
.icon {
  background-color: rgb(21, 23, 53);
  text-align: center !important;
  color: #fff;
  font-size: 14px;
}
.el-aside {
  background-color: aqua;
  background-color: rgb(21, 23, 53);
}
.el-header {
  background-color: rgb(21, 23, 53);
}
.el-header .font_left {
  margin-left: 20px;
  line-height: 60px;
  color: #fff;
  font-size: 24px;
}
#font_right-main {
  justify-content: flex-end;
  display: flex;
}
.el-header .font_right {
  margin: 10px 20px 0 0;
  font-size: 14px;
  text-align: right;
  color: #fff;
}
</style>