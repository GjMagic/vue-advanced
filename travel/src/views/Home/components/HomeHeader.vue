<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe610;</div>
    </div>
    <div class="header-input">
      <span class="iconfont search-icon">&#xe634;</span>      
      输入景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe62b;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'; // 在style中引入其他的css需要在前边加~
  .header
    height 1.146667rem
    background-color $bgColor
    display flex
    color #ffffff
    line-height 1.146667rem
    .header-left
      width .853333rem
      float left
      .back-icon
        text-align center
        font-size .533333rem
    .header-input
      flex 1
      height .853333rem
      background-color #ffffff
      margin-top .133333rem
      margin-left .266667rem
      border-radius .133333rem
      color #cccccc
      line-height .853333rem
      padding-left .266667rem
      .search-icon
        font-size .373333rem
    .header-right
      width 1.653333rem
      float right
      text-align center
      .arrow-icon
        font-size .32rem
</style>
