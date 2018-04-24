<template>
  <div>
    <router-link 
      class="header-abs"
      tag="div"
      to="/"
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe610;</div>
    </router-link>
    <div 
      class="header-fixed"
      v-show="!showAbs"
      :style="activeStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe610;</div> 
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      activeStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop;
      if (top > 0) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.activeStyle = {
          opacity
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () { // 解绑全局事件
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header-abs
    position absolute 
    left .266667rem
    top .266667rem
    width 1.066667rem
    height 1.066667rem
    line-height 1.066667rem
    border-radius .533333rem
    text-align center
    background rgba(0, 0, 0, .5)
    .header-abs-back
      color #ffffff
      font-size .533333rem
  .header-fixed
    z-index 2 
    position fixed
    left 0
    top 0
    right 0
    height $HeaderHight
    line-height $HeaderHight
    text-align center
    background-color $bgColor
    color #ffffff
    font-size .4rem
    .header-fixed-back
      position absolute
      top 0
      left 0
      width .853333rem
      text-align center
      font-size .533333rem
      color #ffffff
</style>
