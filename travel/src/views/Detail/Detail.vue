<template>
  <div>
    <detail-banner
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
      :sightName="sightName"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :categoryList="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/DetailList'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      categoryList: [],
      bannerImg: '',
      gallaryImgs: [],
      sightName: ''
    }
  },
  methods: {
    getDetailInfo () {
      axios
      .get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
      .then(this.handleInfoSucc)
    },
    handleInfoSucc (res) {
      console.log(res)
      res = res.data;
      if (res.ret && res.data) {
        let { 
          categoryList, bannerImg, 
          gallaryImgs, sightName 
        } = res.data;
        this.categoryList = categoryList;
        this.bannerImg = bannerImg;
        this.gallaryImgs = gallaryImgs;
        this.sightName = sightName;
      }
    }
  },
  mounted () { // keep-alive对组件做了缓存导致mouted只触发一次
    this.getDetailInfo();
  },
}
</script>

<style lang="stylus" scoped>
  .content
    height 80rem
</style>
