<template>
  <div id="app">
    <!-- 
      1、放在缓存中，避免每次都请求一次接口 
      2、exclude是除了Detail组件其它的都放缓存里
    -->
    <keep-alive> 
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
