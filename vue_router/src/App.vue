<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <!-- 0.router-link默认绑定点击事件 -->
        <!-- 
          14.'/'这种写法是根路径，别的路径会包含根路径，所以为了避免包含，在
          router-link标签里加上exact 
        -->
        <router-link to="/" exact tag="li" event="mouseenter">
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>
        <!-- 1.router-link 默认是a标签，但是取消了a标签刷新页面的属性 -->
        <!-- <li>
          <router-link to="/home">home</router-link>
        </li> -->
        <!-- 2.router-link 可以自动兼容history模式和hash模式 -->
        <li>
          <router-link 
            :to="{path: '/document#txt'}" 
            active-class="activeClass"
            event="mouseover"  
          >
            document
          </router-link>
        </li>
        <!-- 3.在router实例中没有写mode时，跳转时不刷新页面，并且会自动加上#，不用手写 -->
        <li>
          <router-link 
            :to="index" 
            event="mouseover"
          >
            about
        </router-link>
        <li>
          <router-link 
            :to="{name: 'User'}" 
            event="mouseover"
          >
            user
        </router-link>
        </li>
      </ul>
    </div>
    <!-- 
      9.如果想在每个子组件的根节点添加相同的class，就在router-view里添加class，
      这里添加的class会与子组件根节点的class合并
    -->
    <!-- 17.命名视图：有时候想同时（同级）展示多个视图，而不是嵌套展示 -->
    <router-view name="slider"></router-view>
    <router-view name="slider"></router-view>

    <router-view class="center"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      index: '/about'
    }
  }
}
</script>

<style>
  /* 4.router-link预留了一个class名（router-link-active）供开发者动态的改变css */
  .router-link-active {
    background: red;
  }
  /* 7.用改变之后的class名改变激活时的状态 */
  .active {
    background: yellow;
  }
  /* 8.可以用active-class单独改变某个标签激活时的css */
  .activeClass {
    background: pink;
  }
</style>
