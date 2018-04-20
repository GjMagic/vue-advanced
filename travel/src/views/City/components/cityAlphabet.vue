<template>
  <ul class="list">
    <li 
      class="item"
      v-for="item of alphabetList"
      :key="item"
      :ref="item"
      @click="handleAlphabetClick"
      @touchstart="handleTouchStart"
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
      touchStart: false
    }
  },
  props: {
    cities: Object
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
        const startY = this.$refs['A'][0].offsetTop;
        const touchY = e.touches[0].clientY;
        let index = Math.floor((touchY - startY - 79) / 20);
        if (index >= 0 && index < this.alphabetList.length) { // 防止出界了也进行计算
          this.$emit('alphabetChange', this.alphabetList[index]);
        }
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
