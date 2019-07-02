<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="( page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" class="icon-img-content">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props: {
      iconsList: Array
    },
    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true
        }
      }
    },
    computed: {
      pages () {
        const pages = [];
        this.iconsList.forEach( (item, index) => {
          const page = Math.floor( index / 8 );
          if ( !pages[page] ) {
            pages[page] = []
          }
          pages[page].push( item )
        })
        return pages
      }
    }
}
</script>

<style lang="stylus" scoped>
@import '~../../../assets/styles/varibles.styl'
@import '~../../../assets/styles/mixins.styl'
  .icons >>> .swiper-container 
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .2rem
    .icon
      float: left
      position: relative
      width: 25%
      height: 0
      padding-bottom: 25%
      overflow: hidden
      .icon-img 
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        overflow: hidden
        .icon-img-content
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        color: $darkTextColor
        ellipsis()
</style>


