<template>
  <div>
    about
    <hr>
    <ul class="nav">
      <!-- 15.默认子路由后面不用写相应路径 -->
      <router-link to="/about" exact tag="li">
      <!-- 
      15.在router-link中嵌套标签a不用再写href，router-link会自动把to中路径加到a标签中 
      -->
        <a>study</a>
      </router-link>
      <router-link to="/about/work" tag="li">
        <a>work</a>
      </router-link>
      <router-link to="/about/hobby" tag="li">
        <a>hobby</a>
      </router-link>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>

