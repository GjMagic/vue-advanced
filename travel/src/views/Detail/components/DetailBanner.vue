<template>
  <div>
    <div class="banner" @click="handleGalleryClick">
      <img 
        class="banner-img"
        :src="bannerImg" 
      />
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <gallery
      :gallaryImgs="gallaryImgs"
      v-show="showGallery"
      @close="closeGallery"
    ></gallery>
  </div>
</template>

<script>
import Gallery from 'common/Gallery/Gallery'
export default {
  name: 'DetailBanner',
  props: {
    bannerImg: String,
    gallaryImgs: Array,
    sightName: String
  },
  data () {
    return {
      showGallery: false
    }
  },
  components: {
    Gallery
  },
  methods: {
    handleGalleryClick () {
      this.showGallery = true;
    },
    closeGallery () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .8rem
      color #ffffff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8)) 
      .banner-title
        font-size .426667rem
        flex 1
        padding 0 .266667rem
      .banner-number
        height .426667rem
        line-height .426667rem
        margin-top .186667rem
        padding 0 .426667rem
        border-radius .266667rem
        background-color rgba(0, 0, 0, .8)
        .banner-icon
          font-size .32rem
</style>
