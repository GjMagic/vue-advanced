<template>
  <div class="container" @click="handleGalleryClose">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide 
          v-for="(item, index) of gallaryImgs"
          :key="index"
        >
          <img 
            :src="item"
            class="gallery-img" 
          />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    gallaryImgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true, // 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
        observeParents: true, // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
      }
    }
  },
  methods: {
    handleGalleryClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-container
    overflow inherit 
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    z-index 999
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      height 0
      width 100%
      padding-bottom 100%
      .gallery-img
        width 100%
      .swiper-pagination
        color #ffffff
        bottom -.933333rem
</style>
