<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/DetailHeader'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 80rem
</style>
