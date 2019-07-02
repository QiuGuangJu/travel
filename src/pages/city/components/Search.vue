<template>
  <div>
    <div class="search">
      <input v-model="keywords" type="text" class="search-input" placeholder="输入城市名或拼音">
    </div>
    <div  class="search-content" ref="wrapper" v-show="keywords">
      <ul>
        <li class="search-item" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item" v-show="hasNoItem">未找到你要搜索的内容</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      list: [],
      timer: null,
      keywords: '',
      showNoResult: false
    }
  },
  methods: {
    handleCityClick (city) {
      this.change(city)
      /* 编程式导航 */
      this.$router.push('/')
    },
    ...mapMutations({
      change: 'cityChange'
    })
  },
  watch: {
    keywords () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keywords) {
        this.list = []
        return
      }
      this.timer = setTimeout( () => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach( (value) => {
            if ( value.spell.indexOf(this.keywords) > -1 ||
              value.name.indexOf(this.keywords) > -1) {
                result.push(value)
              }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  computed: {
    hasNoItem () {
      return !this.list.length
    }
  }

}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.search
  height: .72rem
  padding: 0 .1rem
  background: $bgColor
  .search-input
    box-sizing: border-box
    width: 100%
    height: .62rem
    line-height: .62rem
    border-radius: .06rem
    text-align: center
    color: #666
    padding: 0 .2rem
.search-content
  position: absolute 
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  background: #fff 
  z-index: 1
  text-align: left
  padding: .2rem
  overflow: hidden
  .search-item
    line-height: .5rem
    border-bottom: 1px solid #eee
</style>

