<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="header-back">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </div>
    </router-link>
  </div>

  
  
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.header
  position: relative
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  color: #fff
  background: $bgColor
  .header-back
    position: absolute
    left: 0
    top:0
    width: .64rem
    text-align: center
    font-size: .4rem
    color: #fff
</style>

