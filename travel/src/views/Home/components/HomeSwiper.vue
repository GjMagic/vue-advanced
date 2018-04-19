<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide 
        v-for="item of swiperList" 
        :key="item.id"
      >
        <img :src="item.imgUrl" class="swiper-img" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false // 用户操作swiper之后，是否禁止autoplay。默认为true：停止
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped> // scoped限制了class名只能是本组件内的
  .wrapper >>> .swiper-pagination-bullet-active // 样式穿透解决scoped问题
    background-color #ffffff
  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 31.25%
    background-color #eeeeee
   .swiper-img
     width 100%
</style>
