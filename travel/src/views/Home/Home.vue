<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icon :iconList="iconList"></home-icon>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import axios from 'axios';
import HomeHeader from './components/HomeHeader';
import HomeSwiper from './components/HomeSwiper';
import HomeIcon from './components/HomeIcon';
import HomeRecommend from './components/HomeRecommend';
import HomeWeekend from './components/HomeWeekend';
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios
      .get('/api/index.json')
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data;
      if(res.ret && res.data) {
        let { 
          city, swiperList, iconList, 
          recommendList, weekendList 
        } = res.data;
        
        this.city = city;
        this.swiperList = swiperList;
        this.iconList = iconList;
        this.recommendList = recommendList;
        this.weekendList = weekendList;
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
