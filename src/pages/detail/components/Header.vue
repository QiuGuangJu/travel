<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
    </router-link>
    <div class="header-fixed" v-show="showFixed" :style="opacityStyle">
        城市选择
        <router-link to="/">
          <div class="header-back">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fanhui"></use>
            </svg>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  computed: {
    showFixed () {
      return !this.showAbs
    }
  },
  methods: {
    handleScroll () {
      
      const scrollTop = document.documentElement.scrollTop

      if ( scrollTop > 0 && scrollTop < 120 ) {
        this.showAbs = false
        this.opacityStyle.opacity = scrollTop / 120
      } else if ( scrollTop === 0) {
        this.showAbs = true
      }
    }
  },
  /* 页面被展示时 */
  activated () {
    /* 全局事件的解绑 */
    window.addEventListener('scroll',this.handleScroll)
  },
  // 页面被切换时
  deactivated () {
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.header-abs
  position absolute
  top .2rem
  left .2rem
  width .6rem
  height .6rem
  border-radius 50%
  line-height .5rem
  background rgba(0,0,0,.4)
  color #fff
  font-size .3rem
  .icon
    padding 7px
.header-fixed
  position: fixed
  left 0
  right 0
  top 0
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  color: #fff
  background: $bgColor
  z-index 2
  .header-back
    position: absolute
    left: 0
    top:0
    width: .64rem
    text-align: center
    font-size: .4rem
    color: #fff
</style>

