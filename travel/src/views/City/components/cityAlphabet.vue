<template>
  <ul class="list">
    <li 
      class="item"
      v-for="item of alphabetList"
      :key="item"
      :ref="item"
      @click="handleAlphabetClick"
      @touchstart.prevent="handleTouchStart" 
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'cityAlphabet',
  data () {
    return {
      touchStart: false,
      startY: 0,
      timer: null
    }
  },
  props: {
    cities: Object
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop; // 在组件更新时拿一次即可
  },
  computed: {
    alphabetList () {
      let alphabetList = [];
      for (const i in this.cities) {
        if (this.cities.hasOwnProperty(i)) {
          alphabetList.push(i);
        }
      }
      return alphabetList;
    }
  },
  methods: {
    handleAlphabetClick (e) {
      this.$emit('alphabetChange', e.target.innerHTML);
    },
    handleTouchStart () {
      this.touchStart = true;
    },
    handleTouchMove (e) {
      if (this.touchStart) {
        // 函数节流，提高性能
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY;
          let index = Math.floor((touchY - this.startY - 79) / 20);
          if (index >= 0 && index < this.alphabetList.length) { // 防止出界了也进行计算
            this.$emit('alphabetChange', this.alphabetList[index]);
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStart = false;
    },
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .list
    position absolute
    top 2.106667rem
    right 0
    bottom 0
    width .533333rem
    display flex
    flex-direction column
    justify-content center
    .item
      line-height .533333rem
      text-align center
      color $bgColor
</style>
