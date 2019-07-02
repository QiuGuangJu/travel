<template>
  <router-link tag="div" to="/search" class="header">
      <div class="header-left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </div>
    <div class="header-input">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.city}}
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantou"></use>
        </svg>
      </div>
    </router-link>
  </router-link>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState({
      city: 'city'
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
  display: flex
  line-height: $headerHeight
  background: $bgColor
  color: #fff
  .header-left
    float: left
    width: .64rem
    font-size: .4rem
  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    background: #fff
    margin-top: .12rem
    margin-left: .2rem
    border-radius: .1rem
    text-align: left
    color: #ccc
    .icon
      padding-left: 5px
  .header-right
    min-width: 1.04rem
    padding: 0 .1rem
    float: right
    text-align: center
    color: #fff
</style>