<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperSlides" :key="item.id">
        <img :src="item.imgUrl" alt="" class="swiper-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      },
      swiperSlides: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/1b/6c766b79e2045102.jpg_640x200_3e44c74a.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/98/0a2e0bd8eb0c0802.png_640x200_0aae3331.png'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/f8/300474f00e42aa02.jpg_640x200_b4884104.jpg'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/45/0ac34e31b4a1fb02.jpg_640x200_7b7e09c7.jpg'
      }]
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
