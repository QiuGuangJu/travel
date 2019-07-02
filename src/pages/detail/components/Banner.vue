<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" alt="" class="banner-img">
      <div class="banner-info">
        <p class="info-title">
          {{this.sightName}}
        </p>
      </div>
      <div class="info-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-i-img"></use>
        </svg>
        <span class="icon-number">{{this.galleryImgs.length}}</span>
      </div>
    </div>
    <fade-animation>
      <common-gallery :imgs="galleryImgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from '../../common/gallery/Gallery'
import FadeAnimation from '../../common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallery: false
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    galleryImgs: Array
  },
  computed: {
    galleryImgsLength () {
      return galleryImgs.length
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose() {
      this.showGallery = !this.showGallery
    }
  },
  mounted () {
  }
  
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  color #fff
  .banner-img
    width 100%
  .banner-info
    position absolute
    left 0
    right 0
    bottom 0
    color #fff
    display flex
    background-image linear-gradient(bottom, rgba(0,0,0,.7), rgba(0,0,0,.02))
    .info-title
      flex 1
      text-align left 
      padding .1rem .2rem
      height .5rem
      line-height: .5rem
      font-size .4rem
  .info-icon
    position absolute
    width 1.2rem
    left .2rem
    bottom .7rem
    background rgba(0, 0, 0, .5)
    border-radius .2rem
    height .4rem
    line-height .4rem
    .icon
      margin-right .1rem

</style>


