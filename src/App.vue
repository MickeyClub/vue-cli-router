<template>
  <div id="app">
    <header class="header">
            <img src="./assets/img/login.1.png" alt="">
            <!-- 使用 router-link 组件来导航. -->
            <!-- 通过传入 `to` 属性指定链接. -->
            <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
            <router-link to="/find">发现音乐</router-link>
            <router-link to="/my">我的音乐</router-link>
            <router-link to="/friend">朋友</router-link>
            <router-link to="/shop">商城</router-link>
            <router-link to="/musician">音乐人</router-link>
            <router-link to="/download">下载客户端</router-link>
            <img src="./assets/img/search.png" alt="">
        </header>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
  </div>
</template>

<script>
//
export default {
  // 在开发者工具中能够看到组件的名字(可以不写),写了之后方便调试
  name: "App",
  data: function() {
    return {
      msg: "感觉自己萌萌哒"
    };
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
.header {
  height: 70px;
  background-color: #242424;
  text-align: center;
}
.header img {
  vertical-align: middle;
}
.header a {
  display: inline-block;
  height: 70px;
  line-height: 70px;
  color: white;
  text-decoration: none;
  font-size: 14px;
  padding: 0 10px;
}
.router-link-active {
  background-color: black;
}
</style>