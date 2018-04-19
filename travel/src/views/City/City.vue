<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotCities="hotCities" :cities="cities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import cityAlphabet from './components/cityAlphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    cityAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {}
    }
  },
  methods: {
    getCityInfo() {
      axios
      .get('/api/city.json')
      .then(this.getCityInfoSucc)
    },
    getCityInfoSucc(res) {
      res = res.data;
      if(res.ret && res.data) {
        let { hotCities, cities } = res.data
        this.hotCities = hotCities;
        this.cities = cities;
      }
    }
  },
  mounted () {
    this.getCityInfo();
  }
}
</script>

<style lang="stylus" scoped>

</style>
