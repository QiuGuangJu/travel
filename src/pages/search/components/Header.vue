<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-left">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
    </router-link>
      <input class="header-input" type="text" placeholder="输入城市或景点" ref="wrapper">
      <div class="header-right" @click="handleSearchChange()">
        搜索
      </div>
  </div>
</template>


<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "SearchHeader",
  computed: {
    ...mapState({
      searchHistory: 'searchHistory'
    })
  },
  methods: {
    handleSearchChange() {
      let data = (this.$refs.wrapper.value).trim()
      if ( !data || !(/\S+/.test(data)) || this.searchHistory.indexOf(data) !== -1 ) {
        return
      }
      
      this.historyChange(data)
      
    },
    ...mapMutations({
      historyChange: 'historyChange'
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
  display: flex
  line-height: $headerHeight
  background #fff
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
    background #eee
    border-radius 30px
    text-align center
    .icon
      padding-left: 20px
  .header-right
    width .64rem
    padding: 0 .1rem
    float: right
    text-align: center
</style>


