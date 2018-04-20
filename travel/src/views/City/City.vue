<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list 
      :hotCities="hotCities" 
      :cities="cities"
      :letter="letter"
    ></city-list>
    <city-alphabet 
      :cities="cities"
      @alphabetChange="handleAlphabetChange"
    ></city-alphabet>
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
      cities: {},
      letter: ''
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
    },
    handleAlphabetChange (letter) {
      this.letter = letter;
    }
  },
  mounted () {
    this.getCityInfo();
  }
}
</script>

<style lang="stylus" scoped>

</style>
