<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div 
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div 
        class="area" 
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div 
            class="item border-bottom"
            v-for="city of item"
            :key="city.id"
          >{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        this.scroll.scrollToElement(this.$refs[this.letter][0])
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #cccccc
    &:after
      border-color #cccccc
  .list
    position absolute
    left 0
    top 2.106667rem
    right 0
    bottom 0
    overflow hidden
    .title
      line-height .72rem
      background-color #eeeeee
      padding-left .266667rem
      color #666666
      font-size .346667rem
    .button-list
      padding .133333rem .8rem .133333rem .133333rem
      overflow hidden
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .133333rem
          padding .133333rem 0
          text-align center
          border .026667rem solid #cccccc
          border-radius .08rem
    .item-list
      .item
        line-height 1.013333rem
        padding-left .266667rem
</style>
