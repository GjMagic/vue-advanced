<template>
  <div>
    <div class="search">
      <input 
        class="search-input" 
        placeholder="请输入城市名或拼音" 
        v-model="value"
      />
    </div>
    <div 
      class="search-content" 
      ref="wrapper"
      v-show="value"
    >
      <ul>
        <li 
          v-for="item of cityList"
          :key="item.id"
          class="search-item border-bottom"
        >{{item.name}}</li>
        <li 
          class="search-item border-bottom"
          v-show="hasNoData"
        >没有找到匹配项</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      cityList: [],
      value: '',
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.cityList.length;
    }
  },
  watch: {
    value () {

      if (this.timer) {
        clearTimeout(this.timer);
      }

      if (!this.value) {
        this.cityList = [];
        return;
      }

      this.timer = setTimeout(() => {
        const list = [];
        for (const i in this.cities) {
          if (this.cities.hasOwnProperty(i)) {
            const element = this.cities[i];
            element.forEach(item => {
              if (item.spell.indexOf(this.value) > -1 || item.name.indexOf(this.value) > -1) {
                list.push(item);
              }
            });
          }
        }
        this.cityList = list;
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper);
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .search
    height .96rem
    padding 0 .133333rem
    background-color $bgColor
    .search-input
      width 100%
      height .826667rem
      padding 0 .133333rem
      line-height .826667rem
      text-align center 
      border-radius .08rem
      color #666666
  .search-content
    overflow hidden
    position absolute
    top 2.106667rem
    left 0
    right 0
    bottom 0
    background #eeeeee
    z-index 999
    .search-item
      line-height .826667rem
      padding-left .266667rem
      background #ffffff
      color #666
</style>
