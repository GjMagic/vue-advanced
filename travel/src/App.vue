<template>
  <div id="app">
    <keep-alive> <!-- 放在缓存中，避免每次都请求一次接口 -->
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
