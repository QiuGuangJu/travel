<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="slide-img" :src=item>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer:true,
        observeParents:true
      }
    }
  },
  methods: {
    handleGalleryClick() {
      this.$emit("close")
    }
  }
}
</script>

<style lang="stylus" scoped>
.container 
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background #000
  display flex
  flex-direction column
  justify-content center
  z-index 3
  .wrapper
    width 100%
    height 0
    padding-bottom 100%
    .slide-img
      width 100%
    .swiper-pagination
      color #fff

</style>


