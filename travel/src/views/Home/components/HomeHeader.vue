<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe610;</div>
    </div>
    <div class="header-input">
      <span class="iconfont search-icon">&#xe634;</span>      
      输入景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe62b;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'; // 在style中引入其他的css需要在前边加~
  .header
    height $HeaderHight
    background-color $bgColor
    display flex
    color #ffffff
    line-height $HeaderHight
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
      margin-top .146667rem
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
      color #ffffff
      .arrow-icon
        font-size .32rem
</style>
