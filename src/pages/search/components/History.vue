<template>
  <div class="container" v-show="showList">
    <div class="header">
      <div class="name">搜索历史</div>
      <div class="clear" @click="handleClearClick">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qingchu"></use>
        </svg>
        清除
        </div>
    </div>
    <div class="content" ref='wrapper'>
      <ul class="list">
        <li class="item" v-for="(item, index) of searchHistory" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: "SearchHistroy",
  computed: {
    ...mapState({
      searchHistory: 'searchHistory'
    }),
    showList () {
      return this.searchHistory.length
    }
  },
  mounted () {
    this.$nextTick( () => {
      this.scroll = new Bscroll(this.$refs['wrapper'], {
        scrollX: true,
        eventPassthrough: "vertical"
      })
    })
  },
  methods: {
    ...mapMutations({
      handleClearClick: 'handleClearClick'
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.container
  margin .1rem 0
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
    padding .2rem .1rem
    text-align left
    .list
      text-align left
      display inline-block
      white-space nowrap
      .item
        display inline-block
        border 1px solid #eee
        height .6rem
        line-height .6rem
        padding 0 .2rem
        margin .1rem
        border-radius .1rem

</style>


