<template>
  <div class="container">
    <div class="header">
      <div class="name">热门搜索</div>
      <div class="clear" @click="handleClearClick">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuaxin"></use>
        </svg>
        换一批
        </div>
    </div>
    <div class="content">
      <div class="icon-container">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-scenery"></use>
        </svg>
      </div>
      <ul class="list" ref="list-wrapper">
        <li class="item">1元门票</li>
        <li class="item">温泉滑雪折上再减</li>
        <li class="item">蚩尤九黎城过苗年</li>
        <li class="item">精品小团立减15</li>
        <li class="item">绿色星球主题公园</li>
        <li class="item">重庆换了谷</li>
        <li class="item">大足石刻</li>
        <li class="item">乐和乐都主题公园</li>
        <li class="item">重庆长江索道</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hot",
  data () {
    return {
      hotPage: 0
    }
  },
  methods: {
    handleClearClick () {
      this.hotPage += 1
      if (this.hotPage * 60 > this.$refs['list-wrapper'].clientHeight) {
        this.$refs['list-wrapper'].style.top = 0 + "px"
        this.hotPage = 0
        return
      }
      this.$refs['list-wrapper'].style.top =  - this.hotPage * 60 + "px"

    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.container
  margin .1rem 0
  padding-bottom 5px
  border-bottom 1px solid #eee
  background #fff
  .header
    display flex
    height .6rem
    line-height .6rem
    justify-content space-between
    background  #f0f5f6
    padding 0 .2rem
    border-bottom 1px solid #eee
    border-top 1px solid #eee
    .name
      color #888
    .clear
      color $bgColor
  .content
    margin-top .3rem
    height: 55px
    overflow hidden
    position relative
    .icon-container
      float left 
      height 50px
      line-height 50px
      font-size .3rem
      color #ccc
      padding 0 .2rem
      border-right 1px dotted #ccc
  .list
    overflow hidden
    display flex
    flex-flow: row wrap
    position absolute
    left 36px
    .item
      height .6rem
      line-height .6rem
      margin 0 10px
      padding 0 10px
      display inline-block
      border-right 1px dotted #ccc
      
</style>


