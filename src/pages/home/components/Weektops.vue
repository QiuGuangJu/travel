<template>
  <div>
    <div class="header">
      <div class="title">
        <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="" class="icon">
        本周热门榜单
        </div>
      <div class="more">
        全部榜单
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantou1"></use>
        </svg>
      </div>
    </div>
    <div class="wrapper" ref="wrapper">
      <ul class="list" >
          <li class="item" v-for="item of weekTops" :key="item.id">
            <img class="rank" :src="item.rankImgUrl"  v-if="item.rankImgUrl">
            <img class="itemImg" :src="item.imgUrl">
            <p class="title">{{item.title}}</p>
            <p class="price">￥<span class="number">{{item.price}}</span></p>起
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: "HomeWeektops",
  props: {
    weekTops: Array
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs['wrapper'], {
      scrollX: true,
      eventPassthrough: "vertical"
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
.header
  display flex
  margin-top .5rem
  padding 0 .2rem
  justify-content space-between
  height .7rem
  line-height .7rem
  background #eee
  .title
    font-size .35rem
  .more
    font-size .2rem
.wrapper
  overflow hidden
  .list
    display inline-block
    white-space nowrap
    padding .2rem
    overflow auto
    .item
      margin .1rem
      display inline-block
      width 2rem
      position relative
      .rank
        position absolute
        top -5px
        left 0
        width 50px
      .itemImg
        width 100%
      .title
        margin-top .1rem
        font-size .25rem
        height .4rem
        line-height .4rem
        ellipsis()
      .price
        display inline-block
        font-size .2rem
        height .3rem
        line-height .3rem
        color $priceNumberColor
        .number
          font-size 1.5em
</style>


