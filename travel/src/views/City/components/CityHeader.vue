<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont header-back">&#xe610;</div> 
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    position relative
    overflow hidden
    height $HeaderHight
    line-height $HeaderHight
    text-align center
    background-color $bgColor
    color #ffffff
    font-size .4rem
    .header-back
      position absolute
      top 0
      left 0
      width .853333rem
      text-align center
      font-size .533333rem
      color #ffffff
</style>
