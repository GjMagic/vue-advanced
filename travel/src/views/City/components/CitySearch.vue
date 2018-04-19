<template>
  <div class="search">
    <input class="search-input" placeholder="请输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .search
    height .96rem
    padding 0 .133333rem
    background-color $bgColor
    .search-input
      width 100%
      height .826667rem
      padding 0 .133333rem
      line-height .826667rem
      text-align center 
      border-radius .08rem
      color #666666
</style>
