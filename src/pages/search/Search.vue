<template>
  <div class="search">
    <search-header></search-header>
    <search-history></search-history>
    <search-hot></search-hot>
    <search-around></search-around>
  </div>
</template>

<script>
import SearchHeader from './components/Header'
import SearchHistory from './components/History'
import SearchHot from './components/Hot'
import SearchAround from './components/Around'

export default {
  name: "Search",
  components: {
    SearchHeader,
    SearchHistory,
    SearchHot,
    SearchAround
  }
}
</script>

<style lang="stylus" scoped>
.search
  position fixed
  height 100%
  width 100%
  background #f5f5f5
</style>


