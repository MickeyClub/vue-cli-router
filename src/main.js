import Vue from 'vue'
import App from './App.vue'
// 导入VurRouter
import VueRouter from 'vue-router'
// 必须use一下
Vue.use(VueRouter)
// 导入组件
import find from './components/find.vue';
import my from './components/my.vue';
import friend from './components/friend.vue';
import shop from './components/shop.vue';
import musician from './components/musician.vue';
import download from './components/download.vue';

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [{
    path: "/",
    component: find
  },
  {
    path: "/find",
    component: find
  },
  {
    path: "/my",
    component: my
  },
  {
    path: "/friend",
    component: friend
  },
  {
    path: "/shop",
    component: shop
  },
  {
    path: "/musician",
    component: musician
  },
  {
    path: "/download",
    component: download
  },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')