<template>
  <ul class="list">
    <li 
      class="item"
      v-for="(item, key) of cities"
      :key="key"
    >{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'cityAlphabet',
  props: {
    cities: Object
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
